import { useLocation } from "react-router-dom";
import Logo from "../assets/image/Logo.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate()
  const {state} = useLocation();
  const {totalPrice , counts , cityName} = state || []
  const selectedColorCounts = counts || [];

  console.log("selectedColorCode" , selectedColorCounts)
  
  console.log("CART =>" , totalPrice , counts , cityName)

  const cost = [
    {
      id:1,
      name:"Subtotal",
      cost:totalPrice,
    },
    {
      id:2,
      name:"Tax",
      cost:"32000"
    },
    
  ]

  function goBack(){
    navigate('/city')
  }

  const loadScript = (src) =>{
      return new Promise((resolve) =>{

          const script = document.createElement('script')
          script.src = src

          script.onload = () =>{
            resolve(true)
          }

          script.onerror = () =>{
            resolve(false)
          }
          document.body.appendChild(script)

      })
  }

  const displayRazerpay =async (amount) =>{
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

      if(!res){
        alert("You are offline.... Failed to load Razorpay SDK")
      }

      const option = {
        key:"rzp_test_uWw5IiCwOmJ7KJ",
        currency :"INR",
        amount:amount * 100,
        name:"raj",
        description:"Thanks for purchasing",
        imgage:{Logo},

        handler : function (response){
          alert(response.razorpay_payment_id)
          alert("Payment Successfully")
        }


      };

      const paymentObject = new window.Razorpay(option)
      paymentObject.open();

  }

  return (
    <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto overflow-hidden">
     <div className="w-full h-[90px]  overflow-y-hidden">
      <div className=" w-full h-[90px] top-0 left-0 bg-[#dfdfdf] mb-12 flex items-center justify-center" >
          <img src={Logo} alt="logois here" />
          <div className="flex flex-row ">
            <button onClick={goBack} className="fixed  w-[181px] h-[60px] top-3 right-9  rounded-[34px] shadow-[0px_4px_4px_#00000040] bg-[#F5BA48]">City Select </button>
         </div>
      </div>
    </div>
      <div className="w-full h-[200px]">
        <div className="flex flex-col font-opensans items-center justify-start mx-auto">
          <p className="font-semibold mt-[78px] text-4xl sm:text-[32px] md:text-[34px] text-gray-800">
             Shopping Bag - Checkout 🛒
          </p>
        </div>
      </div>
        <div className="w-full h-[266px] mt-[px]  ">
          <div className="flex items-center space-x-3 font-semibold font-open-sans ">
            <p className="w-[21px] h-[21px] rounded-full ml-[101px] bg-[#00B33C] "></p>
            <p className="text-green-400">25000 V</p>
          </div>
          <div className="ml-[132px] mt-[5px]">
                <p className="font-semibold font-serif">{cityName} || Quantity- {counts[0].count} | {"Stall Type Details"}</p>
                <p className="text-2xl "><span className="font-semibold ">Terms and Conditions -</span> Select your favorite social network and share our icons with your contacts or friend. If you don t have these social network </p>
          </div>
          <hr className="m-2"></hr>
          <div className="flex items-center space-x-3 font-semibold font-open-sans ">
            <p className="w-[21px] h-[21px] rounded-full ml-[101px] bg-[#FF6600] "></p>
            <p className="text-[#FF6600]">25000 V</p>
          </div>
          <div className="ml-[132px] mt-[5px]">
                <p className="font-semibold font-serif">{cityName} || Quantity- {counts[1].count} | {"Stall Type Details"}</p>
                <p className="text-2xl "><span className="font-semibold ">Terms and Conditions -</span> Select your favorite social network and share our icons with your contacts or friend. If you don t have these social network </p>
          </div>
          <hr className="m-2"></hr>
          <div className="flex items-center space-x-3 font-semibold font-open-sans ">
            <p className="w-[21px] h-[21px] rounded-full ml-[101px] bg-[#8C8C8C] "></p>
            <p className="text-[#8C8C8C]">25000 V</p>
          </div>
          <div className="ml-[132px] mt-[5px]">
                <p className="font-semibold font-serif">{cityName} || Quantity- {counts[2].count} | {"Stall Type Details"}</p>
                <p className="text-xl "><span className="font-semibold ">Terms and Conditions -</span> Select your favorite social network and share our icons with your contacts or friend. If you don t have these social network </p>
          </div>
        </div>
        

      <div className="w-full h-[320px] mt-[50px]  bg-[#E0E0E0]">
          <div className="text-center">
            <p className="text-[#EB008B] text-2xl font-serif"><span>.</span> We leay a 50% Advance on all our Stall sales. The rest 50% shall be credited post the event.</p>
          </div>

          <div className="mt-[10px]">
              {
                cost.map((item) =>(
                    <div key={item.id} className="flex items-center justify-between ">
                      <p className="mt-[2px] ml-[120px] text-2xl ">{item.name}</p>
                      <p className="mr-[120px] text-2xl">₹ {item.cost}</p>
                    </div>
                )
                )
              }
              <div className="flex items-center justify-between">
                <p className="mt-[10px] ml-[120px] text-3xl">Total</p>
                <p className="mr-[120px] text-3xl mt-[10px]">₹ {totalPrice+32000}</p>
              </div>
          </div>

          <div className="flex font-opensans h-[57px] ml-[396px] mt-[11px] relative w-[54%]">
              <button
                onClick={ () => displayRazerpay(totalPrice)}
                className="cursor-pointer items-center justify-center bg-[#F54874] text-white font-bold h-full inset-[0] leading-[normal] m-auto min-w-[330px] rounded-[28px] text-2xl md:text-[22px] text-center sm:text-xl"
                shape="round"
                size="xs"


              >
                Pay Now
              </button>
            </div>
      </div>
      
    </div>
  );
};

export default Cart;