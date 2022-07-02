import { createSlice } from "@reduxjs/toolkit";

let nextIdVal = 0;

export function nextID() {
  nextIdVal += 1;
  return nextIdVal;
}

export const groupsSlice = createSlice({
  name: "groups",
  initialState: {
    list: [
      { name: "Joe",summary: 423,modified: `${Date.now()}`, img: "/img/driver.png", id: nextID() },
      { name: "Mary",summary: 213,modified: `${Date.now()}`, img: "/img/driver2.png", id: nextID() },
      { name: "Joe",summary: 103,modified: `${Date.now()}`, img: "/img/driver.png", id: nextID() },
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


export const { add, remove, update } = groupsSlice.actions;

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
export const selectGroup = (state) => state.groups.list;
export const selectLoading = (state) => state.groups.loading;

export default groupsSlice.reducer;
