import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../../service/api'

export function FormLogin() {

    const [usuario, setLogin] = useState({ email: '', password: '' });
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        await login(usuario);
        return navigate('/');

    }


    return (
        <>
            <Box>
                <h1>
                    Login
                </h1>
            </Box>
            <form onSubmit={handleSubmit}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '250px',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        width: '48%',
                    }}>
                        <TextField
                            id="outlined-basic"
                            label="email"
                            variant="outlined"
                            onChange={(e) => {
                                setLogin({
                                    ...usuario,
                                    email: e.target.value
                                })
                            }}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            label="senha"
                            variant="outlined"
                            onChange={(e) => {
                                setLogin({
                                    ...usuario,
                                    password: e.target.value
                                })
                            }}
                            required
                        />
                    </Box>
                    
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button

                        type='submit'
                        sx={{
                            color: '#fff',
                            background: '#3d3dfc',
                            width: '250px',
                        }}>
                        Logar
                    </Button>
                </Box>
            </form>
        </>
    )
}