import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
function Cart() {
 const [items , setItem] = useState([]);
 useEffect(() =>{
   const items = JSON.parse(localStorage.getItem("NUM_OF_COUNT")) ;
   if (items) {
      setItem(items)
   } 
 },[items])

return items.length;
 
}

export default Cart