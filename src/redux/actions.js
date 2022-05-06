
export const ACTION_ADD_CAT = "ACTION_ADD_CAT";

export const addCat = ({ name, activity }) => ({
  type: ACTION_ADD_CAT,
  payload: {
    name,
    activity,
  },
});