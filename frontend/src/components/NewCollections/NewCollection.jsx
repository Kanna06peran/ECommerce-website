import "./NewCollection.css"


import Item from "../Item/item"
import new_collection from '../Assets/new_collections'
// import { useEffect, useState } from "react"



function NewCollection(){
    // const [new_collection,setNew_collection]=useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:4000/newcollection')
    //     .then((response)=>response.json())
    //     .then((data)=>setNew_collection(data))
    // },[]);
    return(
    <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections flex flex-row">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
               
            )}


        </div>


    </div>)
}

export default NewCollection

// import "./NewCollection.css";
// import Item from "../Item/item";
// import { useMemo, useState } from "react";

// function NewCollection() {
//     const [new_collection, setNew_collection] = useState([]);

//     const fetchData = () => {
//         return fetch('http://localhost:4000/newcollection')
//             .then((response) => response.json())
//             .then((data) => data);
//     };

//     // Use useMemo to memoize the fetched data, preventing unnecessary re-renders.
//     const memoizedCollection = useMemo(() => {
//         fetchData().then((data) => setNew_collection(data));
//     }, []);

//     return (
//         <div className="new-collections">
//             <h1>NEW COLLECTION</h1>
//             <hr />
//             <div className="collections flex flex-row">
//                 {new_collection.map((item, i) => {
//                     return (
//                         <Item
//                             key={i}
//                             id={item.id}
//                             name={item.name}
//                             image={item.image}
//                             new_price={item.new_price}
//                             old_price={item.old_price}
//                         />
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default NewCollection;
