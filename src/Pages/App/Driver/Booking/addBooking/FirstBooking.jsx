import {
    carData, brandOptions,
    modelOptions, locationOptions,
    brandYears
} from "./opions"
import Select, { components } from 'react-select';
import { customStyles } from "../../../../../Components/reactSelectStyles"


const FirstBooking = ({ setbookingInputsObject, bookingInputsObject, setbookingFormsPage,  }) => {

    const generateYearOptions = (startYear, endYear) => {
        if (!bookingInputsObject?.brand) {
            // const years = [];
            // const chooseFirst = years.push({ value: "", label: "please select a car brand first" });
            // return chooseFirst
            return [{
                value: "",
                label: "please select a car brand first"
            }]
        } else {
            const years = [];
            for (let year = startYear[0]?.startYear; year <= endYear; year++) {
                years.push({ value: year, label: year });
            }
            return years;

        }
    };
    const carYears = brandYears.filter((option) => option.value == bookingInputsObject?.brand)

    const yearOptions = generateYearOptions(carYears, new Date().getFullYear());
    // console.log(carYears[0].startYear, "carYears")
    const BrandModels = () => {
        // value={brandOptions?.find(option => option.value === bookingInputsObject?.brand)} 
        if (!bookingInputsObject?.brand) {
            return [{
                value: "",
                label: "please select a car brand first"
            }]
        }
        // else if (condition) {
        //     return [{
        //         value: "",
        //         label: ""
        //     }]
        // }
        else {
            const brands = carData.filter((option) => option.name == bookingInputsObject?.brand)
            //    console.log(brands, "brands")
            const brands2 = brands[0].brands
            //    console.log(bookingInputsObject?.brand , "bookingInputsObject")
            return brands2
        }
    }

    // const changeBrandModel = () => {

    //     if (modelOptions?.find(option => option.value === bookingInputsObject?.model) ) {
    //       console.log()
    //     } else {

    //      }
    // }


    // changeBrandModel()
    return (
        <>
            <div className="inputs">
                <div className="doubleInput">
                    <div className="inputHolder">
                        <label htmlFor="Car Brand">Car Brand</label>
                        <Select options={brandOptions}
                            placeholder=""
                            styles={customStyles}
                            onChange={(e) => setbookingInputsObject({ ...bookingInputsObject, brand: e.value, model: "", city: "Lagos" })}
                            //  value={bookingInputsObject?.brand}
                            value={brandOptions.find(option => option.value === bookingInputsObject?.brand)}
                        />
                    </div>
                    <div className="inputHolder">
                        <label htmlFor="Brand Model">Brand Model</label>
                        <Select
                            options={BrandModels()}
                            // options={modelOptions}
                            placeholder=""
                            styles={customStyles}
                            onChange={(e) => setbookingInputsObject({ ...bookingInputsObject, model: e.value })}
                            value={BrandModels().find(option => option.value === bookingInputsObject?.model)}
                        />
                    </div>
                </div>
                <div className="inputHolder">
                    <label htmlFor="Car Year">Car Year</label>
                    {/* <input type="month" maxDetail="decade" /> */}
                    <Select options={yearOptions}
                        placeholder=""
                        styles={customStyles}
                        onChange={(e) => setbookingInputsObject({ ...bookingInputsObject, year: e.value })}
                        value={yearOptions?.find(option => option.value === bookingInputsObject?.year)}
                    />
                </div>
                <div className="inputHolder">
                    <label htmlFor="State">State</label>
                    <input type="text" value="Lagos" contentEditable="false"
                        style={{ cursor: "not-allowed", background: 'white' }}
                        disabled
                        onChange={(e) => setbookingInputsObject({ ...bookingInputsObject, city: e.value })}
                    // value={brandOptions?.find(option => option.value === bookingInputsObject?.city)} 
                    />
                </div>
                <div className="inputHolder">
                    <label htmlFor="City">City</label>
                    <Select options={locationOptions}
                        placeholder=""
                        styles={customStyles}
                        onChange={(e) => setbookingInputsObject({ ...bookingInputsObject, carLocation: e.value })}
                        value={locationOptions?.find(option => option.value === bookingInputsObject?.carLocation)}
                    />
                </div>
            </div>
            <button className='addBooking_btn'
             onClick={(e) => setbookingInputsObject({ })}
            //  onClick={() => setbookingFormsPage(1)} 
             >Next</button>
        </>
    )
}

export default FirstBooking