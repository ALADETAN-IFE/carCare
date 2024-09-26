import React, { useState } from 'react'
import { BiX } from 'react-icons/bi'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { LuPencil } from 'react-icons/lu'
import { useSelector } from 'react-redux'

const MechSettings = ({selectedImage, mechSettings, 
    handleImageChange, setshowPassword, 
    showPassword
}) => {
  const { typeOfUser, mechSettingsPage, UserDatas, UserDataWithToken } = useSelector((state) => state?.carCare)
  
  const [loading, setloading] = useState(false);
  const [fullName, setfullName] = useState(UserDatas?.fullName);
  const [cancelToken, setCancelToken] = useState(null); // State to manage cancel token
  const [formData1, setformData1] = useState({})
  const [formData2, setformData2] = useState({})
  const [formData3, setformData3]= useState({})
  const [formData4, setformData4]= useState({})

  const handleCancel = () => {
    if (cancelToken) {
      cancelToken.cancel("Operation canceled by user.");
      setCancelToken(null); // Reset the cancel token state after canceling
    }
  };

  const handleform1Change = (event) => {
    setformData1({...formData1, [event.target.name]: event.target.value });
  }
  const handleform2Change = (event) => {
    setformData2({...formData2, [event.target.name]: event.target.value });
  }
  const handleform3Change = (event) => {
    setformData3({...formData3, [event.target.name]: event.target.value });
  }
  const handleform4Change = (event) => {
    setformData4({...formData4, [event.target.name]: event.target.value });
  }

  const updatProfile1 = () => {
    formData1
  }
  const updatProfile2 = () => {

  }
  const updatProfile3 = () => {

  }
  const updatProfile4 = () => {
    // Update mechanic's email
    // axios.put(`${url}/api/v1/mech/updateMechanicEmail`, { email: email }, { cancelToken: cancelToken })
    //  .then((response) => {
    //     console.log(response);
    //     // Update the state of UserDatas with the new email
    //     dispatch(updateMechanicEmail(response.data.email));
    //   })
    //  .catch((error) => {
    //     if (axios.isCancel(error)) {
    //       console.log("Operation canceled by user.");
    //     } else {
    //       console.error("Error updating mechanic's email: ", error);
    //     }
    //   });
  }
  return (
    <>
    {
        mechSettings == "Personal Information" ? 
     
          <div className="mechFormHolder">
            <div className="settingsWrapper mechFormHolderWrapper">
              <div className="settingsWrapperUp">
                <div className="settingsHead">
                  <div className="profilePic"
                    style={selectedImage != null ? { background: "#171717" } : null}
                  >
                    {
                      selectedImage != null ?
                        <img src={selectedImage} alt={selectedImage}
                        // style={selectedImage != null ? {background: "#171717"}: null}
                        />
                        :
                        <IoPersonCircleSharp
                          // width="100px" 
                          size={122}
                          style={ selectedImage ? {bottom: "4px"}: null}
                        />
                    }
                    <input type="file" accept="image/*" hidden id="img_upload"
                      onChange={handleImageChange}
                    />
                    <label className="penHolder" htmlFor="img_upload">
                      <LuPencil />
                    </label>
                  </div>
                  <h3>{UserDatas?.fullName}</h3>
                </div>
                <div className="settingsFormUser">
                  <div className="inpuHolder">
                    <label htmlFor="Full name">Full name</label>
                    <input type="text" />
                  </div>
                  <div className="inpuHolder">
                    <label htmlFor="Address">Address</label>
                    <input type="text" enterKeyHint='Address'/>
                  </div>
                  <div className="inpuHolder">
                    <label htmlFor="Phone Number">Phone Number</label>
                    <input type="number" />
                  </div>
                  {/* <div className="inpuHolder">
                    <label htmlFor="Password">Password</label>
                    <div className="passwordInputHolder">
                      <input type={showPassword ? "text" : "password"} 
                      />
                      {
                        showPassword ?
                          <BsEyeSlashFill onClick={() => setshowPassword(false)} />
                          :
                          <BsEyeFill onClick={() => setshowPassword(true)} />
                      }
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="settingsWrapperDown">
              {
              loading ?
                <>
                  <button className="cancelSettings" onClick={handleCancel} >Cancel <BiX /></button>
                  <button className="saveSettings">Saving... </button>
                </>
                :
                <button onClick={updatProfile1} className="saveSettings">Save <FaCheck /></button>
            }
              </div>
            </div>
          </div>
      : mechSettings == "Professional Details" ?
      <div className="mechFormHolder">
      <div className="settingsWrapper mechFormHolderWrapper">
        <div className="settingsWrapperUp">
          <div className="settingsFormUser">
            <div className="inpuHolder">
              <label htmlFor="Experience">Experience</label>
              <input type="text" />
            </div>
            <div className="inpuHolder">
              <label htmlFor="Area of Specialization">Area of Specialization</label>
              <input type="text" />
            </div>
            <div className="inpuHolder">
              <label htmlFor="Business Address">Business Address</label>
              <input type="text" />
            </div>
            <div className="inpuHolder">
              <label htmlFor="Service Location">Service Location</label>
              <input type="text" />
            </div>
            <div className="inpuHolder">
              <label htmlFor="Availability">Availability</label>
              <input type="text" placeholder='monday-saturday'/>
            </div>
       
          </div>
        </div>
        <div className="settingsWrapperDown">
        {
              loading ?
                <>
                  <button className="cancelSettings" onClick={handleCancel} >Cancel <BiX /></button>
                  <button className="saveSettings">Saving... </button>
                </>
                :
                <button onClick={updatProfile2} className="saveSettings">Save <FaCheck /></button>
            }
        </div>
      </div>
    </div>
     : mechSettings == "Service Pricing" ?
     <div className="mechFormHolder">
     <div className="settingsWrapper mechFormHolderWrapper">
       <div className="settingsWrapperUp">
         <div className="settingsFormUser">
           <div className="inpuHolder">
             <label htmlFor="Oil Change">Oil Change</label>
             <input type="text" />
           </div>
           <div className="inpuHolder">
             <label htmlFor="Tire Replacement">Tire Replacement</label>
             <input type="text" />
           </div>     
         </div>
       </div>
       <div className="settingsWrapperDown">
       {
              loading ?
                <>
                  <button className="cancelSettings" onClick={handleCancel} >Cancel <BiX /></button>
                  <button className="saveSettings">Saving... </button>
                </>
                :
                <button onClick={updatProfile3} className="saveSettings">Save <FaCheck /></button>
            }
       </div>
     </div>
   </div>
     : mechSettings == "Account Settings" ?
     <div className="mechFormHolder">
     <div className="settingsWrapper mechFormHolderWrapper">
       <div className="settingsWrapperUp">
         <div className="settingsFormUser">
           <div className="inpuHolder">
             <label htmlFor="Bank Name">Bank Name</label>
             <input type="text" />
           </div>
           <div className="inpuHolder">
             <label htmlFor="Account Number">Account Number</label>
             <input type="text" maxLength={11} />
           </div>     
           <div className="inpuHolder">
             <label htmlFor="Account Name">Account Name</label>
             <input type="text" />
           </div>     
         </div>
       </div>
       <div className="settingsWrapperDown">
       {
              loading ?
                <>
                  <button className="cancelSettings" onClick={handleCancel} >Cancel <BiX /></button>
                  <button className="saveSettings">Saving... </button>
                </>
                :
                <button onClick={updatProfile4} className="saveSettings">Save <FaCheck /></button>
            }
       </div>
     </div>
   </div>
      : null
    }
    </>
  )
}

export default MechSettings