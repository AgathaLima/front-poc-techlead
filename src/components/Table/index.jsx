import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0000ff',
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
    {usuario: 'Usuário 1', departamento: 'departameto 1'},
    {usuario: 'Usuário 2', departamento: 'departameto 2'},
    {usuario: 'Usuário 3', departamento: 'departameto 3'},
    {usuario: 'Usuário 4', departamento: 'departameto 4'},
    {usuario: 'Usuário 5', departamento: 'departameto 5'},
]

export function Tables() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="center">Usuários</StyledTableCell>
            <StyledTableCell align="center">Departamentos</StyledTableCell>
            <StyledTableCell align="center">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dados.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row"  align="center">
                {row.usuario}
              </StyledTableCell>
              <StyledTableCell align="center">{row.departamento}</StyledTableCell>
              <StyledTableCell align="center">{}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
