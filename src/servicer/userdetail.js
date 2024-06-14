import axios from "axios";

export const userDetail = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log(
      token,
      "<-------------------------token ------------------------->"
    );
    const response = await axios.get(
      "http://localhost:2000/api/user/register/getUser",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(
      response,
      "<----------------------dfhjsdfhjsdf------------------->"
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const userRegistration = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:2000/api/user/register",
      userData
    );
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const userLogin = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:2000/api/user/login",
      userData
    );
    return response;
  } catch (error) {
    console.log("error", error);
  }
};
