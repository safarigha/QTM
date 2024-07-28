import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAccountDetails } from "../APIs/accountApi";
import { getAccountDetailToken } from "../../helpers/authToken";

export const fetchAccount = createAsyncThunk(
  "account/fetchAccount",
  async () => {
    const accountDetail = getAccountDetailToken();
    console.log("accountDetail" + accountDetail);
    if (!accountDetail || !accountDetail.id)
      return new Error("Account Details not found");

    const response = await getAccountDetails(accountDetail.id);
    return response.data;
  }
);

const initialState = {
  data: null as any, // یا به جای `any` نوع مشخصی تعریف کنید که شامل `null` نیز باشد
  status: "idle",
  error: null as string | null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccount.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAccount.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default accountSlice.reducer;
