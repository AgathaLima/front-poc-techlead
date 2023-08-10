import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { criarUsuario, listarDepartamentos, } from '../../service/api';
import { useNavigate } from 'react-router-dom';


export function FormUsuario() {

    useEffect(() => {
        getDepartamento();
    }, [])

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({});
    const [departamentos, setDepartamentos] = useState();

    async function getDepartamento() {
        const data = await listarDepartamentos();
        setDepartamentos(data);
    }

    function handleSubmit(e) {
        e.preventDefault()
        criarUsuario(usuario)
    }

    return (
        <>
            <Box>
                <h1>
                    Cadastrar Usuário
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
                            label="Nome"
                            variant="outlined"
                            onChange={(e) => {
                                setUsuario({
                                    ...usuario,
                                    nome: e.target.value
                                })
                            }}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            label="CPF"
                            variant="outlined"
                            onChange={(e) => setUsuario({
                                ...usuario,
                                cpf: e.target.value
                            })}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            onChange={(e) => {
                                setUsuario({
                                    ...usuario,
                                    email: e.target.value
                                })
                            }}
                            required
                        />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        width: '48%',
                    }}>
                        <TextField
                            id="outlined-basic"
                            label="Cargo"
                            variant="outlined"
                            onChange={(e) => {
                                setUsuario({
                                    ...usuario,
                                    cargo: e.target.value
                                })
                            }}
                            required
                        />
                        <TextField
                            id="select"
                            label="Departamento"
                            select
                            onChange={(e) => {
                                setUsuario({
                                    ...usuario,
                                    departamentoId: e.target.value
                                })
                            }}
                        >
                            {departamentos &&
                                departamentos.map(departamento => {
                                    return (
                                        <MenuItem key={departamento.id} value={departamento.id}>{departamento.descricao}</MenuItem>
                                    )
                                })
                            }
                        </TextField>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button
                        onClick={() => navigate('/')}
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