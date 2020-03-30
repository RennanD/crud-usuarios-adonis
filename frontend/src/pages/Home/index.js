import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { toast } from 'react-toastify';

import { Container, UserList, Empty } from './styles';

import UserCard from '~/components/CardUser';

import Header from '~/components/Header';
import api from '~/services/api';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');

      const data = response.data.map((user) => ({
        ...user,
        dateFormatted: format(
          parseISO(user.born_date),
          "dd 'de' MMM 'de' yyyy",
          {
            locale: ptBR,
          }
        ),
      }));

      setUsers(data);
    }

    loadUsers();
  }, []);

  async function handleDelete(id) {
    await api.delete(`users/${id}`);

    toast.success('Usuário deletado com sucesso!');

    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <Container>
      <Header />
      {users.length <= 0 ? (
        <Empty>
          <strong>Não há usuários para listar.</strong>
        </Empty>
      ) : (
        <UserList>
          {users.map((user) => (
            <UserCard handleDetele={handleDelete} user={user} />
          ))}
        </UserList>
      )}
    </Container>
  );
}
