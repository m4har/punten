const InitialState = {
  error: null,
  fetching: false,
  fetched: false,
  data: ""
};

const Login = (state = InitialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return { ...state, fetching: true, error: null };
      break;
    case "LOGIN_FULFILLED":
      return {
        ...state,
        fetched: true,
        fetching: false,
        data: action.payload.data
      };
      break;
    case "LOGIN_REJECTED":
      return { ...state, fetching: false, error: action.payload };
      break;
    default:
      return state;
      break;
  }
};

export default Login;
