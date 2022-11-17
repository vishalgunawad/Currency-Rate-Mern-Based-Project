import './App.css';
import Navbar from "./MyComponent/navbar"
import Newss from "./MyComponent/News"
import Alert from "./MyComponent/alert"
import Footer from "./MyComponent/footer"
import Textareas from "./MyComponent/Textareas"
import About from "./MyComponent/about"

import React, { useState, Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



//for nav bar
// const [mode, setMode] = useState('light');
// const toggleMode = () => {
//   if (mode === 'light') {
//     setMode('dark');
//     document.body.style.backgroundColor = '#042743';
//     // showalert("dark mode hase been enabled", "success");
//   }
//   else {
//     setMode('light');
//     document.body.style.backgroundColor = 'white';
//     // showalert("light mode hase been enabled", "success");
//   }
// };

//for alert.js
// const [alert, setalert] = useState(null);
// const showalert = (message, type) => {
//   setalert({
//     msg: message,
//     type: type
//   });
//   setTimeout(() => {
//     setalert(null);
//   }, 1500);
// }



export default class App extends Component {


  constructor() {
    super();
    
    this.state = {
       newsData : []
    }
  }
  
  

  async componentDidMount()
  {
    let temp = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    let parsedData = await temp.json();
    this.setState({newsData:parsedData.bpi});    
    console.log(this.state.newsData)
  }

  render() {
    return (
     
          <Router>
            <Navbar/> 
            <Newss newsData={this.state.newsData}/>
                <Routes>
                      <Route exact path="/textarea" element={<Textareas/>} />
                      <Route exact path="/about" element={<About />} />
                </Routes>
            
            <Footer />
        </Router>
      
    )
  }
}






















//<News News={News} onDelete={onDelete}/>



// const onDelete =   (todo)=>{
//   console.log("i am ondelete of" ,todo);
//   setNews(News.filter((temp)=>{
//     return temp!==todo;
//   }))
// }


// const [News, setNews] = useState(
//   [
//     {
//       sno:1,
//       title:"get this job market",
//       desc:"you nees to go market"
//     },
//     {
//       sno:2,
//       title:"get this job mall",
//       desc:"you nees to go mall"
//     },
//     {
//       sno:3,
//       title:"get this job play",
//       desc:"you nees to go play"
//     }
//   ]);