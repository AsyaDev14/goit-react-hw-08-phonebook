import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice} from './slice';
import { authReducer } from './auth/authSlice';
// https://connections-api.herokuapp.com/



export const store = configureStore({
  reducer: {
    contactData: contactsSlice.reducer,
    // login reducer
    auth: authReducer,
  },
});

