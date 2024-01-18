import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatMessages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      //state.chatMessages.splice(process.env.REACT_APP_OFFSET_LIVE_CHAT, 1);
      if (state.chatMessages.length >= process.env.REACT_APP_OFFSET_LIVE_CHAT) {
        state.chatMessages.shift();
      }
      state.chatMessages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
