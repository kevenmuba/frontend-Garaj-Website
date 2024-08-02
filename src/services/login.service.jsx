// Import from the env
const api_url = import.meta.env.VITE_API_URL;
console.log("api url is", api_url);

// A function to send the login request to the server 
const logIn = async (formData) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  };
  console.log("About to send request");
  console.log(requestOptions.body);
  const response = await fetch(`${api_url}/api/employee/login`, requestOptions);
  console.log(response)
  return response;
}

// A function to log out the user
const logOut = () => {
  localStorage.removeItem("employee");
};

const employeeLogin = {
  logIn,
  logOut
}

export default employeeLogin