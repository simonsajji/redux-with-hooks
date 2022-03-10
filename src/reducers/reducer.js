import {ADD_DATA} from "../store";

const reducer = (state, action) => {
    if (state === undefined) {
      return {
        data:[],
      };
    }
  
    switch (action.type) {
      case "ADD_DATA":

            state.data=action.payload;
            break;

      default:
            break;
    }
  
    // console.log(state);
    return { ...state };
  };
  
  export default reducer;