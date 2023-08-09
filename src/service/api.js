import axios from 'axios';

//const api = process.env.ENDPOINT_API;

export async function listarUsuarios(){
    const response = await axios.get(`http://localhost:3000/usuarios`)
      const data = response.data
      return data;
}

export async function listarUsuarioPorId(id){
  const response = await axios.get(`http://localhost:3000/usuarios/${id}`)
    const data = response.data
    return data;
}

export async function listarDepartamento(){
  try{
    const response = await axios.get(`http://localhost:3000/departamento`)
    const data = response.data
    return data;
  }
  catch(error){
    console.log(error)
  }
}

export async function criarUsuario(dados){
  try{
    axios.post(`http://localhost:3000/usuarios`,{
      nome: dados.nome,
      cpf: dados.cpf,
      email: dados.email,
      cargo: dados.cargo,
      departamentoId: dados.departamentoId
    } )
  }
  catch(error) {
    console.log(error);
  }
}

export async function editarUsuario(dados, id){
  try {
    axios.put(`http://localhost:3000/usuarios/${id}`, {
      nome: dados.nome,
      cpf: dados.cpf,
      email: dados.email,
      cargo: dados.cargo,
      departamentoId: dados.departamentoId
    })
  }catch(error) {
    console.log(error);
  }
}