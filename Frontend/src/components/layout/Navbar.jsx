import { useState } from "react"

function Navbar() {
    let [count, setCount] = useState(0);
    return(
        <div>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
            <button onClick={() => setCount(count - 1)}>Sub 1</button>
            <button onClick={() => setCount(0)}>Reset</button>

        </div>
    )
    
}
export default Navbar