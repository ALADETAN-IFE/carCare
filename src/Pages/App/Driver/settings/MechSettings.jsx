import React from 'react'
import { BiX } from 'react-icons/bi'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { LuPencil } from 'react-icons/lu'

const MechSettings = ({selectedImage, mechSettings, 
    handleImageChange, setshowPassword, 
    showPassword
}) => {
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
                        // style={{width: "100px", height: "100px"}}
                        />
                    }
                    <input type="file" accept="image/*" hidden id="img_upload"
                      onChange={handleImageChange}
                    />
                    <label className="penHolder" htmlFor="img_upload">
                      <LuPencil />
                    </label>
                  </div>
                  <h3>Favour Joy</h3>
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
                  <div className="inpuHolder">
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
                  </div>
                </div>
              </div>
              <div className="settingsWrapperDown">
                <button>Cancel <BiX /></button>
                <button>Save <FaCheck /></button>
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
          <button>Cancel <BiX /></button>
          <button>Save <FaCheck /></button>
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
         <button>Cancel <BiX /></button>
         <button>Save <FaCheck /></button>
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
         <button>Cancel <BiX /></button>
         <button>Save <FaCheck /></button>
       </div>
     </div>
   </div>
      : null
    }
    </>
  )
}

export default MechSettings