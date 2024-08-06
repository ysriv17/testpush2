// api.js
import axios from "axios";

const submitFormData = async (formData: any) => {
  const url =
    "https://script.google.com/macros/s/AKfycbwRQn3Kvok_8sxtxRyl5mWb-CnSpu-wDm0fDG-KuFjPvKM41d5dkvak27xDtGy6Nc2boQ/exec";
  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

export default submitFormData;
