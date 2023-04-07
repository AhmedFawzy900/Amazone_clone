import React from 'react'
import { Link } from 'react-router-dom';
import './Bigproduct.css'
import 'swiper/css';
import SwiperCore,{ Navigation, Pagination ,Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Bigproduct({title,sld1,sld2,sld3,sld4,sld5,sld6,sld7,sld8,sld9,sld10,sld11,sld12,sld13}) {
    SwiperCore.use([Navigation,Pagination,Autoplay])
  return (
    <div className="bigproduct">
        <div className="tit">
            <h2>{title} </h2>
            <Link to="/Electeric">Shop now</Link>
        </div>
    <div className='swip'>
     <Swiper
      spaceBetween={10}
      slidesPerView={6}
      navigation
      Pagination
    >
      <SwiperSlide>  <img src={sld1} alt=''/></SwiperSlide>
      <SwiperSlide>  <img  src={sld2} alt=''/></SwiperSlide>
      <SwiperSlide>  <img  src={sld3} alt=''/></SwiperSlide>
      <SwiperSlide>  <img  src={sld4} alt=''/></SwiperSlide>
      <SwiperSlide>  <img  src={sld5} alt=''/></SwiperSlide>
      <SwiperSlide>  <img  src={sld6} alt=''/></SwiperSlide>
      <SwiperSlide>  <img  src={sld7} alt=''/></SwiperSlide>
      <SwiperSlide>  <img  src={sld8} alt=''/></SwiperSlide>
      <SwiperSlide>  <img  src={sld9} alt=''/></SwiperSlide>
      <SwiperSlide>  <img  src={sld10} alt=''/></SwiperSlide>
      <SwiperSlide>  <img  src={sld11} alt=''/></SwiperSlide>
      <SwiperSlide>  <img  src={sld12} alt=''/></SwiperSlide>
      <SwiperSlide>  <img  src={sld13} alt=''/></SwiperSlide>

    </Swiper>
    </div>
    </div>
  )
}

export default Bigproduct
