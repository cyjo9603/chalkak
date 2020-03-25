import produce from 'immer';

export interface PostInitialState {
  init: null;
}

const initialState: PostInitialState = {
  init: null,
};

const post = (state: PostInitialState = initialState, action: any) => {
  return produce(state, (draft: PostInitialState) => {
    switch (action.type) {
      default:
        break;
    }
  });
};

export default post;
