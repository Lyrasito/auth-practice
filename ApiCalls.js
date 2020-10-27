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
  console.log(response.status)
  if(response.status === 200) {
    const jsonResponse = await response.json();
    const token  = "butt";
    localStorage.setItem("token", token);
} else {
    localStorage.clear()
    console.log(localStorage.getItem("token"))
    throw new Error("Invalid username/password")
    
  }
};

//login("user", "password");

//export default login;
