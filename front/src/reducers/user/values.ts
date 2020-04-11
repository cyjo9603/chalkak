// notify
export const NOTIFY_REQUEST_FRIEND = 'NOTIFY_REQUEST_FRIEND' as const;
export const NOTIFY_WELCOME = 'NOTIFY_WELCOME' as const;
export const NOTIFY_POST_COMMENTS = 'NOTIFY_POST_COMMENTS' as const;

export type notifyType = typeof NOTIFY_REQUEST_FRIEND | typeof NOTIFY_WELCOME | typeof NOTIFY_POST_COMMENTS;
