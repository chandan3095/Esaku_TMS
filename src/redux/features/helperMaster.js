import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addHelperMasterApiCall,
  listDriverMasterApiCall,
  listHelperMasterApiCall,
} from "../../Api/api";
import { fetchAllContractorsAsync } from "./driverMaster";

// initial state
const initialState = {
  dataList: [],
  singleHelperMaster: null,

  contractors: [],

  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const addHelperMasterAsync = createAsyncThunk(
  "helperMaster/addHelperMaster",
  async (data, thunkAPI) => {
    try {
      const response = await addHelperMasterApiCall(data);
      if (response.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

export const listHelperMasterAsync = createAsyncThunk(
  "helpermaster/listHelperMaster",
  async (data, thunkAPI) => {
    try {
      const response = await listHelperMasterApiCall();
      if (response?.data?.statusCode === 200) {
        return thunkAPI.fulfillWithValue(response?.data?.res);
      } else {
        throw response;
      }
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error?.response?.data);
      throw error?.response?.data;
    }
  }
);

const helperMasterSlice = createSlice({
  name: "helperMaster",
  initialState: initialState,

  reducers: {
    clearHelperMaster: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllContractorsAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllContractorsAsync.fulfilled, (state, action) => {
      console.log({ ful: action.payload });
      state.isLoading = false;
      state.contractors = action.payload;
    });
    builder.addCase(fetchAllContractorsAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
    // List helper master
    builder.addCase(listHelperMasterAsync.pending, (state, acton) => {
      state.isLoading = true;
    });
    builder.addCase(listHelperMasterAsync.fulfilled, (state, action) => {
      state.dataList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(listHelperMasterAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const { clearHelperMaster } = helperMasterSlice.actions;
const helperMasterReducer = helperMasterSlice.reducer;
export default helperMasterReducer;
