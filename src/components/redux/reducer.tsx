import {
  GET_MOVIES_LIST,
  GET_MOVIES_POPULAR,
  GET_TV_POPULAR,
} from './stringType';

const initialState = {
  data: [],
  movieList: [],
  tvList: [],
};

const reducer = (state = initialState, action: {value: any; type: any}) => {
  switch (action.type) {
    case GET_MOVIES_LIST:
      return {...state, movieList: action.value};
    case GET_MOVIES_POPULAR:
      return {...state, data: action.value};
    case GET_TV_POPULAR:
      return {
        ...state,
        tvList: action.value,
      };
    default:
      return state;
  }
};

export {reducer};
