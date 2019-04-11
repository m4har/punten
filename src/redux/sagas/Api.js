import Api from "../../utility/Api";

function* PostLogin(dataLogin) {
  const response = yield Api.post("login", {
    email: dataLogin.data.email,
    password: dataLogin.data.password
  });
  return response;
}

export const api = {
  PostLogin
};
