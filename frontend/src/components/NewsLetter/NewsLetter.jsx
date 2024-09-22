import "./NewsLetter.css"





function NewsLetter(){
    return(
        <center>
    <div className="newsletter" style={{paddingTop:300}}>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div style={{marginBottom:200}}>
            <input type="email" placeholder="Your Email-id"></input>
            <button style={{  width: 210,
    height: 70,borderRadius: 80,backgroundColor:"black",color: "white",
    fontSize: 16,cursor:"pointer"}}>Subcribe</button>


        </div>

    </div>
    </center>)

}

export default NewsLetter