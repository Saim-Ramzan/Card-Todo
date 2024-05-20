import { createSlice } from "@reduxjs/toolkit";
import { postReq, getReq, deleteReq, patchRequest } from "../Api/api";

const initialState = {
  isLoading: false,
  data: [],
  isError: false,
  postLoading: false,
  postError: false,
  deleteLoading: false,
  deleteError: false,
  patchLoading: false,
  patchError: false,
};

const Slice = createSlice({
  name: "Api",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postReq.pending, (state) => {
      state.postLoading = true;
    });
    builder.addCase(postReq.fulfilled, (state) => {
      state.postLoading = false;
    });
    builder.addCase(postReq.rejected, (state) => {
      state.postError = true;
      state.postLoading = false;
    });
    //
    builder.addCase(getReq.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReq.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getReq.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
    //
    builder.addCase(deleteReq.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteReq.pending, (state) => {
      state.deleteLoading = true;
    });
    builder.addCase(deleteReq.rejected, (state) => {
      state.deleteError = true;
      state.deleteLoading = false;
    });
    //
    builder.addCase(patchRequest.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(patchRequest.pending, (state) => {
      state.deleteLoading = true;
    });
    builder.addCase(patchRequest.rejected, (state) => {
      state.deleteError = true;
      state.deleteLoading = false;
    });
  },
});

export default Slice.reducer;
