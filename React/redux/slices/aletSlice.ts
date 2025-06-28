import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AlertState {
  show: boolean;
  type: "error" | "success";
  menssage: string;
}

const initialState: AlertState = {
  show: false,
  type: "error",
  menssage: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setShow: (state, action: PayloadAction<AlertState["show"]>) => {
      state.show = action.payload;
    },
    setType: (state, action: PayloadAction<AlertState["type"]>) => {
      state.type = action.payload;
    },
    setMenssage: (state, action: PayloadAction<AlertState["menssage"]>) => {
      state.menssage = action.payload;
    },
  },
});

export const { setMenssage, setShow, setType } = alertSlice.actions;
export default alertSlice.reducer;
