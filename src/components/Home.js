import React from 'react';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'
import banner from '../assets/banner.jpg';
import banner1 from '../assets/banner4.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import dresses from '../assets/Dresses.jpg';
import Electronics from '../assets/electronics.jpg';
import health from '../assets/health.jpg';
import Product from './Product'
import 'swiper/css';
import SwiperCore,{ Navigation, Pagination ,Autoplay } from 'swiper/core';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Oneimage from './Oneimage'
import Categories from './Categories'
import headp from '../assets/headp.jpg'
import keyboard from '../assets/keyword.jpg'
import mouse from '../assets/mouse.jpg'
import chair from '../assets/chair.jpg'
import ads from '../assets/ads.jpg'
import adss5 from '../assets/advertise.png'
import notebook from '../assets/notebook.jpg'
import acces from '../assets/acess.jpg'
import foodstorage from '../assets/foodstorage.jpg'
import Pensils from '../assets/pensile.jpg'
import deal from '../assets/deal.jpg'
import promo from '../assets/promo.jpg'
import './Oneimage.css'
import Bigproduct from './Bigproduct'
import sl1 from '../assets/shirt1.jpg'
import sl2 from '../assets/shirt2.jpg'
import sl3 from '../assets/shirt3.jpg'
import sl4 from '../assets/shirt4.jpg'
import sl5 from '../assets/shirt5.jpg'
import sl6 from '../assets/shirt6.jpg'
import sl7 from '../assets/shirt7.jpg'
import sl8 from '../assets/shirt8.jpg'
import sl9 from '../assets/shirt9.jpg'
import sl10 from '../assets/shirt10.jpg'
import sl11 from '../assets/shirt11.jpg'
import sl12 from '../assets/shirt12.jpg'
import sl13 from '../assets/shirt14.jpg'
import phone1 from '../assets/phone1.jpg'
import phone2 from '../assets/phone2.jpg'
import phone3 from '../assets/phone3.jpg'
import phone4 from '../assets/phone4.jpg'
import phone5 from '../assets/phone5.jpg'
import phone6 from '../assets/phone6.jpg'
import phone7 from '../assets/phone7.jpg'
import phone8 from '../assets/phone8.jpg'
import phone9 from '../assets/phone9.jpg'
import phone10 from '../assets/phone10.jpg'
import phone12 from '../assets/phone12.jpg'
import phone13 from '../assets/phone13.jpg'
import shop from '../assets/shop.jpg'
import gym from '../assets/gym.jpg'
import music from '../assets/music.jpg'
import labtop from '../assets/labtop.jpg'
import toy1 from '../assets/toy1.jpg'
import toy2 from '../assets/toy2.jpg'
import toy3 from '../assets/toy3.jpg'
import toy4 from '../assets/toy4.jpg'
import toy5 from '../assets/toy5.jpg'
import toy6 from '../assets/toy6.jpg'
import toy7 from '../assets/toy7.jpg'
import toy8 from '../assets/toy8.jpg'
import toy9 from '../assets/toy9.jpg'
import toy10 from '../assets/toy10.jpg'
import toy11 from '../assets/toy11.jpg'
import toy13 from '../assets/toy13.jpg'
// import {Autoplay} from 'swiper'

SwiperCore.use([Navigation,Pagination,Autoplay])

const Home = () => {
  return (

    <div className="home">
     <Swiper
      spaceBetween={10}
      slidesPerView={1}
     navigation
     autoplay
     loop

    >
      <SwiperSlide>  <img className="banner" src={banner} alt='banner'/></SwiperSlide>
      <SwiperSlide>  <img className="banner" src={banner1} alt='banner'/></SwiperSlide>
      <SwiperSlide>  <img className="banner" src={banner2} alt='banner'/></SwiperSlide>
      <SwiperSlide>  <img className="banner" src={banner3} alt='banner'/></SwiperSlide>

    </Swiper>
<br/>
        {/* <img className="banner" src={banner} alt='banner'/> */}
        {/* product */}
        <div className='homeRow'>

       
       <Oneimage 
        title={'Dresses'}
        image={dresses}
        path={'/Electeric'}
        />
        <Categories 
        title={'Gaming accessories'}
        image1={headp}
        desc1={'Headsets'}
        image2={keyboard}
        desc2={'Keyword'}
        image3={mouse}
        desc3={'Computer mice'}
        image4={chair}
        desc4={'chair'}

        />

        <Oneimage 
        title={'Electronics'}
        image={Electronics}
            path={'/Electeric'}
        />
        <div className="ads">
        <img src={ads} alt="" />
        <img  style={{ 'width': '90%'}} src={adss5} alt="" />
        </div>
        <Oneimage 
        title={'Health & Personal Care'}
        image={health}
        path={'/Electeric'}
        />
        <Categories 
        title={'Back to school'}
        image1={notebook}
        desc1={'Notebooks'}
        image2={acces}
        desc2={'Accessories'}
        image3={foodstorage}
        desc3={'Food storage'}
        image4={Pensils}
        desc4={'Pensils'}

        />
        <Oneimage 
        title={'Deals & Promotion'}
        image={promo}
            path={'/Electeric'}
        />
        {/* deal */}
        <div className='oneimage'>
        <h2 className="title">Deal of the Day</h2>
        <img className='image' src={deal} alt=""/>
        <div className="discount">
                <p>up to 40% off</p>
                <span>Top deal</span>
        </div>

        <Link to="/Electeric"> see all deals</Link>
    </div>
    <Bigproduct
    title={"Men's Dress Shirts under $30"}
    sld1={sl1}
    sld2={sl2}
    sld3={sl3}
    sld4={sl4}
    sld5={sl5}
    sld6={sl6}
    sld7={sl7}
    sld8={sl8}
    sld9={sl9}
    sld10={sl10}
    sld11={sl11}
    sld12={sl12}
    sld13={sl13}
    />
    <Bigproduct
    title={"Popular products in Wireless internationally"}
    sld1={phone1}
    sld2={phone2}
    sld3={phone3}
    sld4={phone4}
    sld5={phone5}
    sld6={phone6}
    sld7={phone7}
    sld8={phone8}
    sld9={phone9}
    sld10={phone10}
    sld11={phone12}
    sld12={phone13}
    sld13={phone5}
    />
       <Oneimage 
        title={'Shop backpacks'}
        image={shop}
        path={'./Electeric'}
        />
       <Oneimage 
        title={'Shop Laptops & Tablets'}
        image={labtop}
        path='./Electeric'
        />
       <Oneimage 
        title={'Create with strip lights'}
        image={music}
        path={'./Electeric'}
        />
       <Oneimage 
        title={'For your Fitness Needs'}
        image={gym}
            path={'./Electeric'}
        />
            <Bigproduct
    title={"Stuffed Animals & Toys under $10"}
    sld1={toy1}
    sld2={toy2}
    sld3={toy3}
    sld4={toy4}
    sld5={toy5}
    sld6={toy6}
    sld7={toy7}
    sld8={toy8}
    sld9={toy9}
    sld10={toy10}
    sld11={toy11}
    sld13={toy13}
    />
        </div>
         
    </div>
    
    )
}

export default Home
