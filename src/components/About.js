import React, { useState } from 'react'

export default function About() {

    const [myStyle,setMyStyle]=useState ({
        color:'black',
        backgroundColor:'white'
    }) 
    const [btnText, setBtnText] = useState("Enable Dark mode")
    const toggleStyle=()=>{
        if(myStyle.color==='black')
        {
        setMyStyle({
            color:'white',
            backgroundColor:'black'
        })
        setBtnText("Enable Light mode")
        
        }
        else {
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark mode")

        }
    }




// let myStyle={
// backgroundColor:'black',
// color:'cyan'
// }

  return (
    <>
    <div className='container' style={myStyle}>
      <h1>This is an About page</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eos et illo similique dolorum accusantium, deleniti provident minus inventore magni quaerat odit sit ducimus repellendus deserunt accusamus repudiandae eius at exercitationem consequatur veritatis numquam?</p>  
    </div>
    <button className='darkMode' onClick={toggleStyle} style={myStyle}>{btnText}</button>
    </>
  )
}
