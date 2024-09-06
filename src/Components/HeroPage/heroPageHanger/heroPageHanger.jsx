import HomeBtn from '../../HomeBtn/HomeBtn.jsx';
import './heroPageHanger.css'
import HeroPageHangerDropDown from '../heroPageHangerDropDown/HeroPageHangerDropDown.jsx'
import { RxDropdownMenu } from "react-icons/rx";
import { BsDroplet } from 'react-icons/bs';
import { CiDroplet } from 'react-icons/ci';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

const HeroPageHanger = () => {
    const HeroPageHangerDropDownDetails = [
        {
            id:1.0, 
            select: "Make",
            options: [
                {
                    id: 1.1,
                    text: "Lamborghini"
                }
            ],
            Icon: <MdOutlineKeyboardArrowDown  size={28}/>,
            activeIcon: <MdOutlineKeyboardArrowUp  size={28}/>
        },
        {
            id:2.0, 
            select: "Model",
            options: [
                {
                    id: 2.1,
                    text: "Lamborghini"
                }
            ],
            Icon: <MdOutlineKeyboardArrowDown  size={28}/>,
            activeIcon: <MdOutlineKeyboardArrowUp  size={28}/>
        },
        {
            id:3.0, 
            select: "Year",
            options: [
                {
                    id: 3.1,
                    text: "Lamborghini"
                }
            ],
            Icon: <MdOutlineKeyboardArrowDown  size={28}/>,
            activeIcon: <MdOutlineKeyboardArrowUp  size={28}/>
        },
        {
            id:3.0, 
            select: "Engine Type",
            options: [
                {
                    id: 3.1,
                    text: "Lamborghini"
                }
            ],
            Icon: <MdOutlineKeyboardArrowDown  size={28}/>,
            activeIcon: <MdOutlineKeyboardArrowUp  size={28}/>
        },
    ]
  return (
    <div className='HeroPageHanger'>
        <div className="HeroPageHangerWrapper">
            {/* <BsDroplet/> */}
            {/* <MdArrowDropDown/> */}
            {/* <CiDroplet/> */}
        {
            HeroPageHangerDropDownDetails.map((e, i)=> (
                <HeroPageHangerDropDown e={e} key={i}/>
            ))
        }
        <HomeBtn title="Choose Service" 
        edit={{width: "20%", alignSelf: "center"}}/>
        </div>
    </div>
  )
}

export default HeroPageHanger 