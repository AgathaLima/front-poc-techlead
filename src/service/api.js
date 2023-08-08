import axios from 'axios';

//const api = process.env.ENDPOINT_API;

export async function listarUsuarios(){
    const response = await axios.get(`http://localhost:5000/usuarios`)
      const data = response.data
      return data;
}