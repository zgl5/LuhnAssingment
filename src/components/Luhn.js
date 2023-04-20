import React, { useState } from 'react';


function LuhnAlg(){
    const [cardNumber, setCardNumber]=useState("")
    const [result, setResult] = useState("")

    const changeNumber = (event) =>{    //updated the card number
        setCardNumber(event.target.value);
    }

const checkNumber =()=>{
    const controlNumber=parseInt(cardNumber.slice(-1),10)  // to take the last digit from the number
    const cardNewNumber=cardNumber.slice(0,-1).split("").reverse().join("")  // to calculate from left
    let sum = 0
    for(let i=0; i<cardNewNumber.length; i++){
        let number = parseInt(cardNewNumber[i],10)  // to make integer and 10 system
        if(i%2===0){                            
            number*=2;
                if (number >9){               
                number-=9
            } 
        }
        sum+=number 
        }
         const result=( sum + controlNumber)%10===0 ?  "Card Number is Valid" : " Card Number is not Valid"
    setResult(result)  
    }
return (
    <div>
     <input className='input' type="text" id="Card NUmber" name="Card NUmber" value={cardNumber} onChange={changeNumber} />
    <button className='btn' onClick={checkNumber}>Check the Card Number</button>
    <p>{result}</p>
  </div>
)
}
export default LuhnAlg