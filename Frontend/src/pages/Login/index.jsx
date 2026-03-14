import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "./styles"; 

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMensagem("");

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, senha })
      });

      let data = {};
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Resposta inválida do servidor");
      }

      if (response.ok) {
        localStorage.setItem("usuario", JSON.stringify(data));

        setMensagem("Login realizado com sucesso!");
        navigate("/home");
      } else {
        setMensagem(data.erro || "Erro no login");
      }
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao conectar com o servidor");
    }
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
                required
              />
            </InputBox>

            <InputBox>
              <Input
                placeholder="Senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </InputBox>

            <Remember>
              <label>
                <input type="checkbox" />
                Lembrar minha senha
              </label>
            </Remember>

            <SubmitButton type="submit">Entrar</SubmitButton>

            {mensagem && <p>{mensagem}</p>}

            <RegisterLink>
              <p>
                Não possui uma conta? <Link to="/cadastro">Cadastre-se</Link>
              </p>
            </RegisterLink>
          </Form>
        </LeftSide>
      </Wrapper>
    </Container>
  );
}

export default Login;