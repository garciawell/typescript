import React, { useEffect, useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './styles';
import logo from '../../assets/img/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [inputError, setInputError] = useState('');

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o nome do repositório');
      return;
    }

    try {
      const { data } = await api.get<Repository>(`/repos/${newRepo}`);
      setRepositories([...repositories, data]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca do repositório');
    }
  }

  return (
    <>
      <img src={logo} alt="GIthuber" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite aqui"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((item) => (
          <a key={item.full_name} href="teste">
            <img src={item.owner.avatar_url} alt={item.owner.login} />
            <div>
              <strong>{item.full_name}</strong>
              <p>{item.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
