import { all, put, call, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { addUserSuccess, userFailure, updateUserSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* addUser({ payload }) {
  const { data } = payload;

  try {
    yield call(api.post, '/users', data);

    yield put(addUserSuccess());

    toast.success('Usuário cadastrado com sucesso');
    history.push('/');
  } catch (error) {
    yield put(userFailure());
    toast.error('Falha ao cadastrar o usuário, tente novamente');
  }
}

export function* updateUser({ payload }) {
  const { id, name, email, bio } = payload.data;

  try {
    const response = yield call(api.put, `/users/${id}`, {
      name,
      email,
      bio,
    });

    console.tron.log(response.data);

    yield put(updateUserSuccess());
    toast.success('Usuário atualizado com sucesso!');
    history.push('/');
  } catch (error) {
    yield put(userFailure());
    toast.error(
      'Erro ao atualizar o usuário, verifique se os dados estão corretos'
    );
  }
}

export default all([
  takeLatest('@user/ADD_REQUEST', addUser),
  takeLatest('@user/UPDATE_REQUEST', updateUser),
]);
