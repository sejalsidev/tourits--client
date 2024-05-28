import axios from "axios";

export const getAllData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "http://localhost:2000/api/user/register/getUser",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Response Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
/* export const getAllData = async () => {
  try {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NjRjNjVhNGVlNGY0Y2JkYjBmNjJiZjkiLCJpYXQiOjE3MTYyODI4ODIsImV4cCI6MTcxNjcxNDg4Mn0.kN3VRy8TQ0SQ9PIeRiSKtvfkuvC7kXnJSlpGCBwBJmM";
    const response = await axios.get(
      "http://localhost:2000/api/user/register/getUser",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Response Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
 */
