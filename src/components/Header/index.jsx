import Box from '@mui/material/Box';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const menuStyles = {
    display: 'flex',
    width: '500px',
    justifyContent: 'space-around',
    fontSize: '30px',
}

export function Header (){
    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'space-between', background: '#3d3dfc', alignItems: 'center'}}>
                <Box sx={{width: '300px', height: '150px', background: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h1>Logo Aqui</h1>
                </Box>
                <Box>
                    <nav>
                        <ul style={menuStyles}>
                            <Link style={{color: '#fff'}} to='/'>
                                <li>Usuários</li>
                            </Link>
                            <Link style={{color: '#fff'}} to='/departamento'>
                                <li>Departamento</li>
                            </Link>
                            
                        </ul>
                    </nav>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '80px', color: '#fff'}}>
                    <BiLogOut style={{fontSize: '50px'}}/>
                    <p style={{padding: '0 1em'}}>Sair</p>
                </Box>
            </Box>
        </>
    )
}