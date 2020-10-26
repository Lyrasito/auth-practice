const url = "http://localhost:4000/router/login";
export const login = async (username, password) => {
  const fetchOptions = {
    method: "GET",
    headers: {
      username: username,
      password: password,
    },
  };
  const response = await fetch(url, fetchOptions);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
};

//login("user", "password");

//export default login;
