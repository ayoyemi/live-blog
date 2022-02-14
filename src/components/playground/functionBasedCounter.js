import { useState } from "react";

function FbCounter() {
     const title = "AYOMIDE ADEYEMI WEEK 4 ASSESSMENT";
     const subTitle = "Function Based Component Counter"
     const [counter, setCounter] = useState(0);

     const handleIncreaseCounter = () => {
         setCounter(counter + 1);
     }

     const handleDecreaseCounter = () => {
        setCounter(counter - 1);
    }

    const handleResetCounter = () => {
        setCounter(0);
    }

    return (  
         
        <div className="container" style={{textAlign: "center", backgroundColor: "lightblue", padding: "20px", margin: "10px 25%", borderRadius: "20px"}}>
            <p><b>{title}</b></p>
            <br />
            <p>{subTitle}</p>
            <br />
            <p>{`Counter = ${counter}`}</p>
            <br />
            <button onClick={handleIncreaseCounter}>Increase Counter</button> &nbsp;
            <button onClick={handleDecreaseCounter}>Decrease Counter</button> &nbsp;
            <button onClick={handleResetCounter}>Reset Counter</button>
        </div>
    );
}

export default FbCounter;