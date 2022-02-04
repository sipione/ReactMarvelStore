import React, { useState } from "react";
import { Light } from "../UI/Variable";

function useCreators(magazines){
    const [creators] = useState([...getCreators()])
    const [selectedEditors, setselectedEditors] = useState([])

    function getCreators(){
        let list = []
        
        magazines.forEach(item=>{
            item.creators.items.forEach(creators =>{
                if(creators.role == "editor"){
                    list.push(creators.name)
                }
            })
        })

        return new Set([...list]);
    }

    function filterByEditor(){
        let list = []
        
        magazines.forEach(item=>{
            item.creators.items.forEach(creators =>{
                if((creators.role == "editor") && (selectedEditors.find(e=> e == creators.name))){
                    list.push(item)
                }
            })
        })
        return [...list]
    }

    function toggle(event){
                const name = event.target.id;
                if(!selectedEditors.find(element=> element == name)){
                    setselectedEditors([...selectedEditors, name])
                    event.target.style.background ="lightgreen";
                }else{
                    const index = selectedEditors.indexOf(name)
                    selectedEditors.splice(index, 1);
                    setselectedEditors([...selectedEditors]);
                    event.target.style.background =`${Light}`;
                }
                
            }

    return [creators, selectedEditors, toggle, filterByEditor]
}

export default useCreators;