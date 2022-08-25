import React from 'react'
import { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Newslater from '../newslater/Newslater'
import "./Shoppingcart.css"

const Shoppingcart = () => {
// let cartnum=0;
    const[cartitem , setcartitem] = useState(0)

    const clickcart = ()=>{
        setcartitem(cartitem+1)
    }
    const clickcart2 =()=>{
        setcartitem (cartitem>0 ? cartitem-1 : cartitem)
    }
    const[cartitem2 , setcartitem2] = useState(0)

    const clickcart4 = ()=>{
        setcartitem2(cartitem2+1)
    }
    const clickcart3 =()=>{
        setcartitem2 (cartitem2>0 ? cartitem2-1 : cartitem2)
    }

  return (
    <div className='shoppingcart'>
        <Navbar/>

     <div className="shoppingcartwrap">

        <div className="cartshophead">
            <span className="bag">YOUR BAG</span>
        </div>

        <div className="Shoppingblog">
            <div className="contshoping">
            <span className="contshoping1">Continue shoping</span>
            </div>

            <div className="centershop">
                <span className="sblog">Shopping Blog(2)</span>
                <span className="wish">Your Wishlist(0)</span>
            </div>

            <div className="checkout">
                <span className="contshoping1">Checkout Now</span> </div>
        </div>
    

      <div className="shoppingbutton">
        <div className="bottumshopingleft">
            <div className="sbltop">
                <div className="sbltopleft">
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" className="shoeimg" />
                    
                </div>
                <div className="sbltopcenter">
                    <div className="abltt1">
                    <span className="ppr">Product : </span>
                    <sapn className="shoebname">JESSIE THUNDER SHOES</sapn>
                    </div>
                    <div className="abltt2">
                    <span className="idd ppr">id : </span>
                    <sapn className="idname shoebname">79824582C</sapn>
                    </div>

                    <div className="ccl"></div>

                    <div className="abltt3">
                    <span className="showsize ppr">size : </span>
                    <sapn className="idname shoebname">37.5</sapn>
                    </div>

                   

                </div>
                <div className="sbltopright">
                <div className="qntity1">
                    
                    <i onClick={()=>clickcart2()} class="fa-solid fa-minus minum1 "></i>
                    <sapn className="number1">{cartitem}</sapn>
                  
                    <i onClick={()=>clickcart()} class="fa-solid fa-plus plus1"></i>
                </div>

                <div className="prc">
                    <span className="rate">$ 20.00</span>
                </div>


                </div>
            </div>

            <div className="sbltop">
                <div className="sbltopleft">
                    <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" className="shoeimg" />
                    
                </div>
                <div className="sbltopcenter">
                    <div className="abltt1">
                    <span className="ppr">Product : </span>
                    <sapn className="shoebname">JESSIE THUNDER SHOES</sapn>
                    </div>
                    <div className="abltt2">
                    <span className="idd ppr">id : </span>
                    <sapn className="idname shoebname">79824582C</sapn>
                    </div>

                    <div className="ccl"></div>

                    <div className="abltt3">
                    <span className="showsize ppr">size : </span>
                    <sapn className="idname shoebname">37.5</sapn>
                    </div>

                   

                </div>
                <div className="sbltopright">
                <div className="qntity1">
                    
                    {/* <i class="fa-solid fa-minus minum1 "></i>
                    <sapn className="number1">1</sapn>
                  
                    <i class="fa-solid fa-plus plus1"></i> */}
                       <i onClick={()=>clickcart3()} class="fa-solid fa-minus minum1 "></i>
                    <sapn className="number1">{cartitem2}</sapn>
                  
                    <i onClick={()=>clickcart4()} class="fa-solid fa-plus plus1"></i>
                </div>

                <div className="prc">
                    <span className="rate">$ 20.00</span>
                </div>


                </div>
            </div>


            {/* <div className="sblbuttom"></div> */}
            
        </div>
        <div className="bottumshopingright">

            <sapn className="ordr">ORDER SUMMARY</sapn>

            <div className="subtotal">
                <span className="sub">Subtotal</span>
                <span className="total">$ 80.00</span>
            </div>
            <div className="subtotal">
                <span className="sub">Estimating shipping</span>
                <span className="total">$ 5.00</span>
            </div>
            <div className="subtotal">
                <span className="sub">Shipping Discount</span>
                <span className="total">$ 8.00</span>
            </div>

            <div className="subtotal">
                <span className="sub">Total</span>
                <span className="total">$ 93.00</span>
            </div>

            <div className="chekoutnow2">
                <div className="span now3">CHECKOUT NOW</div>
            </div>  

        </div>

      </div>
      </div>

<Newslater/>
    </div>
  )
}

export default Shoppingcart
