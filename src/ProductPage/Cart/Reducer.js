export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    console.log("remove");
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }

  if (action.type === "CLEAR_CART") {
    console.log("clear");
    return { ...state, item: [] };
  }

  if (action.type === "INCREMENT") {
    console.log("add", action.payload);
    const updatedCart = state.item.map((curElem) => {
      if (curElem._id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });

    return { ...state, item: updatedCart };
  }

  if (action.type === "DECREMENT") {
    console.log("remove", action.payload);
    const updatedCart = state.item
      .map((curElem) => {
        if (curElem._id === action.payload) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      })
      .filter((curElem) => curElem.quantity !== 0);
    return { ...state, item: updatedCart };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { prod_price, quantity } = curVal;

        let updatedTotalAmount = prod_price * quantity;
        accum.totalAmount += updatedTotalAmount;

        accum.totalItem += quantity;
        console.log(accum);
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    console.log("state", state);
    return { ...state, totalItem, totalAmount };
  }
  return state;
};
