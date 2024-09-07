import "./popular.css"

import Item from "../Item/item"
import { useEffect, useState } from "react"


function Popular(){

    const[popularProducts,setPopularProducts]=useState([])

    useEffect(()=>{
        fetch('http://locahost:4000/popularinwomen')
        .then((response)=>response.json())
        .then((data)=>setPopularProducts(data))
    },[])
    return(<div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {popularProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}

        </div>
    </div>)
}


export default Popular