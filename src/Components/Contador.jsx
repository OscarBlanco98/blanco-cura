import { useState } from 'react';
function Count(){
    const [count, setCount]=useState(0)
    const handleClick = () =>{
        setCount(count + 1)
    }
    return(
        <div>
            <span>El contador está a:  {count}</span>
            <button onClick={handleClick}>Clickeame</button>
        </div>
    )
    }
export default Count;