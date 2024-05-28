import axios from "axios";

export const registerUser = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:2000/api/user/register",
      {
        name: values.username,
        password: values.password,
        password_confirmation: values.repassword,
        email: values.email,
      }
    );
    console.log("Response Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
