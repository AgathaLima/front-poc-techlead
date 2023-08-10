import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { editarDepartamento, listarDepartamentoPorId } from '../service/api';


export function EditarDepartamento() {

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getDepartamento();
    }, [])

    const [departamento, setDepartamento] = useState({});

    const getDepartamento = async () => {
       const data = await listarDepartamentoPorId(id);
       setDepartamento(data);
    }

    function handleSubmit(e) {
        e.preventDefault()
        editarDepartamento(departamento, id)
        return navigate('/departamento');
    }

    console.log(departamento)

    return (
        <>
            <Box>
                <h1>
                    Editar Departamento
                </h1>
            </Box>
            { departamento &&
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
                                        variant="outlined"
                                       value={departamento.descricao}
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
                                    Editar
                                </Button>
                            </Box>
                        </form>
            }
        </>
    )
}