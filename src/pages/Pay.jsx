import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

const KEY = 'pk_test_51K4kcoAw88dN5RqFKvtEet1tOMQHYUhizjZdTwB7NXyz6KHMMEfm7O7TWEtG7txEYoaklxQg9JUy2nFPaItRAhDK00IRl7TcZn'

export default function Pay() {
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()

    const onToken = token => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeReq = async () => {
            try {
                const res = await axios.post('http://localhost:5000/api/checkout/payment', 
                {
                    tokenId: stripeToken?.id,
                    amount: 2000,   
                })
                navigate('/success')
            } catch(err) {
                console.log(err)
            }
        }
        stripeToken && makeReq()
    }, [stripeToken, navigate])

    return (
        <div 
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            { stripeToken ? <span>Processing. Please wait</span> : (
                <StripeCheckout 
                    name="eCo."
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6T7xj8uS9gFANKMHSexEHwhxnKRDcePuf1Q&usqp=CAU"
                    billingAddress
                    shippingAddress
                    description="Your total is $20"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button 
                        style={{
                            border: 'none',
                            width: 120,
                            borderRadius: 5,
                            padding: "20px",
                            fontWeight: "600",
                            cursor: "pointer",
                            color: "white",
                            backgroundColor: "black"
                        }}
                    >Pay Now</button>
                </StripeCheckout>
            ) }
        </div>
    )
}
