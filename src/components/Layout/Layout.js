import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => {

  return (
    // 의미없는 div 태그 대신 사용 <Fragment></Fragment> 또는 단축문 <></>
    // 개발자 엘레멘트에 뜨지 않는다
  <Fragment>  
      <MainHeader />
      <main>{props.children}</main>
   </Fragment> 
  
  );

};

export default Layout;
