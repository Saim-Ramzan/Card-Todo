import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postReq = createAsyncThunk(
  "postReq",
  async (payload, { dispatch }) => {
    try {
      const rss = await axios.post(
        "http://localhost:8000/user",
        payload.values
      );
      payload.event.resetForm();
      dispatch(getReq());
      return rss?.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const getReq = createAsyncThunk("getReq", async () => {
  try {
    const data = await axios.get("http://localhost:8000/user");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteReq = createAsyncThunk(
  "deleteReq",
  async (id, { dispatch }) => {
    try {
      const deleteData = await axios.delete(`http://localhost:8000/user/${id}`);
      dispatch(getReq());
      return deleteData;
    } catch (error) {
      console.log("dellError", error);
    }
  }
);

export const patchRequest = createAsyncThunk(
  "patchRequest",
  async (item, { dispatch }) => {
    const payload = {
      favourite: !item.favourite,
    };
    try {
      const patchApi = await axios.patch(
        `http://localhost:8000/user/${item.id}`,
        payload
      );
      dispatch(getReq());
      return patchApi;
    } catch (error) {}
  }
);
