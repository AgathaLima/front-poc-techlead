import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { listarUsuarios } from '../../service/api';
//import { GoTrash } from "react-icons/go";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#3d3dfc',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const dados = [
        {
            id: 1,
            nome: "João das Neves",
            email: "teste@teste.com",
            cargo: "Admin",
            departamentoId: 1
        }
    ]

export function TableUsuarios() {

    const [usuarios, setUsuarios] = useState();

    useEffect(() => {
        getUsuarios();
    }, []);

    async function getUsuarios() {
        const dados = await listarUsuarios();
        setUsuarios(dados)
    }

    return (
        <>
            {usuarios ?
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Usuários</StyledTableCell>
                                <StyledTableCell align="center">Cargo</StyledTableCell>
                                <StyledTableCell align="center">Ações</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {usuarios.map((row, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="row" align="center">
                                        {row.nome}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.cargo}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <div>
                                        <Link to={`/editar-usuario/${row.id}`}>
                                            <BiEdit style={{fontSize: '25px', color:"#3d3dfc"}} />
                                        </Link>
                                        </div>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                :
                <p>Loading...</p>
            } 
        </>
    );
}
