const InitialState = {
  data: ""
};

const Register = (state = InitialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, data: action.payload };
      break;

    default:
      return state;
      break;
  }
};

export default Register;
