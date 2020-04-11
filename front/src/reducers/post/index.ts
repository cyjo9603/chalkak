import produce from 'immer';

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
}

const initialState: PostInitialState = {
  posts: [
    {
      id: 1,
      content: '#테스트 #리액트 테스트 게시글',
      createdAt: '2020-04-11',
      updatedAt: '2020-04-11',
      User: {
        id: 1,
        familyName: '조',
        firstName: '찬영',
        profilePhoto: 'github.png1586589872107.png',
      },
      Images: [],
      Likers: [],
      SharePostId: null,
    },
  ],
  post: null,
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
