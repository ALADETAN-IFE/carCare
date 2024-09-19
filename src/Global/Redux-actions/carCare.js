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
    appPages: "app",
    // app, booking, addbooking, settings 
    AppbookingFormPage: 0,
    userBookingForm: {},
    typeOfUser: "Mechanic",
    // Driver, Mechanic, Admin
    mechSettingsPage: "Personal Information",
    // Personal Information, Professional Details,
    // Service Pricing Account Settings ,
    mechCompleteDetails: {}
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
        openNavBarVisibility: (state) => {
            state.navBarVisibility = true;
        },
        closeNavBarVisibility: (state) => {
            state.navBarVisibility = false;
        },
        logIn: (state) => {
            state.isLoggedIn = true;
        },
        setmechCompleteDetails: (state) => {
            state.mechCompleteDetails = {...state?.mechCompleteDetails, payload};
        },
        logOut: (state) => {
            // state.UserData = undefined; 
            state.isLoggedIn = false;
            state.appPages = "app";
            state.AppbookingFormPage = 0;
            state.typeOfUser = "";
            state.mechSettingsPage = "Personal Information";
            state.userBookingForm = {};
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
        },
        setmechSettingsPage: (state, { payload }) => {
            // state.UserData = undefined; 
            state.mechSettingsPage = payload;
        },

    }
});

export const { openNavBarVisibility, closeNavBarVisibility, setmechCompleteDetails,
    logIn, logOut, setAppPages, setAppbookingFormPage,
    setuserBookingForm, setTypeOfUser, setmechSettingsPage
} = carCareSlice.actions;
export default carCareSlice.reducer;




