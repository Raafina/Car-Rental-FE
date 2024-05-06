import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  manufactures: [],
};

// [token, setToken] = useState(localStorage.getItem("token") || null)
// [user, setUser] = useState(null)

/* 
    -- action.payload -> setToken("euyasd1309e190ds")
                      -> setUser({id:1,"email": "a@example.com"})
*/

// Define the slice
const manufactureSlice = createSlice({
  name: "manufacture",
  initialState,
  reducers: {
    setManufactures: (state, action) => {
      state.manufactures = action.payload;
    },
  },
});

// export the setter funtion
export const { setManufactures } = manufactureSlice.actions;

// export the reducer
export default manufactureSlice.reducer;
