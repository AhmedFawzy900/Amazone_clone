export const initialState = {
    cart:[],
};

const Reducer = (state,action) => {
      console.log(action.type);
      console.log(action.item);
    // switch (action.key) {
        if(action.type== 'ADD_TO_CART'){
            // LOGIC FOR ADDIN
        return {...state,cart:[...state.cart,action.item]}
        }
        else if(action.type == 'REMOVE_FROM_CART') {  
             const index = state.cart.findIndex(
              (ele) => ele.id === action.item
             );
            console.log(index,state.cart);
            if(index >=0){
                document.getElementById(`${action.item}`).style.display="none";
                state.cart.splice(index,1);
                console.log("removed");
            }
           
            return {...state,cart:[...state.cart]}
        }
        else{
            { console.log("else") }

            return state; 
        }
            
 
    // }
}
// export const Remove=(state,action)=>{
//     const nextCart = state.cart.filter(
//         item => item.id!== action.item
//     )
//     state.cart = nextCart
// }



export default Reducer;