import React from 'react';

import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';
import { Add, ChevronLeft } from '@material-ui/icons';

import { Container } from './styles';

export default function Header({ backPage }) {
  const history = useHistory();

  function handlenNavigate(route) {
    history.push(route);
  }

  return (
    <Container>
      {backPage ? (
        <h2>Formulário de usuário</h2>
      ) : (
        <h2>Listagem de Usuários</h2>
      )}

      {backPage ? (
        <Button
          onClick={() => handlenNavigate('/')}
          variant="outlined"
          color="default"
        >
          <ChevronLeft />
          Voltar
        </Button>
      ) : (
        <Button
          onClick={() => handlenNavigate('/new-user')}
          variant="outlined"
          color="primary"
        >
          <Add color="primary" />
          Novo Usuário
        </Button>
      )}
    </Container>
  );
}

Header.propTypes = {
  backPage: PropTypes.bool.isRequired,
};

Header.defaulProps = {
  backPage: false,
};
