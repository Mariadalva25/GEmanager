import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import sofaImg from "../../Components/Img/sofa-unsplash.jpg";

import {
  Container,
  Wrapper,
  LeftSide,
  RightSide,
  Title,
  Form,
  InputBox,
  Input,
  Remember,
  SubmitButton,
  RegisterLink
} from './styles';

function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    const data = await response.json();

    setMensagem(data.mensagem || data.erro);
  };

  return (
    <Container>
      <Wrapper>

        <RightSide>
          <img src={sofaImg} alt="Imagem de sofá" />
        </RightSide>

        <LeftSide>
          <Title>Login</Title>

          <Form onSubmit={handleLogin}>

            <InputBox>
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputBox>

            <InputBox>
              <Input
                placeholder="Senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </InputBox>

            <Remember>
              <label>
                <input type="checkbox" />
                Lembrar minha senha
              </label>
              <a href="#">Esqueci minha senha</a>
            </Remember>


            <SubmitButton type onClick={handleLogin}>
              Entrar
            </SubmitButton>

            {mensagem && <p>{mensagem}</p>}

            <RegisterLink>
              <p>
                Não possui uma conta? <Link to="/Cadastro">Cadastre-se</Link>
              </p>
            </RegisterLink>

          </Form>
        </LeftSide>

      </Wrapper>
    </Container>
  );
}

export default Login;