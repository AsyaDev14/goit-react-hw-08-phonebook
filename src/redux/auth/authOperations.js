import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearToken, setToken } from "../../configAxios/api.js";

export const registerThunk = createAsyncThunk('auth/register', async (credantials, thunkApi) => {
  try {
    const response = await api.post('users/signup', credantials)
    setToken(response.data.token)
    console.log('res', response);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('auth/login', async (credantials, thunkApi) => {
  try {
    const response = await api.post('users/login', credantials);
    setToken(response.data.token)
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await api.post('users/logout')
    clearToken()
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const refreshThunk = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;
  if (savedToken) {
    setToken(savedToken)
  } else {
    return thunkApi.rejectWithValue('token is not exist')
  }
  try {
    const response = await api.get('users/current')
    console.log('response.data',response.data);
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})
