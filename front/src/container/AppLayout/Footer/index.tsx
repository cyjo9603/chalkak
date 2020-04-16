import React, { memo } from 'react';

import FooterWrapper from './styled';

const Footer = memo(() => (
  <FooterWrapper>
    <div>
      <div>
        <span>조찬영</span>
        <span>mail cyjo9603@naver.com</span>
        <span>github cyjo9603</span>
      </div>
      <div>CopyRight 2020. 조찬영. All rights reserved.</div>
    </div>
  </FooterWrapper>
));

export default Footer;
