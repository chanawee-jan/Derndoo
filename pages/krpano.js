import React, { Component } from 'react'
 
import Krpano from 'react-krpano'
 
class Example extends Component {
    
    constructor(props) {
        //...
        this.hooks = {
          noParam:()=>this.noParam()
          param: (e) => this.param(e)
        }
    }
          //...
        render () {
          return (
            <Krpano xml='krpano/monument/tour.xml' hooks={this.hooks} />
          )
        }
  
}   

export default Example