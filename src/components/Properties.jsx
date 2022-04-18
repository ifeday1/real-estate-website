import React from 'react'
import Bproperty from './Bproperty'
import pimage1 from "../images/p1.png"
import pimage2 from "../images/p2.png"
import pimage3 from "../images/p3.png"

const Properties = () => {
  return (
    <div className='product'>
    <div className='p-heading'>
    <h3>Properties</h3>
    <p>We have a whole lot of Properties across diffrent state in the conutry</p>
    </div>

    <div className='product-container'>
    <Bproperty image={pimage1} name="Banana Island" price="$3000"/>
    <Bproperty image={pimage2} name="Gbagada" price="$1500"/>
    <Bproperty image={pimage3} name="Fastac" price="$2000"/> 
    </div>

    </div>
  )
}

export default Properties