import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { editarUsuario, listarDepartamentos, listarUsuarioPorId } from '../service/api';


export default function EditarUsuario(){

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        getUsuario();
        getDepartamento();
    }, [])

    const [ usuario, setUsuario ] = useState({departamentoId: ''});
    const [departamentos, setDepartamentos] = useState();

    async function getDepartamento(){
       const data = await listarDepartamentos();
        setDepartamentos(data);
    }

    async function getUsuario(){
        const data = await listarUsuarioPorId(id);
         setUsuario(data);
     }

    function handleSubmit(e){
        e.preventDefault()
        editarUsuario(usuario, id);
        return navigate('/');
    }

    return(
        <>
            <Box>
                <h1>
                    Editar Usuário
                </h1>
            </Box>
            <form onSubmit={handleSubmit}>
                <Box sx={{
                    display:'flex',
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
                            value={usuario.nome}
                            onChange={(e)=>{
                                setUsuario({
                                    ...usuario,
                                    nome: e.target.value
                                })
                            }}
                            required
                        />
                        <TextField 
                            value={usuario.cpf}
                            onChange={(e)=> setUsuario({
                                ...usuario,
                                cpf: e.target.value
                            })}
                            required
                        />
                        <TextField 
                            value={usuario.email}
                            onChange={(e)=>{
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
                            value={usuario.cargo}
                            onChange={(e)=>{
                                setUsuario({
                                    ...usuario,
                                    cargo: e.target.value
                                })
                            }}
                            required
                        />
                        <TextField 
                            select
                            value={usuario.departamentoId}
                            onChange={(e) => {
                                setUsuario({
                                    ...usuario,
                                    departamentoId: e.target.value
                                })
                            }}
                        >
                            {departamentos?.map(departamento => {
                                return (
                                 <MenuItem key={departamento.id} value={departamento.id}>{departamento.descricao}</MenuItem>
                                )
                            })
                            }
                        </TextField>                 
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <Button 
                        onClick={() =>  navigate('/')}
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
                        Salvar
                    </Button>
                </Box>
            </form>
        </>
    )
}