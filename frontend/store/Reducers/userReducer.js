import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  errors: [],
  songs:[],
  playlist:[],
  likedSong:[],
  currentSong:null,
  isAuthenticated: false,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
        (state.user = action.payload),(state.isAuthenticated = true);
    },
    removeUser: (state,action) => {
       (state.user = null),(state.isAuthenticated = false);
    },
    isError: (state, action) => {
     state.errors.push(action.payload);
    },
    myPlaylist : (state,action)=>{
        state.playlist = action.payload;
    },
    likedSongs: (state,action)=>{
        state.likedSong = action.payload;
    },
    addSongs:(state,action)=>{
     state.songs = action.payload;

    },
    currentSong:(state,action)=>{
        state.currentSong = action.payload; 
    },
    removeError:(state,action)=>{
        state.errors = []
    }
  },
});

// Action creators are generated for each case reducer function
export const { addUser,isError,removeError,removeUser,addSongs,currentSong,myPlaylist,likedSongs } = userReducer.actions;

export default userReducer.reducer;
