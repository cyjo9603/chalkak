import produce from 'immer';

export interface UserInitialState {
  init: null;
}

const initialState: UserInitialState = {
  init: null,
};

const user = (state: UserInitialState = initialState, action: any) => {
  return produce(state, (draft: UserInitialState) => {
    switch (action.type) {
      default:
        break;
    }
  });
};

export default user;
