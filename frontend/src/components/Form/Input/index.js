/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { useField } from 'formik';

import { TextField } from '@material-ui/core';

export default function Input({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      {meta.error && <span> {meta.error} </span>}
      <TextField
        id="outlined-search"
        label="Nome Completo"
        type="text"
        variant="outlined"
        {...field}
        {...props}
      />
    </>
  );
}
