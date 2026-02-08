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
  return (
    <Container>
      <Wrapper>
         <RightSide>
  <img src={sofaImg} alt="Imagem de sofá" />

      </RightSide>

        <LeftSide>
          <Title>Login</Title>

          <Form>
            <InputBox>
            <a>
              Email:
            </a>
              <Input placeholder="Usuário" type="email" />
            </InputBox>
            <a>
              Senha:
            </a>
            <InputBox>
              <Input placeholder="Senha" type="password" />
            </InputBox>

            <Remember>
              <label>
                <input type="checkbox" />
                Lembrar minha senha
              </label>
              <a href="#">Esqueci minha senha</a>
            </Remember>

            <SubmitButton type="submit">Entrar</SubmitButton>

            <RegisterLink>
              <p> Não possui uma conta? <Link to="/Cadastro">Cadastre-se</Link></p>
            </RegisterLink>
          </Form>
        </LeftSide>
      </Wrapper>
    </Container>
  );
}

export default Login;
