import axios from "axios";

//const api = process.env.ENDPOINT_API;

//http://127.0.0.1:8000/users
export async function listarUsuarios() {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
  const data = response.data;
  return data;
}

// http://127.0.0.1:8000/users/${id}
export async function listarUsuarioPorId(id) {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/users/${id}`
  );
  const data = response.data;
  return data;
}

//http://127.0.0.1:8000/users/criar
export async function criarUsuario(dados) {
  try {
    axios.post(`${process.env.REACT_APP_API_URL}/users`, {
      ...dados,
    });
  } catch (error) {
    console.log(error);
  }
}

//http://127.0.0.1:8000/users/editar/${id}
export async function editarUsuario(dados, id) {
  try {
    axios.put(`${process.env.REACT_APP_API_URL}/users/editar/${id}`, {
      ...dados,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function listarDepartamentos() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/department`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function listarDepartamentoPorId(id) {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/department/${id}`
  );
  const data = response.data;
  return data;
}

export async function criarDepartamento(dados) {
  try {
    axios.post(`${process.env.REACT_APP_API_URL}/department`, {
      descricao: dados.descricao,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function editarDepartamento(dados, id) {
  try {
    axios.put(`${process.env.REACT_APP_API_URL}/department/${id}`, {
      ...dados,
    });
  } catch (error) {
    console.log(error);
  }
}
