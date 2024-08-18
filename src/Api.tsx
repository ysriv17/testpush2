// api.js
import axios from "axios";

const submitFormData = async (formData: any) => {
  // const url =
  //   "https://script.google.com/macros/s/AKfycbz9ujff-H6SF3p0r4BSAc1vMjfVemNVdO29zen-iDpMS5UkaADetuhns666taznB3KHWg/exec";
  // try {
  //   const response = await axios.post(url, formData, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   return response.data;
  // } catch (error) {
  //   console.error("API call failed:", error);
  //   throw error; // Rethrow the error to handle it in the calling function
  // }
  const url =
    "https://script.google.com/macros/s/AKfycbz9ujff-H6SF3p0r4BSAc1vMjfVemNVdO29zen-iDpMS5UkaADetuhns666taznB3KHWg/exec";

  console.log(JSON.stringify(formData), "sending foem data");
  const response = await fetch(url, {
    mode :"no-cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",

    },
    body: JSON.stringify(formData),
  });
  return response.text();
};

export default submitFormData;
