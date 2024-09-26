import "./settings.css"
import { BiX } from "react-icons/bi"
import { useEffect, useRef, useState } from "react"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import { IoPersonCircleSharp } from "react-icons/io5"
import { LuPencil } from "react-icons/lu"
import { toast } from "react-toastify"
import MechSettings from "./MechSettings"
import { FaCheck } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setmechSettingsPage } from "../../../../Global/Redux-actions/carCare"
import axios from "axios"

const Settings = () => {
  const { typeOfUser, mechSettingsPage, UserDatas, UserDataWithToken } = useSelector((state) => state?.carCare)
  const [typeOfuser, settypeOfuser] = useState(typeOfUser)
  const [showPassword, setshowPassword] = useState(false)
  const [mechSettings, setmechSettings] = useState(mechSettingsPage)
  const [selectedImage, setSelectedImage] = useState(null);
  const [profilePicture, setprofilePicture] = useState(null);
  const [loading, setloading] = useState(false);
  const [fullName, setfullName] = useState(UserDatas?.fullName);
  const [address, setaddress] = useState(UserDatas?.address);
  const [phoneNumber, setphoneNumber] = useState(UserDatas?.phoneNumber);
  const [cancelToken, setCancelToken] = useState(null); // State to manage cancel token
  const dispatch = useDispatch()
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file, "file")
    if (file && file.type.startsWith('image/')) {
      // Update the selected image state
      setprofilePicture(file)
      const imgUrl = URL.createObjectURL(file)
      setSelectedImage(imgUrl);
      // console.log(imgUrl)
      // console.log(selectedImage)
    } else {
      toast.error('Please select an image file')
      // toast.error("Please select an image file")
      // console.log("imgUrl")
      setSelectedImage(null);
      // console.log(selectedImage)
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
   // useRef to store the cancel function
   const cancelTokenSource = useRef(null);

   // Create a new cancel token source before making the request
   cancelTokenSource.current = axios.CancelToken.source();

  const updatProfile = async () => {
    const url = import.meta.env.VITE_API_Url
    const token = UserDataWithToken.token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,  // Add token for authentication
        "Content-Type": "application/json"
      },
      cancelToken: cancelToken?.token, // Use the state-based cancel token
    }
    if (!fullName || !address || !phoneNumber) {
      toast.error("all fields are required")
    } else {
      const data = { fullName, address, phoneNumber }
      try {
        setloading(true);
        const source = axios.CancelToken.source();
        setCancelToken(source); // Create and set the cancel token source
        // Upload profile picture if it exists
        if (profilePicture) {
          try {
            const uploadResponse = await axios.post(`${url}/api/v1/uploadProfilepix`, profilePicture, { ...config, cancelToken: source.token });
            console.log(uploadResponse);
          } catch (error) {
            if (axios.isCancel(error)) {
              toast.error("Profile update canceled");
            } else {
              // toast.error("Error updating profile");
              console.error( error);
              toast.error("Something went wrong, please try again.");
            }
            return; // Stop execution if upload fails
          }
        }

        // Update profile data
        try {
          const updateResponse = await axios.put(`${url}/api/v1/updateUserprofile`, data, { ...config, cancelToken: source.token });
          console.log(updateResponse);
          toast.success("Profile updated successfully!");
        } catch (error) {
          if (axios.isCancel(error)) {
            toast.error("Profile update canceled");
          } else {
            // toast.error("Error updating profile");
            console.error( error);
            toast.error("Something went wrong, please try again.");
          }
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          toast.error("Profile update canceled");
        } else {
          console.error("Unexpected error:", error);
          toast.error("Something went wrong, please try again.");
        }
      } finally {
        setloading(false);
        setCancelToken(null); // Reset the cancel token state
      }
    }
  }

// Function to handle cancel button
const handleCancel = () => {
  if (cancelToken) {
    cancelToken.cancel("Operation canceled by user.");
    setCancelToken(null); // Reset the cancel token state after canceling
  }
};
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
                      style={selectedImage ? { bottom: "4px" } : null}
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
                  onChange={(e) => setfullName(e.target.value)}
                />
              </div>
              <div className="inpuHolder">
                <label htmlFor="Address">Address</label>
                <input type="text"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>
              <div className="inpuHolder">
                <label htmlFor="Phone Number">Phone Number</label>
                <input type="number"
                  value={phoneNumber}
                  onChange={(e) => setphoneNumber(e.target.value)}
                />
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
            {
              loading ?
                <>
                  <button className="cancelSettings" onClick={handleCancel} >Cancel <BiX /></button>
                  <button className="saveSettings">Saving... </button>
                </>
                :
                <button onClick={updatProfile} className="saveSettings">Save <FaCheck /></button>
            }
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
                  mechSettingsNav?.map((e, i) => (
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