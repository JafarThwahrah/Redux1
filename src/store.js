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
      const newArray = [...state.accounts]; //Copying state array

      newArray.splice(state.accounts.length, 0, ...action.payload);
      //using splice to insert at an index
      return {
        ...state,
        accounts: newArray,
      };

    case "append":
      return {
        ...state,
        accounts: [state.accounts, ...action.payload],
      };

    case "delete":
      return {
        // returning a copy of orignal state
        ...state, //copying the original state
        accounts: state.accounts.filter(
          (account) => account.id != action.payload
        ),
        // returns a new filtered todos array
      };
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

export const deleteAccount = (...data) => {
  return {
    type: "delete",
    payload: data,
  };
};

const store = createStore(addAccountReducer);

export default store;
