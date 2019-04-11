// dimulai saga
export const fetchLoginAction = result => {
  return {
    type: "LOGIN_FETCH",
    result
  };
};

export const postLoginAction = dataLogin => {
  return {
    type: "LOGIN_POST",
    dataLogin
  };
};
//Action sent by Redux-saga
export const fetchSuccessAction = result => {
  return {
    type: "LOGIN_SUCCESS",
    result
  };
};

export const fetchFailedAction = error => {
  return {
    type: "LOGIN_ERROR",
    error
  };
};
