import React from 'react';

import { Container, UserList } from './styles';

import UserCard from '~/components/CardUser';

import Header from '~/components/Header';

export default function Home() {
  return (
    <Container>
      <Header />
      <UserList>
        <UserCard />
        <UserCard />
        <UserCard />
      </UserList>
    </Container>
  );
}
