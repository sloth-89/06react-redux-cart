// redux와 @reduxjs/toolkit을 구분해야한다. toolkit이 더 최신 버전
// redux의 경우 초기값, action에 대한 내용 들을 따로 정의를 해서
// reducer로 각 타입에 맞는 데이터 업데이트가 이루어지게 함.
// toolkit의 경우 따로 정의 하지 않고 한번에 키값으로 데이터 업데이트 하는 것까지 정의 

// createSlice는 초기값, 상태 등을 세팅해주는 toolkit 함수

import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false }, // 초기값 카트 state를 안보이게
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; // 여기서 반전을 시켜주기 위해 초기값을 false를 넣음
    }
  }
});

export const uiActions = uiSlice.actions; // state 정보를 담아서 actions, 즉 실행시킬 수 있는 객체
// 화면 컴포넌트에 이걸 가져다 쓴다.

export default uiSlice;