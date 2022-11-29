import { createStore } from "redux";

const initState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings",
    },
    {
      id: 2,
      customerName: "Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
  ],
};

const INCREMENT = () => {
  return {
    type: "INCREMENT",
  };
};

const DECREMENT = () => {
  return {
    type: "DECREMENT",
  };
};

const tableDataReducre = (state = initState, action) => {
  return state.accounts;
};
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return (state += 1);
    }

    case "DECREMENT": {
      return (state -= 1);
    }
    default:
      return state;
  }
};

export { INCREMENT, DECREMENT };

const store = createStore(counterReducer);

// store.dispatch(INCREMENT());
// store.dispatch(DECREMENT());

export default store;
