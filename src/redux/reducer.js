import { DISHES } from "../shared/Dishes";
import { COMMENTS } from "../shared/Comments";
import { PROMOTIONS } from "../shared/Promotions";
import { LEADERS } from "../shared/leaders";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  leaders: LEADERS,
  promotions: PROMOTIONS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
