import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/shopping-cart.png";
import Account from "../../assets/user.png";
import { IoMenu } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
// import { loggedUser } from '../Global/Redux-actions/EComSlice'
import './Header.css'
import Dropdown from "./Dropdown";


const Header = () => {
  const {id} = useParams()
  const existingUsers = useSelector((state)=> state?.ECom?.users)
  const UserDetails = useSelector((state)=> state?.ECom?.loggedUser)
  const User = existingUsers.find((e)=> e?.id == UserDetails?.id)
  const UserID = UserDetails?.id

  const [dropdown, setdropdown] = useState(false)
  // const User = useSelector((state)=> state?.ECom?.loggedUser)
  // const {cartLength} = useContext(ECommerceContext)
  // const [categories, setcategories] = useState([])
  // const [Loading, setLoading] = useState(false)
  const [showMenu, setshowMenu] = useState(false)
  // const getCat = async () =>{
  //     try {
  //     setLoading(true)
  //     // const res = await axios.get('https://0102e171fc48489baad111f2151982a2.api.mockbin.io/');
  //     const res = await axios.get('https://api.escuelajs.co/api/v1/categories');
  //     // const res1 = await axios.get(`https://dummyjson.com/products/category/${i}`);
  //     setcategories(res?.data)
  //     console.log(res?.data)
  //     setLoading(false)
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }
  // useEffect(() => {  
  //     getCat()
  // }, [])
  useEffect(() => {  
    setTotalQuantity(User?.carts?.length)
     setuserName(User?.username)
     
  }, [existingUsers])
  // useEffect(() => {  
  //   setTotalQuantity(User?.carts?.length)
  //    setuserName(User?.username)
     
  // }, )




//   const cart = useSelector((state)=> state?.CartsPage?.Carts)

const [TotalQuantity, setTotalQuantity] = useState(0)
const [userName, setuserName] = useState("userName")
// useEffect(() => {  
//   console.log(TotalQuantity)
// }, [])
// useEffect(() => {
//   const total1 = cart.reduce((acc, item) => acc + item.quantity,0)
//   setTotalQuantity(total1)
//   // console.log(CartsPage.Carts, "things")
// }, [cart])

//   useEffect(() => {
//     // console.log(cart);
//   }, )
  

  return (
    <div className="Header">
      <div className="Header__Wrapper">
        <div className="Logo_Holder">
          <img src={Logo} alt="" style={{ cursor: "pointer" }} />
        </div>
        <div className="Nav_Holder">
          <nav>
            <NavLink to={`/home/${UserID}`}
              className={({ isActive }) =>
                isActive ?  "HeaderActive" : "HeaderNotActive"
              }
            >Home</NavLink>
          </nav>
          <nav>
          <NavLink to="/category"
              className={({ isActive}) =>
                isActive ?  "HeaderActive" : "HeaderNotActive"
              }
            >Categories</NavLink>
                    {/* {
          showMenu ? 
          <ul>
              {
                categories.map((e)=> (
                  <li>{e?.name}</li>
                ))
            }  
                  <li>produts</li>
                  <li>produts</li>
                  <li>produts</li>

          </ul>
          : null
        } */}
          </nav>
          {/* <input type="search" /> */}
        </div>
        <div className="Cart_Account__Holder">
          <div className="Cart_Holder" onMouseEnter={()=> setdropdown(true)} >
            <img src={Account} alt="" />
            {/* <span>{userName}</span> */}
            <span >Account</span>
          </div>
          <div className="Cart_Holder">
            <img src={Cart} alt="" />
            <span>
              <NavLink to={`/cart/${UserID}`}
                className={({ isActive }) =>
                    isActive ? "HeaderActive" : "HeaderNotActive"
                  }
              >Cart 
               ({TotalQuantity})
              </NavLink>
            </span>
          </div>
        </div>
        <IoMenu className="Menu_Icon" onClick={()=> setshowMenu(!showMenu)}/>
        {
          showMenu ? 
          <ul style={{background: "red"}}>
              {/* {
                categories.map((e)=> (
                  <li>{e?.name}</li>
                ))
            } */}   
                  <li>produts</li>
                  <li>produts</li>
                  <li>produts</li>

          </ul>
          : null
        }
        {
          dropdown ? 
          <Dropdown setdropdown={setdropdown} userName={userName}/>
          : null
        }
      </div>
    </div>
  );
};

export default Header;

