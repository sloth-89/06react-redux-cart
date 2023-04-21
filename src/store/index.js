// useSelector() = 리덕스는 객체의 상태를 담는데, useSelector를 이용하여 상태를 가져와서 활용한다.(어떤 상태를 가져올지 선택한다.)
// useDispatch() = action 함수를 실행 시켜주는 역할 (reducer의 type 지정과 동일)

import { configureStore } from '@reduxjs/toolkit';
// createStore와 같은 것, 데이터 상태 관리 configureStore를 사용 권장

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

// keyValue 형태는 {}할용

export default store;