import React from 'react'
import './Electeric.css'
import lab1 from '../assets/lab1.jpg'
import lab2 from '../assets/lab2.jpg'
import lab3 from '../assets/lab4.jpg'
import lab4 from '../assets/lab5.jpg'
import lab5 from '../assets/lab6.jpg'
import lab6 from '../assets/lab7.jpg'
import lab7 from '../assets/lab8.jpg'
import lab8 from '../assets/lab9.jpg'
import lab9 from '../assets/lab10.jpg'
import lab10 from '../assets/lab11.jpg'
import lab11 from '../assets/lab12.jpg'
import lab12 from '../assets/lab13.jpg'
import lab13 from '../assets/lab14.jpg'
import lab14 from '../assets/lab15.jpg'
import lab15 from '../assets/lab16.jpg'
import lab16 from '../assets/lab17.jpg'
import lab17 from '../assets/lab3.jpg'
import ban from '../assets/ban.jpeg'
import Product from './Product'
import Thproduct from './Thproduct'
import Finalproduct from './Finalproduct'
function Electeric() {
  return (
    <div className='electeric'>
      
       
     <h2>RESULTS</h2>
     <div className='content'>

     <Product 
        id={123}
        title={'Tablet 10 Inch Android，Android 10.0" Tablets Computer 4GB RAM+64GB ROM, 128GB Expand Support, Octa-Core CPU...'}
        image={lab1}
        price={250}
        rateing={4}
                />
                 <Thproduct 
                    id={12793}
                    title={'Apple iPad (2018 Model) with Wi-Fi only 32GB Apple 9.7in iPad - Space Gray (Renewed)...'}
                    image={lab4}
                    price={50.1}
                   percent={40}
                />
     <Product 
        id={12345}
        title={'Android 11.0 Tablet, 10 inch Tablet, 3GB RAM 64GB ROM, 512GB Expand, Android Tablet with Dual Camera, WiFi...'}
        image={lab2}
        price={1170}
        rateing={4}
                />
                       <Finalproduct 
                    id={4523}
                    title={'Dell Optiplex 9020 Small Form Factor Desktop with Intel Core i7-4770 Upto 3.9GHz, HD  ...'}
                    image={lab5}
                    price={255}
                   percent={18}
                   thprice={200}
                />
     <Product 
        id={12368}
        title={'Tablet 10.1 Inch Android 11 Tablets,Quad-Core Processor 3GB RAM 64GB ROM,1280 * 800 IPS Touch Screen,Dual...'}
        image={lab17}
        price={98.4}
        rateing={4}
                />
    
                     <Finalproduct 
                    id={42583}
                    title={'Lenovo Flex 5i 13 Chromebook 2-in-1 Laptop, Intel Core i3-1115G4, 8GB RAM, 64GB Storage ...'}
                    image={lab8}
                    price={400}
                   percent={25}
                   thprice={309}
                />
     <Product 
        id={12345}
        title={'2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD...'}
        image={lab15}
        price={200}
        rateing={4}
                />
        <Thproduct 
            id={124593}
            title={'2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Silver...'}
            image={lab6}
            price={500}
           percent={35}
        />
     <Product 
        id={12783}
        title={'Dell Optiplex 9020 Small Form Factor Desktop with Intel Core i7-4770 Upto 3.9GHz, HD Graphics 4600 ...'}
        image={lab7}
        price={700}
        rateing={4}
                />
                {/* 1st */}
               






                <Thproduct 
                    id={12794563}
                    title={'Samsung Chromebook 4 Chrome OS 11.6" HD Intel Celeron Processor N4000 4GB RAM 32GB eMMC...'}
                    image={lab11}
                    price={119}
                   percent={35}
                />



                <Finalproduct 
                    id={4523}
                    title={'10 inch Tablet, Android 11.0 Tablet, 4GB RAM 64GB ROM, 512GB Expand Android Tablet with ...'}
                    image={lab13}
                    price={90}
                   percent={10}
                   thprice={70}
                />
 <Product 
        id={12358}
        title={'HP 14 Laptop, AMD Ryzen 5 5500U, 8 GB RAM, 256 GB SSD Storage, 14-inch Full HD Display, Windows 11 Home...'}
        image={lab16}
        price={400}
        rateing={4}
                />


                <Thproduct 
                    id={127576493}
                    title={'Meta Portal TV - Big Screen Smart Video Calling for Group Calls on Your TV..'}
                    image={lab14}
                    price={215}
                   percent={15}
                />





                <Thproduct 
                    id={127921543}
                    title={'Lenovo Flex 5i 13 Chromebook 2-in-1 Laptop, Intel Core i3-1115G4, 8GB RAM, 64GB Storage...'}
                    image={lab12}
                    price={425}
                   percent={10}
                />
                
                <Finalproduct 
                    id={455463}
                    title={'022 New HP 15 Laptop, 15.6" HD LED Display, Intel Dual-Core Processor, Intel UHD Graphics ...'}
                    image={lab10}
                    price={180}
                   percent={13}
                   thprice={140}
                />
                <Thproduct 
                    id={127914523}
                    title={'Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce ...'}
                    image={lab3}
                    price={89.99}
                   percent={22}
                />



                {/* 2st */}
         
           
                <Finalproduct 
                    id={41593}
                    title={'Android Tablet 10 inch, Android 11.0 Tablet, 3GB RAM 64GB ROM, 512GB Expand Android Tablet ...'}
                    image={lab9}
                    price={158}
                   percent={17}
                   thprice={145}
                />

     </div>
     
    </div>
  )
}

export default Electeric