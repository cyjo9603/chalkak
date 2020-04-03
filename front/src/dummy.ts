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

export default {
  user: {
    userInfo: {
      userId: 1,
      userFirstName: '찬영',
      userFamilyName: '조',
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
        Likers: [{ id: 1 }],
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
        Likers: [{ id: 1 }],
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
