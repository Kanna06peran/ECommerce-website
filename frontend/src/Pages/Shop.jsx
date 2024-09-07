import Hero from "../components/Hero/Hero"
import NewCollection from "../components/NewCollections/NewCollection"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import Offers from "../components/Offers/Offers"
import Popular from "../components/Popular/popular"


function Shop(){
    return(<div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <hr/>
        <NewsLetter/>
    </div>)
}


export default Shop