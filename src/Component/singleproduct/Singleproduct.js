import {React,useState} from 'react'
import Navbar from '../navbar/Navbar'
import Newslater from '../newslater/Newslater'
import "./Singleproduct.css"

const Singleproduct = () => {

    const[cartitem22 , setcartitem22] = useState(0)

    const clickcart12 = ()=>{
        setcartitem22(cartitem22+1)
    }
    const clickcart11 =()=>{
        setcartitem22 (cartitem22>0 ? cartitem22-1 : cartitem22)
    }
  return (
    <div className='singleproduct' >
        <Navbar/>
        <div className="singleproductwrap">
        <div className="singleproleft">

            <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" className="singleclothimg" />

        </div>


        <div className="singleproright">
            <span className="denim">Denim jeens</span>
            <p className="denimdesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia consequuntur quasi adipisci asperiores nulla, quidem ducimus omnis nam id ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur nostrum sint quia sunt repellat. </p>

            <span className="price">$ 20.00</span>
          
            <div className="leftsingleceter">
            <div className="color">
                <span className="clr">Color </span>
                <span className="cirle cr1"></span>
                <span className="cirle cr2"></span>
                <span className="cirle cr3"></span>
            </div>

            <select class="sizebtn colorbtn" >
             <option className='filsze' selected>Size</option>
             <option  className='filsze'  value="1">S</option>
             <option className='filsze'  value="2">M</option>
            <option className='filsze'  value="3">L</option>
            <option className='filsze'  value="3">XL</option>
             </select>
            </div>

            <div className="divbottomsingle">
                <div className="qntity">
                    
                    {/* <i class="fa-solid fa-minus minum "></i>
                    <sapn className="number">1</sapn>
                  
                    <i class="fa-solid fa-plus plus"></i> */}
                     <i onClick={()=>clickcart11()} class="fa-solid fa-minus minum1 "></i>
                    <sapn className="number1">{cartitem22}</sapn>
                  
                    <i onClick={()=>clickcart12()} class="fa-solid fa-plus plus1"></i>
                </div>

                <sapn className="addcrt">
                    Add To Cart
                </sapn>
            </div>
        </div>
        </div>
      
      <Newslater/>
    </div>
  )
}

export default Singleproduct
