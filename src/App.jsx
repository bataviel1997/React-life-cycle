import React, {useState} from "react";
import MyButton from "./components/MyButton";
import MyButton2 from "./components/MyButton2";


export default function App(){
    // state pada function componenet
    const [show, setShow] = useState(true)

    setTimeout(()=>{
        setShow(false)
    }, 5000)


    return(
        <div>
            <h1>hello malam</h1>
            {show && <MyButton/>}
            {show && <MyButton2/>}


        </div>
    )
}