import React, { useEffect,Component } from 'react';
import { motion } from "framer-motion";
import AOS from 'aos';
import logo from '../../img/logo.png';
import 'aos/dist/aos.css';
import cashondelivery from '../../img/cashondelivery.png';
import FastDelivery from '../../img/FastDelivery.jpg';
import EasyReturns from '../../img/EasyReturns.png';
import AmazingOffers from '../../img/AmazingOffers.jpg';
import video1 from '../../img/video.mp4'



 function Footer() {
   useEffect(()=>{
  AOS.init({duration:2000});
  },[]);
        return (
<div>  

      <div className="row video bg-info d-flex justify-content-center">
         <div className="col-md-6">

          <div data-aos="zoom-in" className="embed-responsive embed-responsive-16by9 mb-4">
           <iframe className="embed-responsive-item" width="200" height="400" src={video1}
              allowfullscreen></iframe>
          </div>
          <hr data-aos="zoom-in" delay="2000" duration="4000" style={{border:"2px solid black"}}/>
         </div>
      

      </div>
     
    
  <div className="container footer1">
    <div className="row d-flex justify-content-center"> 
      <div  className="col-md-2 mr-3 footer" data-aos-delay="500"  data-aos="zoom-in-right" >
         <img className="footerimg1" src={cashondelivery} alt=""/>
         <h4 className="h4_1">Cash On Delivery</h4>
      </div>
      <div  data-aos="zoom-in" className="col-md-2 mr-3 footer" data-aos-delay="300">
         <img className="footerimg2" src={FastDelivery} alt=""/>
         <h4 className="h4_2">Fast Delivery</h4>
      </div>
      <div  data-aos="zoom-in"  className="col-md-2 mr-3 footer" data-aos-delay="300">
         <img className="footerimg3" src={EasyReturns} alt=""/>
          <h4 className="h4_3">Easy Returns</h4>
      </div>
      <div data-aos="zoom-in-left"  data-aos-delay="500" className="col-md-2 footer">
        <img className="footerimg4" src={AmazingOffers} alt=""/>
        <h4 className="h4_4">Amazing Offers</h4>
      </div>
     </div>
  </div>

<footer className="page-footer font-small unique-color-dark">

  <div>
    <div data-aos="flip-down" className="container col-md-12 col-sm-12 bg-dark">

      
      <div className="row py-4 d-flex align-items-center">

        
        <div className="col-md-6 col-lg-5 text-center text-white text-md-left mb-4 mb-md-0">
          <h6 className="mb-0">Get <strong>CONNECT With US</strong> on social networks!</h6>
        </div>
        

        
        <div className="col-md-6 col-lg-7 text-center text-md-right">

          
          <a className="fb-ic icon">
            <i className="fab fa-facebook-f text-info mr-4"> </i>
          </a>
         
          <a className="tw-ic icon">
            <i className="fab fa-twitter text-info mr-4"> </i>
          </a>
          
          <a className="gplus-ic icon">
            <i className="fab fa-google-plus-g text-info mr-4"> </i>
          </a>
         
          <a className="li-ic icon ">
            <i className="fab fa-linkedin-in text-info mr-4"> </i>
          </a>
         
          <a className="ins-ic icon">
            <i className="fab fa-instagram text-info"> </i>
          </a>

        </div>
        

      </div>
      

    </div>
  </div>


  <div data-aos="zoom-in" className="container col-md-12 col-sm-12 bg-info text-md-left ">

    
    <div className="row">

      
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto text-white">


        <h6 className="text-uppercase text-dark text-center mt-2 font-weight-bold">
          {/*<img className="logo_footer" src={logo}/>*/}WebCart</h6>
        <hr style={{ border:"2px solid black",width:'65%'}}/>
        <p className="text-center">WebCart is the place to start your business with us and connect with your customers.
        Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends,
         family and loved-ones and avail our amazing offers for special occasions.</p>

      </div>
      
      <div className="col-md-2 col-lg-2 col-xl-2 text-center mx-auto mt-2 text-white">

        
        <h6 className="text-uppercase text-dark  font-weight-bold">Get To Know Us</h6>
       
        <p>
          <a >About Us</a>
        </p>
        <p>
          <a >Blog</a>
        </p>
        <p>
          <a >Careers</a>
        </p>
        <p>
          <a >Privacy Policy</a>
        </p>

      </div>
      
      <div className="col-md-3 col-lg-2 col-xl-2 text-center mx-auto mt-2 text-white">

        
        <h6 className="text-uppercase text-dark font-weight-bold">Get Start Business With Us</h6>
        
        <p>
          <a >Start Selling Your Porducts</a>
        </p>
        
        <p>
          <a >Get Advertise your Products</a>
        </p>
        <p>
          <a >Help</a>
        </p>
           <p>
          <a >Home</a>
        </p>

      </div>
     
      <div className="col-md-4 col-lg-3 col-xl-3 text-center mx-auto mb-md-0 mt-2">

        
        <h6 className="text-uppercase font-weight-bold">Contact</h6>
        
        <p>
          <i className="fas fa-home mr-3"></i>SVNIT,Surat</p>
        <p>
          <i className="fas fa-envelope mr-3"></i>webpowershell@gmail.com</p>
        <p>
          <i className="fas fa-phone mr-3"></i> +91 6124356500</p>
        <p>
          <i className="fas fa-print mr-3"></i> +91 6023456900</p>

      </div>
     

    </div>
    

  </div>
  
 
 
  <div className="footer-copyright bg-dark text-white text-center">
  <div className="row d-flex justify-content-center">
  <div className="col-md-3 ">Copyright© 2020 WebCart
  </div>|| 
  <div  className="col-md-3 "><a>T&C</a> 
  </div>|| 
  <div  className="col-md-3 ">All Rights Reserved 
  </div>
  <div  className="col-md-3  "><bold>Powered by  WebPowerShell</bold></div>
   </div> 
  </div>
  

</footer>

</div>  

        )
}

export default Footer;