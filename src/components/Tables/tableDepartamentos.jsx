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
import { BiDownload, BiEdit } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { listarDepartamentos } from '../../service/api';

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

export function TableDepartamentos() {

    const [departamentos, setDepartamentos] = useState();

    useEffect(() => {
        getDepartamento();
    }, []);

    const getDepartamento = async () => {
        const dados = await listarDepartamentos();
        setDepartamentos(dados)
    }

    return (
        <>
            {departamentos ?
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Departamento ID</StyledTableCell>
                                <StyledTableCell align="center">Nome do Departamento</StyledTableCell>
                                <StyledTableCell align="center">Ações</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {departamentos.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row" align="center">
                                        {row.id}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.descricao}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <div>
                                        <Link to={`/editar-departamento/${row.id}`}>
                                            <BiEdit style={{fontSize: '25px', color:"#3d3dfc"}} />
                                        </Link>
                                        <Link
                                          to={`${process.env.REACT_APP_API_URL}/department/${row.id}/report`}
                                        >
                                          <BiDownload
                                            style={{ fontSize: "25px", color: "#3d3dfc" }}
                                          />
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
