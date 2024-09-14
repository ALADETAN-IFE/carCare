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
    // UserData :undefined,
    // UserDatas :undefined,
    navBarVisibility: true,
    isLoggedIn: false,
    appPages : "app",
    AppbookingFormPage: 0,
    userBookingForm: []
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
        setNavBarVisibility: (state) => {
            state.navBarVisibility = !state.navBarVisibility; 
        },
        logIn: (state) => {
            state.isLoggedIn = true; 
        },
        logOut: (state) => {
            // state.UserData = undefined; 
            state.isLoggedIn = false; 
            state.appPages = "app"; 
            state.AppbookingFormPage = 0; 
        },
        setAppPages: (state, {payload}) => {
            // state.UserData = undefined; 
            state.appPages = payload; 
        },
        setAppbookingFormPage: (state, {payload}) => {
            // state.UserData = undefined; 
            state.AppbookingFormPage = payload; 
        },
        setuserBookingForm: (state, {payload}) => {
            // state.UserData = undefined; 
            state.userBookingForm = payload; 
        },

    }
});

export const { setNavBarVisibility,
     logIn, logOut, setAppPages, setAppbookingFormPage,
     setuserBookingForm
    } = carCareSlice.actions;
export default carCareSlice.reducer;




