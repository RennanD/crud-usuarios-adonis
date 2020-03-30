import React, { useState } from 'react';

import { MenuItem, Button } from '@material-ui/core';

import { Form, Formik } from 'formik';

import {
  Container,
  FormContainer,
  AvatarInput,
  InputGroup,
  SelectInput,
} from './styles';

import Header from '~/components/Header';
import Input from '~/components/Form/Input';

export default function Details() {
  const initalData = {};

  const [gender, setGender] = useState(0);

  function handleSubmit(values) {
    console.log(values);
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
            <AvatarInput />

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
                placeholder="Gênero"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={0}>Masculino</MenuItem>
                <MenuItem value={1}>Feminino</MenuItem>
                <MenuItem value={2}>Outro</MenuItem>
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

            <Button color="primary">Editar</Button>
          </FormContainer>
        </Form>
      </Formik>
    </Container>
  );
}
