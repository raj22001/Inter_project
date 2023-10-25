
import Logo from "../assets/image/Logo.png"
import Image from "../assets/image/Group.png"
import { useState } from "react"
import Line from "../assets/image/Line.png"
import {FcGoogle } from "react-icons/fc"
import {GrFacebook} from "react-icons/gr"
import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate();

  const [formdata , SetFormData] = useState({
    username:"" , password:""
  });

  const [error , setError] = useState("");

  function setHandler(e) {
    const { name, value } = e.target;
    SetFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  
  /* 
  const changePage = async() =>{
    try{

      const res = await fetch("/api/users/login" , {
        method:"POST",
        headers:{
          "Content-Type" :"application/json",
        },
        body:JSON.stringify(formdata),
      });

      const data = await res.json();

      if(data.error){
         alert("Something wrong happend");
      }

      localStorage.setItem("user-data", JSON.stringify(data));
      navigate("/city");
    }catch(error){
      return alert("Something wrong happend");
    }
  }
  */

  function changePage(event) {
    event.preventDefault();

    if (!formdata.username || !formdata.password) {
      setError("Username and password are required.");
    } else {
      setError("");
      console.log("Change Page");
      navigate("/city");
    }
  }
  return (
    <div className="overflow-hidden">
        <div className="w-full h-[90px] mb-12">
            <div className="fixed w-full h-[90px] top-0 left-0 bg-[#dfdfdf] mb-12 flex items-center justify-center" >
                <img src={Logo} alt="logois here  " />
            </div>
        </div>

        <div className=" w-full h-[480.08px] top-176 left-[-191.77px] flex flex-row ">
            <div className="w-750 h-[385px] top-176 left-38 ml-14">
              <img className="mt-[20px] ml-[12px]" src={Image} alt="" />
            </div>
            <div className="w-331px h-208 ml-[500px] mt-[20px] rounded-md">
              <h1 className="font-open-sans text-2xl font-semibold leading-8 tracking-tight text-left ">Login Here</h1>
              

              <form className="flex flex-col ">
                <input type="text"
                  required
                  value={formdata.username}
                  name="username"
                  placeholder="Username or Phone"
                  onChange={setHandler}
                  className="mt-4 pr-12 p-4 border bottom-1 rounded-md"  
                  />

                <input type="password"
                  required
                  value={formdata.password}
                  placeholder="password"
                  name="password"
                  onChange={setHandler}
                  className="mt-5 p-4 border bottom-1 rounded-md"
                  />
              </form>
              {error && <p className="text-red-600 ml-4 mt-2">{error}</p>}
              <h1 className="ml-40 mt-2">Forgot Password?</h1>
              
              <div className="w-[369px] h-[184px] top-[409px] left-[815px]">
                <button onClick={changePage} className="w-[330px] h-[60px] rounded-full mt-4 ml-4 
                 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4); shadow-md">Log In</button>
                  <p className="text-center mt-6">Sign up with </p>
                <div className="flex space-x-4 mt-6 items-center justify-center">
                  <div className="w-[52px] h-[52px] top-0 left-0 bg-[#ebe9eb] rounded-[26px] border-[0.4px] border-solid border-[#f79aee] cursor-pointer">
                    <FcGoogle className="relative items-center w-[30px] h-[30px] top-[11px] left-[11px]"/>
                  </div>

                  <div className="w-[52px] h-[52px] top-0 left-0 bg-[#ebe9eb] rounded-[26px] border-[0.4px] border-solid border-[#f79aee] cursor-pointer">
                    <GrFacebook  className="relative items-center w-[30px] h-[30px] top-[11px] left-[11px]"/>
                  </div>
                </div>
            
              </div>
            </div>
        </div>
        <div className="w-full h-[290px] top-[454px] -left-[155px] transform rotate-3 ">
            <div className="w-full h-[px] top-[625px] -left-[1.75px] transform -rotate-3">
              <img src={Line}
                className="w-full h-[282px] top-[500px] -left-[175px] transform z-10 "
              />
            </div>
        </div>
    </div>
  )
}

export default Navbar
