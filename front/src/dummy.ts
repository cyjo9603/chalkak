export default {
  user: {
    // userInfo: {
    //   userId: 1,
    //   userFirstName: '찬영',
    //   userFamilyName: '조',
    // },
    userInfo: null,
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
    ],
  },
};
