import "./settings.css"
import { BiX } from "react-icons/bi"
import { useEffect, useState } from "react"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import { IoPersonCircleSharp } from "react-icons/io5"
import { LuPencil } from "react-icons/lu"
import { toast } from "react-toastify"
import MechSettings from "./MechSettings"
import { FaCheck } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setmechSettingsPage } from "../../../../Global/Redux-actions/carCare"

const Settings = () => {
  const {typeOfUser, mechSettingsPage, UserDatas} = useSelector((state)=> state?.carCare)
  const [typeOfuser, settypeOfuser] = useState(typeOfUser)
  const [showPassword, setshowPassword] = useState(false)
  const [mechSettings, setmechSettings] = useState(mechSettingsPage)
  const [selectedImage, setSelectedImage] = useState(null);
  const [fullName, setfullName] = useState(UserDatas?.fullName);
  const dispatch = useDispatch()
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file, "file")
    if (file && file.type.startsWith('image/')) {
      // Update the selected image state
      const imgUrl = URL.createObjectURL(file)
      setSelectedImage(imgUrl);
      console.log(imgUrl)
      console.log(selectedImage)
    } else {
      alert('Please select an image file')
      // toast.error("Please select an image file")
      console.log("imgUrl")
      setSelectedImage(null);
      console.log(selectedImage)
    }
  };
  const mechSettingsNav = [
    {
      text: "Personal Information"
    },
    {
      text: "Professional Details"
    },
    {
      text: "Service Pricing"
    },
    {
      text: "Account Settings"
    },
  ]
  useEffect(() => {
    setmechSettings(mechSettingsPage)
    // settypeOfuser(typeOfUser)
  }, [mechSettingsPage])
  
  const changeMechSettingsPage = (typeOfSettings) => {
    dispatch(setmechSettingsPage(typeOfSettings))
  }

  const updatProfile = () => {

  }
  return (
    <div className="settings">
      {
        typeOfuser == "Driver" ?
          <div className="settingsWrapper">
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
                  <input type="text" 
                  value={fullName}
                  onChange={(e)=> setfullName(e.target.value)}
                  />
                </div>
                <div className="inpuHolder">
                  <label htmlFor="Address">Address</label>
                  <input type="text" />
                </div>
                <div className="inpuHolder">
                  <label htmlFor="Phone Number">Phone Number</label>
                  <input type="number" />
                </div>
                {/* <div className="inpuHolder">
                  <label htmlFor="Password">Password</label>
                  <div className="passwordInputHolder">
                    <input type={showPassword ? "text" : "password"} />
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
              <button>Cancel <BiX /></button>
              <button onClick={updatProfile}>Save <FaCheck /></button>
            </div>
          </div>
          : typeOfuser == "Mechanic" ?
            <div className="settingsMechWrapper">
              <div className="settingsMechUp">

                <h4>Profile Settings</h4>
              </div>
              <div className="settingsMechDown">
                <div className="settingsMechLeft">
                  {
                    mechSettingsNav?.map((e, i)=> (
                  <div className={mechSettings.includes(e?.text) ? "settingsMechNavActive settingsMechNav" : "settingsMechNav"}
                    key={i} onClick={() => changeMechSettingsPage(e?.text)}>
                      {e?.text}
                  
                  </div>
                    ))
                  }
                </div>
                <MechSettings
                  selectedImage={selectedImage}
                  handleImageChange={handleImageChange}
                  setshowPassword={setshowPassword}
                  showPassword={showPassword}
                  mechSettings={mechSettings}
                />
              </div>
            </div>
            :
            <div className="settingsWrapper">
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
                    <input type="text" />
                  </div>
                  <div className="inpuHolder">
                    <label htmlFor="Phone Number">Phone Number</label>
                    <input type="number" />
                  </div>
                  <div className="inpuHolder">
                    <label htmlFor="Password">Password</label>
                    <div className="passwordInputHolder">
                      <input type={showPassword ? "text" : "password"} />
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
      }
    </div>
  )
}

export default Settings