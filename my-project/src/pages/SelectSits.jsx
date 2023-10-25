import { useState } from "react"
import Logo from "../assets/image/Logo.png"
import { useNavigate, useParams } from "react-router-dom"
import background from "../assets/image/Vector.png"

const SelectSits = () => {
  

  const {cityName} = useParams()
  console.log(cityName)

  const navigate = useNavigate();
  const [totalPrice , setTotalPrice] = useState(0);

    const [ColorCode , setColorCode]= useState([
        {
            id:1,
            price:55000,
            Sp_Mt:"32 Sq.Mt",
            color:"00B33C",
            count:0
        },
        {
            id:2,
            price:35000,
            Sp_Mt:"24 Sq.Mt",
            color:"FF6600",
            count:0
        },
        {
            id:3,
            price:25000,
            Sp_Mt:"18 Sq.Mt",
            color:"808080",
            count:0
        },

    ]);

    

    const addCount = (item  ) =>{
        const updatedColorCode = ColorCode.map((cc) =>
        cc.id === item.id ? { ...cc, count: cc.count + 1 } : cc
      );
      setColorCode(updatedColorCode);
      setTotalPrice(totalPrice + item.price)
    }

    const subCount = (item) =>{
        const updatedColorCode = ColorCode.map((cc) =>
        cc.id === item.id ? { ...cc, count: cc.count - 1 } : cc
        );

      //check if any value is less then zero then mark as zero  
      updatedColorCode.forEach((cc) => {
        if (cc.count < 0) {
          cc.count = 0;
        }
      });
      setColorCode(updatedColorCode);
      setTotalPrice(totalPrice - item.price)
      
    }



    function goBack(e){
      e.preventDefault();
      console.log("Change Page")
      navigate("/city")
    }

    console.log(ColorCode.count)

    const colorClassMapping = {
      "00B33C": "bg-green-500 text-green-500",
      "FF6600": "bg-orange-500 text-orange-500",
      "808080": "bg-gray-500 text-gray-500",
    };

    
    const navigateToCart = () =>{
      const selectedColorCounts = ColorCode.map((item) => ({
        id: item.id,
        count: item.count,
      }));

      if(totalPrice > 0){
        const state = {
          totalPrice ,
          counts : selectedColorCounts,
          cityName
        }
        navigate('/cart',{state})
      }else{
        navigate('/cartemty')
      }
    }
    console.log("Total" , totalPrice)
    return (
    <>
    <div>
    <div className="w-full h-[90px]  overflow-y-hidden">
      <div className=" w-full h-[90px] top-0 left-0 bg-[#dfdfdf] mb-12 flex items-center justify-center" >
          <img src={Logo} alt="logois here" />
          <div className="flex flex-row  ">   
            <button onClick={navigateToCart} className="fixed  w-[181px] h-[60px] top-3  right-7  rounded-[34px] shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(245,72,116)_0%,rgb(236,0,140)_100%)] ">Go to Cart</button>
            <button onClick={goBack} className="fixed  w-[181px] h-[60px] top-3 right-[240px] rounded-[34px] shadow-[0px_4px_4px_#00000040] bg-[#F5BA48]">City Select </button>
         </div>
        </div>
      </div>

    <div className="w-full h-[375px]">
        <div className="w-full h-[375px] top-0 left-0 bg-[#eae8e9] flex items-center justify-center">
            <img className="w-[676px] h-[369px] top-0 left-0 " alt="vector" src={background} />
        </div>
    </div>
    </div>

    <div className="w-full h-[50px] bg-[#dddddd] flex items-center justify-around border border-gray-300">
         <h1 className="">Color Code</h1>
         <div className="flex flex-row">
            <h1 className="text-[#00B33C]">H1 - </h1>
            <p className="w-[22px] h-[24px] ml-1 left-[990px] bg-[#00B33C] rounded-full"></p>
            <h1 className="text-[#FF6600] ml-6">H2 - </h1>
            <p className="w-[22px] h-[24px] ml-1 left-[990px] bg-[#FF6600] rounded-full"></p>
            <h1 className="text-[#808080] ml-6">H3 - </h1>
            <p className="w-[22px] h-[24px] ml-2 left-[990px] bg-[#808080] rounded-full"></p>
         </div>
    </div>

    <div className="w-full h-[242px] flex flex-col p-4 border border-[#D1D1D1]-1">
  {
    ColorCode.map((item) => (
      <div key={item.id} className="w-full flex flex-row justify-around">
        <div className={`w-[22px] h-[24px] ml-1 left-[990px] ${colorClassMapping[item.color]} rounded-full `}></div>
        <h1 className={`mt-[3px] text-[17px] mb-4  text-${colorClassMapping[item.color]}`}>{item.price}</h1>
        <p className={`text-${colorClassMapping[item.color]}`}>{item.Sp_Mt}</p>

        {/* increment decrement   */}
        <div className="flex flex-row justify-end items-center -mt-[30px] ">
          <button className="text-2xl"  onClick={() => addCount(item)}>+</button>
          <p className="p-2 mt-1 text-xl">{item.count}</p>
          <button className="text-2xl" onClick={() => subCount(item)}>-</button>
        </div>
      </div>
    ))
  }
     

    <button onClick={goBack} className="font-semibold text-[19px] text-gray-600 mt-5"> {" <Back to City"}</button>
 
</div>

    </>
  )
}

export default SelectSits
