const initialState = {
	profiles: [],
	savedProfiles: [],
	error: null,
  };
  
  const peopleReducer = (state = initialState, action) => {
	switch (action.type) {
	  case 'FETCH_PEOPLE_SUCCESS':
		return {
		  ...state,
		  profiles: action.payload,
		};
	  case 'FETCH_PEOPLE_ERROR':
		return {
		  ...state,
		  error: action.payload,
		};
	  case 'SAVE_PROFILE_SUCCESS':
		return {
		  ...state,
		  savedProfiles: [...state.savedProfiles, action.payload],
		};
	  case 'SAVE_PROFILE_ERROR':
		return {
		  ...state,
		  error: action.payload,
		};
	  case 'DELETE_PROFILE_SUCCESS':
		return {
		  ...state,
		  savedProfiles: state.savedProfiles.filter((p) => p.id !== action.payload),
		};
	  case 'DELETE_PROFILE_ERROR':
		return {
		  ...state,
		  error: action.payload,
		};
	  case 'UPDATE_PROFILE_NAME_SUCCESS':
		return {
		  ...state,
		  profiles: state.profiles.map((p) => {
			if (p.id === action.payload.id) {
			  return { ...p, name: action.payload.name };
			}
			return p;
		  }),
		  savedProfiles: state.savedProfiles.map((p) => {
			if (p.id === action.payload.id) {
			  return { ...p, name: action.payload.name };
			}
			return p;
		  }),
		};
	  case 'UPDATE_PROFILE_NAME_ERROR':
		return {
		  ...state,
		  error: action.payload,
		};
	  default:
		return state;
	}
  };
  
  export default peopleReducer;
  