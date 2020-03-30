import { produce } from 'immer';

const INITIAL_DATA = {
  loading: false,
};

export default function user(state = INITIAL_DATA, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/ADD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/ADD_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@user/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/UPDATE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@user/FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
