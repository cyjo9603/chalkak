import produce from 'immer';

import { GetAllPosts, GET_ALL_POSTS_REQUEST, GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAILURE } from './getAllPosts';
import { WritePost, WRITE_POST_REQUEST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE } from './writePost';

export interface PostImage {
  id: number;
  src: string;
}

export interface PostUserInfo {
  id: number;
  familyName: string;
  firstName: string;
  profilePhoto: string | null;
}

export interface PostLiker {
  id: number;
  Like: {
    createdAt: string;
    updatedAt: string;
    PostId: number;
    UserId: number;
  };
}

export interface CommentInfo {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  PostId: number;
  User: PostUserInfo;
}

export interface SharePostInfo {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  User: PostUserInfo;
  Images: PostImage;
}

export interface PostInfo {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  User: PostUserInfo;
  Images: PostImage[];
  Likers: PostLiker[];
  SharePostId: number | null;
  SharePost?: SharePostInfo;
  comments?: CommentInfo[];
}

export interface PostInitialState {
  posts: PostInfo[];
  post: PostInfo | null;
  hasMorePost: boolean;
}

const initialState: PostInitialState = {
  posts: [],
  post: null,
  hasMorePost: false,
};

type ReducerAction = GetAllPosts | WritePost;

const post = (state: PostInitialState = initialState, action: ReducerAction) => {
  return produce(state, (draft: PostInitialState) => {
    switch (action.type) {
      // get all posts
      case GET_ALL_POSTS_REQUEST:
        draft.posts = action.lastUpdatedAt === '' ? [] : draft.posts;
        draft.hasMorePost = action.lastUpdatedAt !== '' ? draft.hasMorePost : true;
        break;
      case GET_ALL_POSTS_SUCCESS:
        action.data.forEach((v) => draft.posts.push(v));
        draft.hasMorePost = action.data.length === 10;
        break;
      case GET_ALL_POSTS_FAILURE:
        break;

      // write post
      case WRITE_POST_REQUEST:
      case WRITE_POST_FAILURE:
        break;
      case WRITE_POST_SUCCESS:
        draft.posts.unshift(action.data);
        break;

      default:
        break;
    }
  });
};

export default post;
