import {
  GET_MOVIES_LIST,
  GET_MOVIES_POPULAR,
  GET_TV_POPULAR,
} from './stringType';
import {IMoviesData, IStateData} from '../../screen/utils/Interface';

export const SET_GET_MOVIES_POPULAR = (params: IStateData) => {
  return {
    type: GET_MOVIES_POPULAR,
    value: params,
  };
};
export const SET_GET_MOVIES_LIST = (params: IStateData) => {
  return {
    type: GET_MOVIES_LIST,
    value: params,
  };
};
export const SET_GET_TV_POPULAR = (params: IMoviesData) => {
  return {
    type: GET_TV_POPULAR,
    value: params,
  };
};
