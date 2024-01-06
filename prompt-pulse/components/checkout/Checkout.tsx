import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { Button } from '@nextui-org/react';

type Props = {
    cart: any,
    price:Number,
}

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);

const CheckOut = ({cart,price}: Props) => {
    const handleCheckout = async() => {
        try{
        const stripe =await stripePromise;
        if(!stripe){
            return alert("Something went wrong");
        }
        const checkOutSession = await axios.post("/api/checkout", {
            price
        })
        const {sessionId}=await checkOutSession.data;
        const result = await stripe?.redirectToCheckout({
            sessionId,
        })
        if (result?.error) {
            alert(result.error.message);
        }
    }catch(error){
        console.log("error",error)
    }
    }
    return (
        <Button className={`bg-slate-900 text-[#ffeb3b] border-[#64FF4C] border-solid border-[1px] rounded-md text-lg w-[260px] h-[40px] font-semibold hover:text-gray-900 hover:bg-[#64FF4C]`} onClick={()=>{handleCheckout()}}>CheckOut with Stripe</Button>

    )
}

export default CheckOut