import PATTERN from '../../util/pattern';

export const getIdWarningLevel = (value: string) => {
  if (value.length === 0) {
    return 0;
  }
  if (value.length < 5 || value.length > 20) {
    return 1;
  }
  if (!PATTERN.signUp.id.test(value)) {
    return 2;
  }
  return 3;
};

export const getPwWarningLevel = (value: string) => {
  if (value.length === 0) {
    return 0;
  }
  if (!PATTERN.signUp.passwordUpChar.test(value) || !PATTERN.signUp.passwordNumber.test(value)) {
    return 1;
  }
  if (!PATTERN.signUp.passwordSpecialChar.test(value)) {
    return 2;
  }
  return 3;
};
