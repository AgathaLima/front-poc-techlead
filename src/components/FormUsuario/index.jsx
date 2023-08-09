import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { criarUsuario, listarDepartamento } from '../../service/api';


export function FormUsuario(){

    useEffect(()=> {
        getDepartamento();
    }, [])

    const [ usuario, setUsuario ] = useState({});
    const [departamentos, setDepartamentos] = useState();

    async function getDepartamento(){
       const data = await listarDepartamento();
        setDepartamentos(data);
    }

    function handleSubmit(e){
        e.preventDefault()
        criarUsuario(usuario)
    }

    //console.log(usuario)

    return (
        <>
            <Box>
                <h1>
                    Cadastrar Usuário
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
                            id="outlined-basic" 
                            label="Nome" 
                            variant="outlined" 
                            onChange={(e)=>{
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
                            onChange={(e)=> setUsuario({
                                ...usuario,
                                cpf: e.target.value
                            })}
                            required
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined"
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
                            id="outlined-basic" 
                            label="Cargo" 
                            variant="outlined" 
                            onChange={(e)=>{
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
                <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <Button sx={{
                        color: '#00ff',
                        border: '2px solid #00ff',
                        width: '250px',
                    }}>
                        Voltar
                    </Button>
                    <Button
                     type='submit'
                     sx={{
                        color: '#fff',
                        background: '#00ff',
                        width: '250px',
                    }}>
                        Cadastrar
                    </Button>
                </Box>
            </form>
        </>
    )
}