import axios from 'axios';

//const api = process.env.ENDPOINT_API;


//http://127.0.0.1:8000/users
export async function listarUsuarios(){
    const response = await axios.get(`http://localhost:3000/usuarios`)
      const data = response.data
      return data;
}

// http://127.0.0.1:8000/users/${id}
export async function listarUsuarioPorId(id){
  const response = await axios.get(`http://localhost:3000/usuarios/${id}`)
    const data = response.data
    return data;
}

//http://127.0.0.1:8000/users/criar
export async function criarUsuario(dados){
  try{
    axios.post(`http://localhost:3000/usuarios`,{
      ...dados
    } )
  }
  catch(error) {
    console.log(error);
  }
}

//http://127.0.0.1:8000/users/editar/${id}
export async function editarUsuario(dados, id){
  try {
    axios.put(`http://localhost:3000/usuarios/${id}`, {
      ...dados
    })
  }catch(error) {
    console.log(error);
  }
}


export async function listarDepartamentos(){
  try{
    const response = await axios.get(`http://localhost:3000/departamento`)
    const data = response.data
    return data;
  }
  catch(error){
    console.log(error)
  }
}

export async function listarDepartamentoPorId(id){
  const response = await axios.get(`http://localhost:3000/departamento/${id}`)
    const data = response.data
    return data;
}

export async function criarDepartamento(dados){
  try{
    axios.post(`http://localhost:3000/departamento`,{
      descricao: dados.descricao
    } )
  }
  catch(error) {
    console.log(error);
  }
}

export async function editarDepartamento(dados, id){
  try {
    axios.put(`http://localhost:3000/departamento/${id}`, {
      ...dados
    })
  }catch(error) {
    console.log(error);
  }
}



