import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [novoUsuario, setNovoUsuario] = useState({
   username: '',
    password: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNovoUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8090/api', novoUsuario);
      setNovoUsuario({
        username: '',
        password: '',
      
      });
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };
  
  
  const irPara= useNavigate();
  const handleClick = (path) => {
    irPara("/");
  };
  return (
    <div>
      <h1>Página de Cadastro</h1> 

      <form onSubmit={handleSubmit}>
     
      {/* Campo para o cadastro*/}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={novoUsuario.username}
        onChange={handleInputChange}
      />
      {/* Campo para a senha */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={novoUsuario.password}
        onChange={handleInputChange}
      />
      {/* Botão de envio do formulário */}
      <button type="submit">Cadastrar Usuário</button>
    </form>

        
      <button onClick= {handleClick}>Voltar</button>
    </div>
  );
}
export default Cadastro;



