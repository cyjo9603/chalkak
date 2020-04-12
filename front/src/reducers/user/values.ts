// notify
export const NOTIFY_REQUEST_FRIEND = 'NOTIFY_REQUEST_FRIEND' as const;
export const NOTIFY_WELCOME = 'NOTIFY_WELCOME' as const;
export const NOTIFY_POST_COMMENTS = 'NOTIFY_POST_COMMENTS' as const;

export type notifyType = typeof NOTIFY_REQUEST_FRIEND | typeof NOTIFY_WELCOME | typeof NOTIFY_POST_COMMENTS;

// is loading
export const LOADING_SIGNUP_SUBMIT = 'LOADING_SIGNUP_SUBMIT' as const;
export const LOADING_SIGNIN_SUBMIT = 'LOADING_SIGNIN_SUBMIT' as const;
export const LOADING_LOGOUT = 'LOADING_LOGOUT' as const;

export type loadingType = typeof LOADING_SIGNUP_SUBMIT | typeof LOADING_SIGNIN_SUBMIT | typeof LOADING_LOGOUT;
