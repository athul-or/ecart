import StripeCheckout from "react-stripe-checkout";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom"

const KEY="pk_test_51LHC8RSABqOaEtgBd0UrJPKRY8zrjMlt1wTodnWV2uZqhUbQscCODiln2p30pMnzlST78CfXuH1awdUo1IKdxpIi00wX2lwpUV"

const Pay = () => {
  const [stripeToken,setStripeToken] = useState(null);
  const navigate= useNavigate()

  const onToken = (token) =>{
    setStripeToken(token);
  };
 
  useEffect(()=>{
    const makeRequest = async () =>{
      try{
          const res = await axios.post(
            "http://localhost:5000/api/checkout/payment" , 
            {
              tokenId:stripeToken.id,
              amount:2000,
            }
          );
          console.log(res.data);
          navigate.push("/success");
      }catch(err){
        console.log(err.response.data)
      }
    }
    stripeToken && makeRequest();
  },[stripeToken,navigate]);

  

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}>
      {stripeToken ?(<span>Processing.Please wai...</span>)
       :(
      <StripeCheckout 
      name="Yola Shop" 
      image="https://www.pngmart.com/files/10/Peace-Symbol-PNG-Picture.png"
      billingAddress
      shippingAddress
      description="Your total is Rs.20"
      amount={2000}
      token={onToken}
      stripeKey={KEY}
      >
        <button
        style={{
          border:"none",
          width:120,
          borderRadius:5,
          padding:"20px",
          backgroundColor:"black",
          color:"white",
          fontWeight:"600",
          cursor:"pointer",
        }}
        >Pay Now</button>
        </StripeCheckout>
        )}
    </div>
  )
      }

export default Pay



