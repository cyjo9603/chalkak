import { combineReducers } from 'redux';
import user, { UserInitialState } from './user';
import post, { PostInitialState } from './post';

export interface RootState {
  user: UserInitialState;
  post: PostInitialState;
}

const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;
