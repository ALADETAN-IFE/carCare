import { createSlice } from "@reduxjs/toolkit";

// const setUserType = (usertype) => {
//     localStorage.setItem('TypeofUser', usertype)
// }

// const user = localStorage.getItem('TypeofUser')

// const setUserDatas = (userdatas) => {
//     localStorage.setItem('datas', JSON.stringify(userdatas))
// }

// const datas = JSON.parse(localStorage.getItem('datas'))

// setUser("visitor")
const initialState = {
    UserData :undefined,
    UserDatas :undefined,
    isLoggedIn: false,
    appPages : "app",
    AppbookingForm: 0
}


// famousfotune123@gmail.com
// aaa1$Aaa


export const carCareSlice = createSlice({
    name: "carCare",
    initialState,
    reducers: {
        // setUserData: (state, {payload}) => {
        //     state.UserData = payload; 
        //     state.NavBarvisibilty = false
        // },
        // setUserDatas: (state, {payload}) => {
        //     state.UserDatas = payload; 
        // },
        logIn: (state) => {
            state.isLoggedIn = true; 
        },
        logOut: (state) => {
            // state.UserData = undefined; 
            state.isLoggedIn = false; 
            state.appPages = "app"; 
            state.AppbookingForm = 0; 
        },
        setAppPages: (state, {payload}) => {
            // state.UserData = undefined; 
            state.appPages = payload; 
        },
        setAppbookingForm: (state, {payload}) => {
            // state.UserData = undefined; 
            state.AppbookingForm = payload; 
        },

    }
});

export const { logIn, logOut, setAppPages, setAppbookingForm,
    } = carCareSlice.actions;
export default carCareSlice.reducer;




