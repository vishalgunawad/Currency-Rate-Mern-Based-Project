import React, { Component } from 'react'
import Iter from "./iter"

export default class Newsitem extends Component {

  

  render() {


    return (
      <div className='containor text-center my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
      
            
            {
              Object.entries(this.props.data).map((temp)=>{
                
                return <Iter data={temp}/>
               })
            }
          </div>
        </div>
      </div>
    )
  }
}
