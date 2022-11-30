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

// const reducer1 = (state = initState, action) => {
//   return state;
// };
const addAccountReducer = (state = initState, action) => {
  switch (action.type) {
    case "addAccount":
      return {
        ...state,
        accounts: [...action.payload, state.accounts],
      };

    // case "append":
    //   return {
    //     accounts: [...state.accounts, action.payload],
    //   };
    default:
      return state;
  }
};

export const addAccount = (...data) => {
  return {
    type: "addAccount",
    payload: data,
  };
};

const store = createStore(addAccountReducer);

export default store;
