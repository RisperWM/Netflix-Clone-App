import axios from 'axios';

const API_KEY= 'AIzaSyBoJhOwuo-lFofriIW9dN8e3zrK2l3O2Mo';
const TMDB_API_KEY ="778435664fdbb281b769e1fbd9912487";
const TMDB_API_ACCESS_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Nzg0MzU2NjRmZGJiMjgxYjc2OWUxZmJkOTkxMjQ4NyIsInN1YiI6IjY0ZjMzN2E2OTdhNGU2MDBmZWE5YmU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n24CYl0acIjONMFfAue34f8BvBhimC86nNv3XuZqsTo";

async function authenticate(mode, email, password){
    const url =`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

    const response = await axios.post(url,{
        email:email,
        password:password,
        returnSecureToken:true
    })
    const token = response.data.idToken;

    return token
}
export function createUser(email,password){
   return authenticate('signUp', email,password)     
}

export  function login(email,password){
    return authenticate('signInWithPassword',email, password)    
}