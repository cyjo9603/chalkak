/* eslint-disable no-useless-escape */
export default {
  signUp: {
    id: /^[a-z0-9_\-]{5,10}$/,
    passwordUpChar: /[A-Z]/,
    passwordNumber: /[0-9]/,
    passwordSpecialChar: /[!@#$%^*+=-]/,
    mail: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    phone: /^(010)[0-9]{7,8}$/,
  },
};
