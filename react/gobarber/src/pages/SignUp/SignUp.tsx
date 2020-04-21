import React from 'react';
import logoImg from 'assets/img/logo.svg';
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Input, Button } from 'components';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="logo" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input icon={FiUser} name="name" placeholder="Nome" />
        <Input icon={FiMail} name="email" placeholder="E-mail" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="login">
        <FiArrowLeft />
        Voltar para login
      </a>
    </Content>
  </Container>
);

export default SignUp;
