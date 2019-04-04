export function PostRegister(data) {
  return {
    type: "REGISTER",
    payload: data.data
  };
}
