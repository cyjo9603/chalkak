// notify
export const NOTIFY_REQUEST_FRIEND = 'NOTIFY_REQUEST_FRIEND' as const;
export const NOTIFY_WELCOME = 'NOTIFY_WELCOME' as const;
export const NOTIFY_POST_COMMENTS = 'NOTIFY_POST_COMMENTS' as const;

interface NotifyRequestFriend {
  type: typeof NOTIFY_REQUEST_FRIEND;
  requestor: string;
}

interface NotifyWelcome {
  type: typeof NOTIFY_WELCOME;
}

interface NotifyPostComment {
  type: typeof NOTIFY_POST_COMMENTS;
  commentor: string;
}

export type NotifyType = NotifyRequestFriend | NotifyWelcome | NotifyPostComment;

// post
interface User {
  id: number;
  firstName: string;
  familyName: string;
}

export interface CommentInfo {
  id: number;
  user: User;
  contents: string;
}

export interface PostData {
  id: number;
  user: User;
  content: string;
  images: string[];
  comment: CommentInfo[];
  createdAt: string;
  Likers: User[];
  RetweetId: number;
  Retweet: {
    id: number;
    user: User;
    createdAt: string;
  };
}

//  main
interface InitialState {
  user: {
    userInfo: {
      id: number;
      firstName: string;
      familyName: string;
      birth: string;
      phone: string;
      mail: string;
      friends: {
        total: number;
        lists: User[];
      };
    } | null;
    notifyList: NotifyType[];
  };
  post: {
    mainPosts: PostData[];
  };
}

const initialState: InitialState = {
  user: {
    userInfo: {
      id: 1,
      firstName: '찬영',
      familyName: '조',
      birth: '1996-03-30',
      phone: '010-0000-0000',
      mail: 'test@test.com',
      friends: {
        total: 5,
        lists: [
          {
            id: 2,
            firstName: '길동',
            familyName: '홍',
          },
          {
            id: 3,
            firstName: '김김',
            familyName: '김',
          },
          {
            id: 4,
            firstName: '스트',
            familyName: '테',
          },
          {
            id: 5,
            firstName: '이이',
            familyName: '이',
          },
          {
            id: 6,
            firstName: '홍홍',
            familyName: '홍',
          },
        ],
      },
    },
    // userInfo: null,

    notifyList: [
      {
        type: NOTIFY_REQUEST_FRIEND,
        requestor: '홍길동',
      },
      {
        type: NOTIFY_WELCOME,
      },
    ],
  },
  post: {
    mainPosts: [
      {
        id: 1,
        user: {
          id: 1,
          firstName: '찬영',
          familyName: '조',
        },
        content: 'test',
        images: ['/github.png', '/typescript.png'],
        comment: [
          {
            id: 1,
            user: {
              id: 1,
              firstName: '찬영',
              familyName: '조',
            },
            contents: 'dummy test',
          },
          {
            id: 1,
            user: {
              id: 1,
              firstName: '찬영',
              familyName: '조',
            },
            contents: 'dummy test2',
          },
        ],
        createdAt: '2020-04-01',
        Likers: [
          {
            id: 1,
            firstName: '찬영',
            familyName: '조',
          },
        ],
        RetweetId: 1,
        Retweet: {
          id: 1,
          user: {
            id: 1,
            firstName: '찬영',
            familyName: '조',
          },
          createdAt: '2020-04-01',
        },
      },
      {
        id: 1,
        user: {
          id: 1,
          firstName: '찬영',
          familyName: '조',
        },
        content: 'test',
        images: ['/github.png'],
        comment: [
          {
            id: 1,
            user: {
              id: 1,
              firstName: '찬영',
              familyName: '조',
            },
            contents: 'dummy test',
          },
        ],
        createdAt: '2020-04-01',
        Likers: [
          {
            id: 1,
            firstName: '찬영',
            familyName: '조',
          },
        ],
        RetweetId: 1,
        Retweet: {
          id: 1,
          user: {
            id: 1,
            firstName: '찬영',
            familyName: '조',
          },
          createdAt: '2020-04-01',
        },
      },
      {
        id: 1,
        user: {
          id: 1,
          firstName: '길동',
          familyName: '홍',
        },
        content: 'test',
        images: ['/github.png', '/typescript.png', '/logo_main.svg'],
        comment: [
          {
            id: 1,
            user: {
              id: 1,
              firstName: '찬영',
              familyName: '조',
            },
            contents: 'dummy test',
          },
        ],
        createdAt: '2020-04-01',
        Likers: [
          {
            id: 1,
            firstName: '찬영',
            familyName: '조',
          },
        ],
        RetweetId: 1,
        Retweet: {
          id: 1,
          user: {
            id: 1,
            firstName: '찬영',
            familyName: '조',
          },
          createdAt: '2020-04-01',
        },
      },
    ],
  },
};

export default initialState;
