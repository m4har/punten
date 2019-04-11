const InitialState = {
  error: '',
  fetching: false,
  fetched: false,
  data: ""
};

const Login = (state = InitialState, action) => {
  switch (action.type) {
    case "LOGIN_POST":
    return{...state, fetching:true}
    case "LOGIN_SUCCESS":
      return{...state, data:action.result.data.token, fetched:true, error:null, fetching:false}
    case "LOGIN_ERROR":
      return {...state, error:action.error};
    default:
      return state;
  }
};

export default Login;
