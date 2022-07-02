import { createSlice } from "@reduxjs/toolkit";

let nextIdVal = 0;

export function nextID() {
  nextIdVal += 1;
  return nextIdVal;
}

export const communitySlice = createSlice({
  name: "community",
  initialState: {
    list: [
      { name: "Byumba",members: 120,social:"twitter/byumba", modified: `${Date.now()}`, img: "/img/driver.png", id: nextID() },
      { name: "Ruhengeri",members: 140,social:"twitter/ruhengeri", modified: `${Date.now()}`, img: "/img/driver2.png", id: nextID() },
      { name: "Gikongoro",members: 220,social:"twitter/gikongoro", modified: `${Date.now()}`, img: "/img/driver.png", id: nextID() },
    ],
    loading: false,
  },
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.list.push(action.payload);
    },
    remove: (state, action) => {
      const removedIds = action.payload;
      state.list = state.list.filter((leader) => {
        return !removedIds.includes(leader.id);
      });
    },
    update: (state, action) => {
      state.list = state.list.map((leader) => {
        if (leader.id === action.payload.id) {
          return action.payload;
        }
        return leader;
      });
    },
  },
});


export const { add, remove, update } = communitySlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    //dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCommunity = (state) => state.community.list;
export const selectLoading = (state) => state.community.loading;

export default communitySlice.reducer;
