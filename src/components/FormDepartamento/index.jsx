import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { criarDepartamento } from '../../service/api'



export function FormDepartamento() {

    const [departamento, setDepartamento] = useState();

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        criarDepartamento(departamento)
        return navigate('/departamento');
    }

    console.log(departamento)

    return (
        <>
            <Box>
                <h1>
                    Cadastrar Departamento
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
                            label="Novo Departamento"
                            variant="outlined"
                            onChange={(e) => {
                                setDepartamento({
                                    ...departamento,
                                    descricao: e.target.value
                                })
                            }}
                            required
                        />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button 
                        onClick={() => navigate('/departamento')}
                        sx={{
                        color: '#3d3dfc',
                        border: '2px solid #3d3dfc',
                        width: '250px',
                    }}>
                        Voltar
                    </Button>
                    <Button

                        type='submit'
                        sx={{
                            color: '#fff',
                            background: '#3d3dfc',
                            width: '250px',
                        }}>
                        Cadastrar
                    </Button>
                </Box>
            </form>
        </>
    )
}