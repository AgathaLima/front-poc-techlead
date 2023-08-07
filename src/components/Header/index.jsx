import Box from '@mui/material/Box';
import { BiLogOut } from 'react-icons/bi';

export function Header (){
    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'space-between', background: '#0000ff'}}>
                <Box sx={{width: '300px', height: '150px', background: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h1>Logo Aqui</h1>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '80px', color: '#fff'}}>
                    <BiLogOut style={{fontSize: '50px'}}/>
                    <p style={{padding: '0 1em'}}>Sair</p>
                </Box>
            </Box>
        </>
    )
}