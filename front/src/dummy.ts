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
  nickname: string;
}

export interface PostData {
  id: number;
  user: User;
  content: string;
  images: string[];
  comment: {
    id: number;
    user: User;
  }[];
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
            nickname: '홍길동',
          },
          {
            id: 3,
            nickname: '김김김',
          },
          {
            id: 4,
            nickname: '테스트',
          },
          {
            id: 5,
            nickname: '김김김',
          },
          {
            id: 6,
            nickname: '홍홍홍',
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
          nickname: '조찬영',
        },
        content: 'test',
        images: ['/github.png', '/typescript.png'],
        comment: [
          {
            id: 1,
            user: {
              id: 1,
              nickname: '조찬영',
            },
          },
        ],
        createdAt: '2020-04-01',
        Likers: [{ id: 1, nickname: '조찬영' }],
        RetweetId: 1,
        Retweet: {
          id: 1,
          user: {
            id: 1,
            nickname: '조찬영',
          },
          createdAt: '2020-04-01',
        },
      },
      {
        id: 1,
        user: {
          id: 1,
          nickname: '조찬영',
        },
        content: 'test',
        images: ['/github.png'],
        comment: [
          {
            id: 1,
            user: {
              id: 1,
              nickname: '조찬영',
            },
          },
        ],
        createdAt: '2020-04-01',
        Likers: [{ id: 1, nickname: '조찬영' }],
        RetweetId: 1,
        Retweet: {
          id: 1,
          user: {
            id: 1,
            nickname: '조찬영',
          },
          createdAt: '2020-04-01',
        },
      },
      {
        id: 1,
        user: {
          id: 1,
          nickname: '홍길동',
        },
        content: 'test',
        images: ['/github.png', '/typescript.png', '/logo_main.svg'],
        comment: [
          {
            id: 1,
            user: {
              id: 1,
              nickname: '조찬영',
            },
          },
        ],
        createdAt: '2020-04-01',
        Likers: [{ id: 1, nickname: '조찬영' }],
        RetweetId: 1,
        Retweet: {
          id: 1,
          user: {
            id: 1,
            nickname: '조찬영',
          },
          createdAt: '2020-04-01',
        },
      },
    ],
  },
};

export default initialState;
