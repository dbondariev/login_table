// tableSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTableData = createAsyncThunk(
  "table/fetchTableData",
  async () => {
    const response = await axios.get("http://146.190.118.121/api/table/");
    return response.data;
  }
);

interface TableState {
  data: any[]; // Adjust this type according to your API response
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TableState = {
  data: [],
  status: "idle",
  error: null,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTableData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTableData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTableData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default tableSlice.reducer;
