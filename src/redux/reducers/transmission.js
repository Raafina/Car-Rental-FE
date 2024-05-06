import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  transmissions: [],
};

// [token, setToken] = useState(localStorage.getItem("token") || null)
// [user, setUser] = useState(null)

/* 
    -- action.payload -> setToken("euyasd1309e190ds")
                      -> setUser({id:1,"email": "a@example.com"})
*/

// Define the slice
const transmissionSlice = createSlice({
  name: "transmission",
  initialState,
  reducers: {
    setTransmissions: (state, action) => {
      state.transmissions = action.payload;
    },
  },
});

// export the setter funtion
export const { setTransmissions } = transmissionSlice.actions;

// export the reducer
export default transmissionSlice.reducer;
