export const customStyles = {
    container: (provided, state) => ({
        ...provided,
        //   backgroundColor: '#f2f2f2',
        //   border: '1px solid #ddd',
        //   boxShadow: state.isFocused ? '0 0 5px blue' : 'none',
        //   display: flex;
        width: "100%",
        height: "60px",
        border: "1px solid #000",
        borderRadius: "8px",
        /* padding: 20px 923px 14px 21px; */
        //   padding-top: "5px";
        //   padding-left: 21px;
        //   align-items: center;
        /* align-self: stretch; */
        /* border: none; */
        //   outline: none;
        cursor: "pointer"
    }),
    control: (provided, state) => ({
        ...provided,
        width: "100%",
        height: "100%",
        border: "1px solid #000",
        borderRadius: "8px",
        padding: '0px',
        hover: {
            border: "1px solid #000",
        },
        cursor: "pointer",
    }),
    option: (provided, state) => ({
        ...provided,
        cursor: "pointer",
        backgroundColor: state.isSelected ? '#0066B2' : '#fff',
        color: state.isSelected ? '#fff' : '#333',
        width: "100%",

    }),
    indicatorSeparator: () => ({
        display: 'none', // Completely removes the separator line between input and arrow
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        paddingTop: "0px"
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: "#171717",
        height: "60%",
        // display: "flex", 
        // alignItems: "center",
        cursor: "pointer"
        // justifyContent: "center,"
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'var(--Primary-Primary500, #9F9F9F)', // Change this to the color you want for the placeholder
        fontFamily: "Lora",
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "500",
    }),

    // menu: (provided) => ({
    //   ...provided,
    //   zIndex: 9999,  // Useful for dropdown overlapping issues

    // }),
};