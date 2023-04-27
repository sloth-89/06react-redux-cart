import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0, // 물품 개수
  },
  reducers: { // 사용자 반응에 맞는 로직 작성 공간
    replaceCart(state, action) { // 초기값과 action을 파라미터로 받는다.
      console.log("replaceCart 함수 동작")
      state.totalQuantity = action.payload.totalQuantity; // payload는 매개변수, 즉 파라미터로 들어온 정보의 값을 담고 있다. action.payload는 action의 값이라는 의미
      state.items = action.payload.items;
      // Cart에 Item이 담기는 액션
    },
    addItemToCart(state, action) {
      console.log("addItemToCart 함수 작동")
      const newItem = action.payload; // payload는 매개변수, 즉 파라미터로 들어온 정보의 값을 담고 있다. action.payload는 action의 값이라는 의미
      const existingItem = state.items.find((item) => item.id === newItem.id); // find함수는 파라미터안 에 조건을 작성하고 그 조건에 맞는 정보를 찾는다.
      state.totalQuantity++; // 1씩 증가를 시키는 이유는 카트에 아이템을 추가하면 개수가 늘어나기 때문
      if (!existingItem) { // 저 변수가 존재하지 않는다면이라는 의미
        state.items.push({ // push함수는 정보를 추가한다.
          id: newItem.id,
          price: newItem.price,
          quantity: 1, // 하드 코딩의 이유, 카트에 아무것도 없는 상태에서 어차피 1개만 담기기때문에.
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++; // 물품 개수 증가
        existingItem.totalPrice = existingItem.totalPrice + newItem.price; // 전체 가격에는 새로 추가되는 아이템의 가격이 추가되어 더해진다.
      }
      // Cart에 담긴 Item의 개수를 늘리는 액션
    },
    removeItemFromCart(state, action) {
      console.log("removeItemFromCart 함수 동작")
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id); // existingItem을 정의 // 해당 item의 id만 비교해서 그 item만 고르기 위해 정의
      state.totalQuantity--; // 카트에 아이템 제거 로직
      if (existingItem.quantity === 1) { // 카트에 아이템 개수가 하나라면
        state.items = state.items.filter((item) => item.id !== id); // item.id가 같지 않는 것만 골라내서 나타낸다. (같은 것들은 삭제)
      } else {
        existingItem.quantity--;
      }
      // Cart에 담긴 Item의 개수를 줄이고 0이되면 삭제되는 액션
    },
  },
});

export const cartActions = cartSlice.actions; // action에 로직들을 담았기 때문에 action도 export 해주는 것

export default cartSlice;