export const getIdWarningMsg = (level: number) => {
  switch (level) {
    case 0:
      return '';
    case 1:
      return '5~20자로 적어주세요!';
    case 2:
      return '알파벳 소문자, 숫자를 조합해주세요!';
    case 3:
      return '안전합니다 :)';
    default:
      return '';
  }
};

export const getPwWarningMsg = (level: number) => {
  switch (level) {
    case 0:
      return '';
    case 1:
      return '알파벳 대문자와 소문자, 숫자를 조합해주세요!';
    case 2:
      return '특수문자도 포함해야 한답니다^^';
    case 3:
      return '안전합니다 :)';
    default:
      return '';
  }
};

export const getPwReWarningMsg = (level: number) => {
  switch (level) {
    case 0:
      return '';
    case 1:
      return '비밀번호가 다릅니다 TT';
    case 3:
      return '비밀번호가 같습니다 :)';
    default:
      return '';
  }
};
