import { ACTION_ADD_CAT } from "./actions";

const initialState = {
  cats: {
    101: {
      name: 'Taco',
      activity: 'Sleepy'
    },
    102: {
      name: 'Burrito',
      activity: 'pooping'
    },
  },
}


export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ADD_CAT: {
      const { name, activity } = action.payload;
      const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      return {
        cats: {
          ...state.cats,
          [id]: { name, activity },
        },
      };
    }
      
    default:
      return state;
  }


}

