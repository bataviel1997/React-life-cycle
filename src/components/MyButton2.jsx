import React, {useState, useEffect} from "react";

export default function MyButton2(){

    const  [count, setCount] = useState(1)
    const increment = ()=>{
        setCount(count + 1)
    }
// componen did mount
    useEffect(()=>{
        console.info("mybutton2 di mount ke browser")

        // componen will unmount
        return()=>{
            console.info('mybuton2 di destroyed !!!')
        }
    }, [])

    // componen did update
    useEffect(()=>{
        console.info('mybuton2 diupdate', count)
        // line 18 depensiden list untuk trigger
    }, [count])

    return(
        <button onClick={increment}>Click Gaes {count}</button>
    )
}