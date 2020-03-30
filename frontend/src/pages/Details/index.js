import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { Form, Formik } from 'formik';

import { Button } from '@material-ui/core';
import { Container, FormContainer } from './styles';

import Header from '~/components/Header';
import Input from '~/components/Form/Input';

import api from '~/services/api';

import { updateUserRequest } from '~/store/modules/user/actions';

export default function Details() {
  const [user, setUser] = useState();

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/users/${params.id}`);

      const data = {
        name: response.data.name,
        email: response.data.email,
        bio: response.data.bio,
      };

      setUser(data);
    }
    loadUser();
  }, [params]);

  function handleSubmit(values) {
    const data = {
      ...values,
      id: params.id,
    };

    dispatch(updateUserRequest(data));
  }

  return (
    <Container>
      <Header backPage />

      {user && (
        <Formik
          initialValues={user}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form>
            <FormContainer>
              <Input
                name="name"
                id="outlined-search"
                label="Nome Completo"
                type="text"
                variant="outlined"
              />
              <Input
                style={{ marginTop: 23, marginBottom: 23 }}
                name="email"
                id="outlined-search"
                label="E-mail"
                type="email"
                variant="outlined"
              />

              <Input
                name="bio"
                id="outlined-multiline-static"
                label="Digite sua biografia"
                multiline
                rows="4"
                variant="outlined"
              />

              <Button type="submit" color="primary">
                Editar
              </Button>
            </FormContainer>
          </Form>
        </Formik>
      )}
    </Container>
  );
}
