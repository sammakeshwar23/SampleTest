const initialState = {
  listingData: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LISTING_DATA":
      return {
        ...state,
        listingData: action.payload
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        listingData: [...state.listingData, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
