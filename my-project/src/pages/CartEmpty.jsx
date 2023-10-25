import { useNavigate } from "react-router-dom"
import Logo from "../assets/image/Logo.png"
import Emptycart from "../assets/image/cart2.png"


const CartEmpty = () => {
  
   const navigate = useNavigate();
  function goBack(){
      navigate('/city')
  }
  
  return (
    <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto ">
       <div className="w-full h-[90px]  overflow-y-hidden">
      <div className=" w-full h-[90px] top-0 left-0 bg-[#dfdfdf] mb-12 flex items-center justify-center" >
          <img src={Logo} alt="logois here" />
          <div className="flex flex-row ">
            <button onClick={goBack} className="fixed  w-[181px] h-[60px] top-3 right-9  rounded-[34px] shadow-[0px_4px_4px_#00000040] bg-[#F5BA48]">City Select </button>
         </div>
      </div>
    </div>

       <div className="font-semibold mt-[78px] text-4xl sm:text-[32px] md:text-[34px] text-gray-800">
          Shopping Bag - Checkout 🛒
        </div>

        <div className="h-[297px] mt-9 md:px-5 relative w-[21%] ">
          <img
            className="h-[265px] mb-[-10.02px] mx-auto object-cover w-[237px] z-[1]"
            src={Emptycart}
            alt="imageFive"
          />
          <p className="font-semibold mt-18px mx-auto text-2xl md:text-[22px] text-center text-gray-500_02 sm:text-xl w-full">
            Add Items to cart to get Started!
          </p>
        </div>

        <footer className="bg-gray-100_01 border-gray-300_54 border-solid border-y flex items-center justify-center mt-[90px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-center ml-[110px] mr-[131px] my-[46px] w-[82%] h-">
            <text className="md:ml-[0] ml-[3px] sm:text-[17px] md:text-[19px] text-[21px] text-pink-500">
              We levy a 50% Advance on all our Stall sales. The rest 50% shall be credited post the event.
            </text>
            <div className="flex flex-col font-inter items-center justify-start mt-6 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                  <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-start">
                      <text className="font-medium sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_01">
                        Subtotal
                      </text>
                      <text className="font-medium sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_01">
                        Tax
                      </text>
                    </div>
                    <div className="flex flex-col items-end justify-start">
                      <text className="font-medium sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_01 text-right">
                        ₹ 0
                      </text>
                      <text className="font-medium sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_01 text-right">
                        ₹ 32,000.00
                      </text>
                    </div>
                  </div>
                  <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                    <text className="font-semibold text-2xl md:text-[22px] text-gray-900 sm:text-xl">TOTAL</text>
                    <text className="font-semibold text-2xl md:text-[22px] text-gray-900 text-right sm:text-xl">
                      <span className="text-gray-900 font-inter font-normal">₹</span>
                      <span className="text-gray-900 font-inter">0</span>
                    </text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex font-opensans h-[57px] md:h-[68px] justify-end md:ml-[0] ml-[366px] mt-[11px] relative w-[32%]">
              <button
                className="absolute cursor-pointer bg-gray-600 text-white font-bold h-full inset-[0] justify-center leading-[normal] m-auto min-w-[330px] rounded-[28px] text-2xl md:text-[22px] text-center sm:text-xl"
                shape="round"
                size="xs"
              >
                Pay Now
              </button>
            </div>
          </div>
        </footer>
    </div>


  )
}

export default CartEmpty
