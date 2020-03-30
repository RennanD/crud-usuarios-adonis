export function addUserRequest(data) {
  return {
    type: '@user/ADD_REQUEST',
    payload: { data },
  };
}

export function addUserSuccess() {
  return {
    type: '@user/ADD_SUCCESS',
  };
}

export function updateUserRequest(data) {
  return {
    type: '@user/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateUserSuccess() {
  return {
    type: '@user/UPDATE_SUCCESS',
  };
}

export function userFailure() {
  return {
    type: '@user/FAILURE',
  };
}
