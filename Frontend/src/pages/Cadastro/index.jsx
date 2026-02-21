import React, { useState } from 'react';
import api from "../../services/API";
import {
  Container,
  Wrapper,
  LeftSide,
  Title,
  Form,
  InputBox,
  Input,
  SubmitButton,
  RegisterLink
} from '../Login/styles';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      const response = await api.post("/usuarios", {
        nome,
        email,
        senha: password
      });

      alert("Usuário cadastrado com sucesso!");
      console.log(response.data);

      setNome('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar usuário");
    }
  };

  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <Title>Criar Conta</Title>
          <p>Preencha os dados abaixo para se cadastrar</p>

          <Form onSubmit={handleSubmit}>
            <InputBox>
              <label>Nome</label>
              <Input
                type="text"
                placeholder="Digite seu nome"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </InputBox>

            <InputBox>
              <label>E-mail</label>
              <Input
                type="email"
                placeholder="seu@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputBox>

            <InputBox>
              <label>Senha</label>
              <Input
                type="password"
                placeholder="Crie uma senha"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputBox>

            <InputBox>
              <label>Confirmar Senha</label>
              <Input
                type="password"
                placeholder="Repita a senha"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </InputBox>

            <SubmitButton type="submit">
              Cadastrar
            </SubmitButton>

            <RegisterLink>
              <p>
                Já possui uma conta? <Link to="/">Faça login</Link>
              </p>
            </RegisterLink>
          </Form>
        </LeftSide>
      </Wrapper>
    </Container>
  );
}

export default Cadastro;