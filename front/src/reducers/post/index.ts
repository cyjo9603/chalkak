import produce from 'immer';

import { GetAllPosts, GET_ALL_POSTS_REQUEST, GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAILURE } from './getAllPosts';
import { WritePost, WRITE_POST_REQUEST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE } from './writePost';
import { LikePost, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE } from './likePost';
import { UnLikePost, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE } from './unLikePost';
import { GetComments, GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE } from './getComments';
import { GetUserPosts, GET_USER_POSTS_REQUEST, GET_USER_POSTS_SUCCESS, GET_USER_POSTS_FAILURE } from './getUserPosts';
import { GetPost, GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE } from './getPost';
import { WriteComment, WRITE_COMMENT_REQUEST, WRITE_COMMENT_SUCCESS, WRITE_COMMENT_FAILURE } from './writeComment';
import {
  GetHashtagPosts,
  GET_HASHTAG_POSTS_REQUEST,
  GET_HASHTAG_POSTS_SUCCESS,
  GET_HASHTAG_POSTS_FAILURE,
} from './getHashtagPosts';
import { SharePost, SHARE_POST_REQUEST, SHARE_POST_SUCCESS, SHARE_POST_FAILURE } from './sharePost';
import { RemovePost, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE } from './removePost';

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
  Images: PostImage[];
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

type ReducerAction =
  | GetAllPosts
  | WritePost
  | LikePost
  | UnLikePost
  | GetComments
  | GetUserPosts
  | GetPost
  | WriteComment
  | GetHashtagPosts
  | SharePost
  | RemovePost;

const post = (state: PostInitialState = initialState, action: ReducerAction) => {
  return produce(state, (draft: PostInitialState) => {
    switch (action.type) {
      // get all posts
      case GET_ALL_POSTS_REQUEST:
      case GET_USER_POSTS_REQUEST:
      case GET_HASHTAG_POSTS_REQUEST:
        draft.posts = action.lastUpdatedAt === '' ? [] : draft.posts;
        draft.hasMorePost = action.lastUpdatedAt !== '' ? draft.hasMorePost : true;
        break;
      case GET_ALL_POSTS_SUCCESS:
      case GET_USER_POSTS_SUCCESS:
      case GET_HASHTAG_POSTS_SUCCESS:
        action.data.forEach((v) => draft.posts.push(v));
        draft.hasMorePost = action.data.length === 10;
        break;
      case GET_ALL_POSTS_FAILURE:
      case GET_USER_POSTS_FAILURE:
      case GET_HASHTAG_POSTS_FAILURE:
        break;

      // write post
      case WRITE_POST_REQUEST:
      case WRITE_POST_FAILURE:
        break;
      case WRITE_POST_SUCCESS:
        draft.posts.unshift(action.data);
        break;

      // like post
      case LIKE_POST_REQUEST:
      case LIKE_POST_FAILURE:
        break;
      case LIKE_POST_SUCCESS: {
        draft.posts[action.postIndex].Likers.push(action.data);
        break;
      }

      // unlike post
      case UNLIKE_POST_REQUEST:
      case UNLIKE_POST_FAILURE:
        break;
      case UNLIKE_POST_SUCCESS: {
        const index = draft.posts[action.postIndex].Likers.findIndex((v) => v.id === action.data.id);
        draft.posts[action.postIndex].Likers.splice(index, 1);
        break;
      }

      // get comments
      case GET_COMMENTS_REQUEST:
      case GET_COMMENTS_FAILURE:
        break;
      case GET_COMMENTS_SUCCESS: {
        draft.posts[action.postIndex].comments = action.data;
        break;
      }

      // get post
      case GET_POST_REQUEST:
      case GET_POST_FAILURE:
        break;
      case GET_POST_SUCCESS: {
        draft.post = action.data;
        break;
      }

      // write comment
      case WRITE_COMMENT_REQUEST:
      case WRITE_COMMENT_FAILURE:
        break;
      case WRITE_COMMENT_SUCCESS: {
        draft.posts[action.postIndex].comments.push(action.data);
        break;
      }

      // share post
      case SHARE_POST_REQUEST:
      case SHARE_POST_FAILURE:
        break;
      case SHARE_POST_SUCCESS:
        draft.posts.unshift(action.data);
        break;

      // remove post
      case REMOVE_POST_REQUEST:
      case REMOVE_POST_FAILURE:
        break;
      case REMOVE_POST_SUCCESS:
        draft.posts.splice(action.postIndex, 1);
        break;

      default:
        break;
    }
  });
};

export default post;
