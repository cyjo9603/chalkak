import { NOTIFY_REQUEST_FRIEND, NOTIFY_WELCOME, NOTIFY_POST_COMMENTS, NotifyType } from '../dummy';

export default (notify: NotifyType) => {
  switch (notify.type) {
    case NOTIFY_REQUEST_FRIEND:
      return {
        title: '친구 요청',
        contents: `${notify.requestor}님이 친구 요청을 보냈습니다.`,
      };

    case NOTIFY_WELCOME:
      return {
        title: '가입 축하',
        contents: '가입을 축하합니다!',
      };

    case NOTIFY_POST_COMMENTS:
      return {
        title: '댓글을 달았습니다',
        contents: `${notify.commentor}님이 게시글에 댓글을 달았습니다.`,
      };

    default:
      return {};
  }
};
