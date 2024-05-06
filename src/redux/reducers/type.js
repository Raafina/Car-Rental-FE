import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  types: [],
};

// [token, setToken] = useState(localStorage.getItem("token") || null)
// [user, setUser] = useState(null)

/* 
    -- action.payload -> setToken("euyasd1309e190ds")
                      -> setUser({id:1,"email": "a@example.com"})
*/

// Define the slice
const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload;
    },
  },
});

// export the setter funtion
export const { setTypes } = typeSlice.actions;

// export the reducer
export default typeSlice.reducer;
