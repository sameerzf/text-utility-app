
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';


function App() {
const [mode, setMode] = useState("light");
const [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
  
})
setTimeout(() => {
  setAlert(null)
}, 3000);

}
const toggleMode=()=>{
  if(mode==='light'){
  setMode('dark');
document.body.style.backgroundColor='#413F3F';
showAlert("Dark mode has been enabled","success");
}
  else{
  setMode('light');
  document.body.style.backgroundColor='white'
  showAlert("Light mode has been enabled","success");

}
}



  return (
<>

            <BrowserRouter>
        <Navbar
          title="Sameer"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
