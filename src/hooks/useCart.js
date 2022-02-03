import { useEffect, useState } from "react";

let counter = {}

function useCart(){
    const [cartItems, setCartItems] = useState(counter);

    function manageCart(event){
        const id = event.target.id;        
        if(id != "delete"){
            if(cartItems[id]){
                counter[id] += 1;
                setCartItems({...counter})
            }else{
                counter[id] = 1;
                setCartItems({...counter})
            }
        }else{
            const target = event.target.accessKey;
            counter[target] -= 1;
            if(counter[target] < 0){
                delete counter[target];
            }
            setCartItems({...counter})
        }
    }
    return [cartItems, manageCart];
}

export default useCart;