import axios from "axios";
export const otpRegister = async (values) => {
  try {
    console.log(values, "valuesvaluesvalues");
    const response = await axios.post(
      "http://localhost:2000/api/user/register/verify",
      { OTP: values.OTP, email: values.email }
    );
    console.log("Response Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
