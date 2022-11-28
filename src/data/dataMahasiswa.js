import axios from 'axios'


const apiMahasiswa = axios.create({
    baseURL: "http://localhost:8888/",
    // params: {
      // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
      // api_key: "fcedb118a82853890434143eb4798d73",
      // api_key: process.env.REACT_APP_TMDB_KEY,
    //   api_key : '6b7294545126ffcdd25d1349bab56738'
    // },
    headers: {
        // Authorization: `Bearer: ${token}`,
        "Content-Type": "application/json",
    },
    mode: "cors",
  });

export default apiMahasiswa