import {AiOutlineMenu} from "react-icons/ai"
import Hero from "../../pages/Hero"

const Header = () => {
  return (
    <div className="w-full h-[70px] bg-black flex justify-center items-center">
        <div className="w-[90%] flex justify-between items-center bg-red-300 h-[100%] ">
<div>LOGO</div>
<div className="gap-[20px] flex medium:hidden">
    <div>Home</div>
    <div>Features</div>
    <div>Services</div>
</div>
<button className="flex medium:hidden ">
    SignUp
</button>
<AiOutlineMenu className="text-[40px] medium:flex hidden"/>
        </div>
        
    </div>
  )
}

export default Header