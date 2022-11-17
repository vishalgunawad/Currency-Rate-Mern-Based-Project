
import React, { Component } from 'react'

export default class Textareas extends Component {

    constructor() {
      super()
      this.state = {
        text : "",
        now:true
      }
    }

  render() {
    let mode='dark';
    const handleOnChange = (event) => {
        this.setState({text:event.target.value});
        
    }
    const handleUpClick = () => {
        if(this.state.now)
        {
            
            this.setState({text:this.state.text.toUpperCase(),now:false});
            
            
            // props.showalert("changed to UpperCase","success");  
        }
        else
        {
            this.setState({text:this.state.text.toLowerCase(),now:true});
            // props.showalert("changed to LowerCase","success");
        }
    }
    const handleCopy = ()=>
    {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        // props.showalert("text is copied","success");
    }
    
    return (
        <div className="container ">
        <p style={{color:mode==='light'?'black':'white'}} >{this.state.text}</p>
        <div className="form-group">
        <textarea className='form-Control' value={this.state.text} onChange={handleOnChange} id='mybox' rows='8' placeholder='Enter Text here'></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>change case</button>
        <button className="btn btn-primary" onClick={handleCopy}>copy text</button>
        <p>you have entered {this.state.text.length} numbers</p>
    </div>
    )
  }
}
