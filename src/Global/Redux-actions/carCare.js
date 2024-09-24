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
    UserDataWithToken :{},
    UserDatas: {},
    notVerified: [],
    navBarVisibility: true,
    isLoggedIn: false,
    appPages: "app",
    // app, booking, addbooking, settings 
    AppbookingFormPage: 0,
    userBookingForm: {},
    typeOfUser: "",
    // Driver, Mechanic, Admin
    mechSettingsPage: "Personal Information",
    // Personal Information, Professional Details,
    // Service Pricing Account Settings ,
    mechCompleteDetails: {},
        // {
    //     "businessName": "string",
    //     "businessAddress": "string",
    //     "areaOfSpecialization": "string",
    //     "yearsOfExperience": "number",
    //     "businessRegNumber": "string"
    //      profilePicture: Required.
    //      identification: Required.
    //      certification: Required.
    //      insurance: Optional.
    //   }
    mechTobeBooked: {},
    notifications:[]
}


// famousfotune123@gmail.com
// aaa1$Aaa


export const carCareSlice = createSlice({
    name: "carCare",
    initialState,
    reducers: {
        setUserDataWithToken: (state, {payload}) => {
            state.UserDataWithToken = payload; 
            // state.NavBarvisibilty = false
        },
        setUserDatas: (state, {payload}) => {
            state.UserDatas = payload; 
        },
        setnotVerified: (state, {payload}) => {
            state.notVerified.push(payload);
        },
        clearnotVerified: (state) => {
            state.notVerified = [];
        },
        openNavBarVisibility: (state) => {
            state.navBarVisibility = true;
        },
        closeNavBarVisibility: (state) => {
            state.navBarVisibility = false;
        },
        logIn: (state) => {
            state.isLoggedIn = true;
        },
        setmechCompleteDetails: (state, {payload}) => {
            state.mechCompleteDetails = payload;
        },
        logOut: (state) => {
            // state.UserData = undefined; 
            state.isLoggedIn = false;
            state.appPages = "app";
            state.AppbookingFormPage = 0;
            state.typeOfUser = "";
            state.mechSettingsPage = "Personal Information";
            state.userBookingForm = {};
            state.UserDatas = {}; 
            state.UserDataWithToken = {}; 
            state.notifications = [];
        },
        setAppPages: (state, { payload }) => {
            // state.UserData = undefined; 
            state.appPages = payload;
        },
        setAppbookingFormPage: (state, { payload }) => {
            // state.UserData = undefined; 
            state.AppbookingFormPage = payload;
        },
        setuserBookingForm: (state, { payload }) => {
            // state.UserData = undefined; 
            state.userBookingForm = payload;
        },
        setTypeOfUser: (state, { payload }) => {
            // state.UserData = undefined; 
            state.typeOfUser = payload;
            // console.log(state,payload)
        },
        setmechSettingsPage: (state, { payload }) => {
            // state.UserData = undefined; 
            state.mechSettingsPage = payload;
        },
        setmechTobeBooked: (state, { payload }) => {
            // state.UserData = undefined; 
            state.mechTobeBooked = payload;
        },
        setnotifications: (state, { payload }) => {
            // state.UserData = undefined; 
            state.notifications = payload;
        },

    }
});

export const { setnotVerified, clearnotVerified, openNavBarVisibility, closeNavBarVisibility, 
    setmechCompleteDetails, setUserDataWithToken,
    logIn, logOut, setAppPages, setAppbookingFormPage,setUserDatas,
    setuserBookingForm, setTypeOfUser, setmechSettingsPage, setmechTobeBooked,
    setnotificationsotifications
} = carCareSlice.actions;
export default carCareSlice.reducer;




