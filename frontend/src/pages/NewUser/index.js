import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { MenuItem, Button } from '@material-ui/core';

import { Form, Formik } from 'formik';

import { Container, FormContainer, InputGroup, SelectInput } from './styles';

import Header from '~/components/Header';
import Input from '~/components/Form/Input';

import { addUserRequest } from '~/store/modules/user/actions';

export default function NewUser() {
  const initalData = {};

  const dispatch = useDispatch();

  const [gender, setGender] = useState(0);

  async function handleSubmit(values) {
    const data = {
      ...values,
      gender,
    };

    dispatch(addUserRequest(data));
  }

  return (
    <Container>
      <Header backPage />

      <Formik
        initialValues={initalData}
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

              <SelectInput
                labelId="demo-simple-select-outlined-label"
                label="Gênero"
                id="demo-simple-select-outlined"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                variant="outlined"
              >
                <MenuItem value={0}>
                  <em>Selecione um genero</em>
                </MenuItem>
                <MenuItem value={1}>Masculino</MenuItem>
                <MenuItem value={2}>Feminino</MenuItem>
                <MenuItem value={3}>Outro</MenuItem>
              </SelectInput>

              <Input
                name="born_date"
                id="date"
                label="Data de nascimento"
                type="date"
                defaultValue={new Date()}
                InputLabelProps={{
                  shrink: true,
                }}
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
              Salvar
            </Button>
          </FormContainer>
        </Form>
      </Formik>
    </Container>
  );
}
