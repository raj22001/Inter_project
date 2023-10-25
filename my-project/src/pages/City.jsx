import Logo from "../assets/image/Logo.png"
//import {FaShoppingCart} from "react-icons/fa"
import { GrLocation} from "react-icons/gr"
import {BiSearchAlt2} from "react-icons/bi"
//import {GrNext} from "react-icons/gr"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const City = () => {
      
  const navigate = useNavigate()
  const [cityName , setCityName] = useState("");

  const place = [
    {
      id:1,
      city:"Raipur",
      Date:"10/11/23",
    },
    {
      id:2,
      city:"Haryana",
      Date:"09/12/23",
    },
    {
      id:3,
      city:"Amritsar",
      Date:"02/01/24",
    },
    {
      id:4,
      city:"Nagpur",
      Date:"18/11/24",
    },
    {
      id:5,
      city:"Pune",
      Date:"22/11/24",
    },
    {
      id:6,
      city:"Nashik",
      Date:"01/12/24",
    },
    {
      id:7,
      city:"Goa",
      Date:"05/12/24",
    },
    {
      id:8,
      city:"Kalyan",
      Date:"10/11/23",
    },
  ]

  function goEmptyPage(){
    navigate('/cartemty')
  }

  const filteredPlaces = place.filter((item) =>
      item.city.toLowerCase().includes(cityName.toLowerCase())
  )

  return (
  <div>

    <div className="w-full h-[90px]  overflow-y-hidden">
      <div className=" w-full h-[90px] top-0 left-0 bg-[#dfdfdf] mb-12 flex items-center justify-center" >
          <img src={Logo} alt="logois here" />
          <div className="flex flex-row ">
            <button onClick={goEmptyPage} className="fixed  w-[181px] h-[60px] top-3 right-9  rounded-[34px] shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(245,72,116)_0%,rgb(236,0,140)_100%)]">Go To cart  </button>
         </div>
      </div>
    </div>

    <div className="w-full flex items-center justify-center mt-4">
      <div className="flex flex-col items-center justify-center ">
        <div className="">
          <div className="flex flex-row mb-5 ">
            <h1 className="font-open-sans text-2xl font-semibold leading-10 tracking-tight text-left">Select your Location </h1>
            <GrLocation size={25} className="mt-2 gap-2 mb-7"/>
          </div>
        </div>

      <div className="w-[757px] h-[40px] left-[262px] top-[233px]  flex items-center  rounded-md">
      <input 
        type="search"
        placeholder="Search"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        className="p-2 w-full border border-gray-300 rounded-xl "
        
        />
        <button><BiSearchAlt2 size={25} className="-ml-9"/></button>
        </div>
      </div>
    </div>

    <div className="mt-8">
      {filteredPlaces.map((item) => (
          <div key={item.id} className="flex flex-row border border-gray-200 p-3 justify-around bg-#E0E0E0">
            <h1 className="font-serif ">{item.city}</h1>
            <p className="">{item.Date}</p>
            <div className="flex flex-row hover:text-red-500 cursor-pointer">
              <Link to={`/next-component/${item.city}`}>
                <button className="font-extrabold ">{"Book Now >"}</button>
              </Link>
            </div>
          </div>
        ))}
    </div>

    <div className="bg-gray-200 flex flex-col items-center justify-start w-full mt-[56px] mx-auto p-11 md:px-5">
          <div className="flex flex-col gap-[23px] items-center justify-start mb-[5px] w-[48%] md:w-full">
            <text
              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-600"
              size="txtOpenSansRomanRegular28"
            >
              Not found the City you were looking for 😕?
            </text>
            <div
              className=" flex flex-col h-14 items-end justify-start p-[13px] shadow-md"
            >
              <p
                className="cursor-pointer font-sans text-base font-normal leading-6 border-1  rounded-md"
              >
                Contact Sales ☎️
              </p>
            </div>
          </div>
        </div>

  </div>
  )
}

export default City