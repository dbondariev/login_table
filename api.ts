import axios from "axios";

export const fetchDataFromAPI = async (offset:any, itemsPerPage:number) => {
  try {
    const response = await axios.get(
      "https://technical-task-api.icapgroupgmbh.com/api/table/"
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data from the API");
  }
};
