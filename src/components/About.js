

export default function About(props) {
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'#413F3F':'white'}}>
      <h1>This is an About page</h1>
      <p>You can use this website to lowercase,uppercase and copy your text and find how much time it will take to read given text and length of it</p>  
    </div>
    <div className="container" style={{color: "white",height: '50vh',backgroundColor:"grey", marginTop:"25vh", fontSize:"3vh"}}>
    Developed By: Sameer Zafar <br></br>
    <a href="https://www.linkedin.com/in/sameer-zafar-4b8142283/" style={{color:"white", textDecoration:"none"}}>LinkedIn Profile Link</a>
    <br></br>
    <a href="https://github.com/sameerzf" style={{color:"white", textDecoration:"none"}}>Github Profile Link</a>
    </div>
    </>
  )
}
