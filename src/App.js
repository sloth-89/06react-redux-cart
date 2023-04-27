import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import {useSelector} from 'react-redux';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible)

  return (
    <Layout>
      {/* 방법1 : 조건부 렌더링을 사용하지 않고 url접속 시 웹사이트에 Cart 컴포넌트가 바로 보이게 한다. */}
      {/* <Cart/> */}

      {/* 방법2 : 조건부 렌더링 사용 - showCart가 true가 되는 순간에만 Cart 컴포넌트가 보이게 한다. */}
      {showCart&&<Cart />}
      {/* 앞에 있는게 참일 경우에 뒤에 것을 렌더링하겠다. */}
      <Products />
    </Layout>
  );
}

export default App;
