import { createStore } from "redux";

// Initial state of the store
const initialState = {
  listingData: []
};

// Reducer function to handle actions and update the state
const listingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, listingData: [...state.listingData, action.payload] };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(listingReducer);

export default store;
