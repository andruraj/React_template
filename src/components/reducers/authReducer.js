import checkEmpty from "../utils/checkEmpty";

const initState = {
  isAuth: false,
  user: {},
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuth: !checkEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
