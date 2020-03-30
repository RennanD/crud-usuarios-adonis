import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { parseISO } from 'date-fns';

import { MenuItem, Button } from '@material-ui/core';

import { Form, Formik } from 'formik';

import { Container, FormContainer, InputGroup, SelectInput } from './styles';

import Header from '~/components/Header';
import Input from '~/components/Form/Input';

import api from '~/services/api';

export default function Details() {
  const [gender, setGender] = useState('');
  const [user, setUser] = useState();

  const params = useParams();

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/users/${params.id}`);

      const data = {
        name: response.data.name,
        email: response.data.email,
        gender: response.data.gender,
        born_date: response.data.born_date,
        bio: response.data.bio,
      };

      setUser(data);
    }
    loadUser();
  }, [params]);

  function handleSubmit(values) {}

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
              <InputGroup>
                <Input
                  name="email"
                  id="outlined-search"
                  label="E-mail"
                  type="email"
                  variant="outlined"
                />
              </InputGroup>

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
