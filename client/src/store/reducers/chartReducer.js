import {
  FETCH_LOADING,
  COMBINED_DATA_FETCH_SUCCESS,
  RT_DATA_FETCH_SUCCESS,
  PREGNANCY_DATA_FETCH_SUCCESS,
  BABY_DATA_FETCH_SUCCESS
} from "../actions/actionType";

const initialState = {
  combinedData: [],
  dataByRT: 0,
  pregnancyData: [],
  babyData: [],
  isLoading: true
};

function chartReducer(state = initialState, action) {
  switch (action.type) {
    case COMBINED_DATA_FETCH_SUCCESS:
      return { ...state, combinedData: action.payload };
    case RT_DATA_FETCH_SUCCESS:
      return { ...state, dataByRT: action.payload };
    case PREGNANCY_DATA_FETCH_SUCCESS:
      return { ...state, pregnancyData: action.payload };
    case BABY_DATA_FETCH_SUCCESS:
      return { ...state, babyData: action.payload };
    case FETCH_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
}

export default chartReducer;
