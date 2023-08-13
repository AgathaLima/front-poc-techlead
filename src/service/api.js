import axios from "axios";


//const api = process.env.ENDPOINT_API;

//http://127.0.0.1:8000/users
export async function listarUsuarios() {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`, 
  { headers: { 'Authorization': localStorage.getItem("isAuth") } });
  const data = response.data;
  return data;
}

export async function login(dados) {

  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, { ...dados });
    const data = response.data;
    localStorage.setItem("isAuth", data.tokens);
    return data;
  } catch (error) {
    console.log(error);

  }


}

// http://127.0.0.1:8000/users/${id}
export async function listarUsuarioPorId(id) {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/users/${id}`,
    { headers: { 'Authorization': localStorage.getItem("isAuth") } }
  );
  const data = response.data;
  return data;
}

//http://127.0.0.1:8000/users/criar
export async function criarUsuario(dados) {
  try {
    axios.post(`${process.env.REACT_APP_API_URL}/users`, {
      ...dados,
      headers: { 'Authorization': localStorage.getItem("isAuth") }
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
    }, 
    { headers: { 'Authorization': localStorage.getItem("isAuth") } }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function listarDepartamentos() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/department`,
      { headers: { 'Authorization': localStorage.getItem("isAuth") } }

    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function listarDepartamentoPorId(id) {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/department/${id}`, 
    { headers: { 'Authorization': localStorage.getItem("isAuth") } }

  );
  const data = response.data;
  return data;
}

export async function criarDepartamento(dados) {
  try {
    axios.post(`${process.env.REACT_APP_API_URL}/department`, {
      descricao: dados.descricao,
    }, 
    { headers: { 'Authorization': localStorage.getItem("isAuth") } }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function editarDepartamento(dados, id) {
  try {
    axios.put(`${process.env.REACT_APP_API_URL}/department/${id}`, {
      ...dados,
    }, 
    { headers: { 'Authorization': localStorage.getItem("isAuth") } }
    );
  } catch (error) {
    console.log(error);
  }
}
