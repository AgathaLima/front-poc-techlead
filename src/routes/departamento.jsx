import { Link } from "react-router-dom";
import { TableDepartamentos } from "../components/Tables/tableDepartamentos";
import Box from '@mui/material/Box';
import { FaPlus } from "react-icons/fa";

export default function Departamento() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <h1>Lista de Departamento</h1>
                <Link
                    style={{
                        width: '30%',
                        borderRadius: '12px',
                        color: '#fff',
                        background: '#3d3dfc',
                        height: '40px',
                    }}
                    to="/cadastrar-departamento">
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <FaPlus />
                        <h4 style={{ marginLeft: '1em' }}>Cadastrar Departamento</h4>
                    </Box>
                </Link>
            </Box>
            <TableDepartamentos />
        </>
    )
}