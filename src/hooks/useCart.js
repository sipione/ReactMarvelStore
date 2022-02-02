import { useState } from "react";

const items = [];
let counter = {}

function useCart(){
    const [cartItems, setCartItems] = useState(items);

    function manageCart(event){
        const id = event.target.id;
        if(id != "delete"){
            items.push(id);
            setCartItems([...cartItems, id]);
            if(counter[id]){
                counter[id] += 1;
            }else{
                counter[id]=1;
            }
        }else{
            const target = event.target.accessKey;
            console.log(counter[target]);
            counter[target] -= 1;
            console.log(counter[target]);
            if(counter[target] == 0){
                const index = items.indexOf(target);
                items.splice(index, 1);
                
            }
        }
    }
    console.log(counter)
    return [cartItems, counter, manageCart];
}

export default useCart;