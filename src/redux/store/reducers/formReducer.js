import { SET_FORM_VALUES } from "../../types/form";

const initialState = {
  values: {},
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_VALUES: {
      return { values: action.payload };
    }
    default:
      return state;
  }
};
