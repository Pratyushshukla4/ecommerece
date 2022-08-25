import React from 'react'
import "./Newslater.scss"

const Newslater = () => {
  return (
    <div className='news'>
        <div className="newslater">
            <div className="newslaterrow1">
                <div className="newsrowwrapper">

                  <h1 className="newshead">Newslatter</h1>
                  <span className="newsdesc">Get timely updates from your favourite products.</span>
                  <div className="inputnewsdiv">
                  <input placeholder='your email' type="text" className="newsinput" />
                  <span className="inputspan">
            
                  <i class="fa-solid fa-paper-plane gg"></i>
                 
                  </span>
                  </div>
                  </div>
            </div>
            <div className="newslaterrow2">

                <div className="nleft n">
                    <div className="n1left n1">
                        <h1>Lama</h1>
                    </div>
                    <div className="n2left n1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora debitis quasi nostrum molestiae suscipit quas quaerat vitae sapiente eveniet dignissimos corporis, obcaecati mollitia, dolore quia.</p>
                    </div>
                    <div className="n3left n1">
                    <i class="fa-brands fa-instagram in"></i>
                    <i class="fa-brands fa-facebook in"></i>
                    <i class="fa-brands fa-twitter in"></i>
                    <i class="fa-brands fa-linkedin in"></i>
                    </div>

                </div>
                <div className="ncenter n">
                    <div className="n1center"><h2>Usefull links</h2></div>
                    <div className="n2center">
                        <div className="centerleft">
                            <span className="k">Home</span>
                            <span className="k">Man Fashion</span>
                            <span className="k">Accessries</span>
                            <span className="k">Order Tracing</span>
                            <span className="k">Home</span>
                        </div>
                        <div className="centerright">
                        <span className="k">Cart</span>
                        <span className="k">Women Fashion</span>
                        <span className="k">My Acount</span>
                        <span className="k">Wishlist</span>
                        <span className="k">Home</span>

                        </div>

                    </div>

                </div>
                <div className="nright n">
                    <div className="righttop">
                        <h2>Contact</h2>
                    </div>
                    <div className="rightbuttom">
                        
                        <div className="righttop2 r1">
                        <i class="fa-solid fa-location-dot"></i>
                        <span className="num">Sector 62, Noida</span>
                        </div>

                        <div className="righttop3 r1">
                        <i class="fa-solid fa-phone"></i>
                        <span className="num">+91 9987645123</span>
                        </div>

                        <div className="righttop4 r1">
                        <i class="fa-solid fa-envelope"></i>
                      
                        <span className="num">contact@gmail.com</span>
                        </div>
                    

                    <div className="righttop1 r1">
                            
                        </div>
                        </div>
                </div>


            </div>
        </div>
      
    </div>
  )
}

export default Newslater
