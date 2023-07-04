import {useState} from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    function add () {
        setCount(count + 1)
        console.log(count);
    }
    function remove () {
        setCount(count -1)
    }
    function reset () {
        setCount(0)
    }
    return (
        <>
            <button onClick={add}>+</button>
            <div>{count}</div>
            <button onClick={remove}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default Counter