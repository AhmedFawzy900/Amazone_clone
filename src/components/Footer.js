import React from 'react'
import logo from '../assets/logo2.png'
import './Footer.css'
import ReactIcon from '../assets/favicon.ico'
const top= () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
        transition:2000
      });
}
function Footer() {
  return (
    <div className='footer'>
     <div className='top'>
        <button onClick={top}>Back to top</button>
     </div>
     <div className='biglinks'>
        <div className='know'>
            <ul>
            <p>Get to Know Us</p>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Investor Relations</li>
                <li>Amazon Devices</li>
                <li>Amazon Science</li>
            </ul>
        </div>
        <div className='mony'>

            <ul>
            <p>Make Money with Us</p>
                <li>Sell products on Amazon</li>
                <li>Sell on Amazon Business</li>
                <li>Sell apps on Amazon</li>
                <li>Become an Affiliate</li>
                <li>Advertise Your Products</li>
                <li>Self-Publish with Us</li>
                <li>Host an Amazon Hub</li>
                <li>›See More Make Money with Us</li>
            </ul>
        </div>
        <div className='pay'>
              <ul>
                <p>Amazon Payment Products</p>
                <li>Amazon Business Card</li>
                <li>Shop with Points</li>
                <li>Reload Your Balance</li>
                <li>Amazon Currency Converter</li>
                </ul>  
        </div>
        <div className='helpyou'>
            <ul>
            <p>Let Us Help You</p>
                <li>Amazon and COVID-19</li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Shipping Rates & Policies</li>
                <li>Returns & Replacements</li>
                <li>Manage Your Content and Devices</li>
                <li>Amazon Assistant</li>
                <li>Help</li>
            </ul>
        </div>
     </div>
        <div className="byme">
            <img src={logo} alt=""/>
            <p className='clone'>Clone</p>
            <p> ©  Made by <span>Ahmed Attia</span><img style={{'width': '22px','height': '22px'}} src={ReactIcon} alt=""/></p>
        </div>
    
    </div>
  )
}

export default Footer