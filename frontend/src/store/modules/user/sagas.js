import { all, put, call, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { addUserSuccess, userFailure } from './actions';

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

export default all([takeLatest('@user/ADD_REQUEST', addUser)]);
