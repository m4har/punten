import Api from "../../utility/Api";

export function PostLogin(data) {
  return {
    type: "LOGIN",
    payload: Api.post("login", {
      email: data.data.email,
      password: data.data.password
    })
  };
}
