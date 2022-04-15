import React from 'react';
import Agnetbox from './Agnetbox';
import agentImage1 from "../images/s1.png"
import agentImage2 from "../images/s2.png"
import agentImage3 from "../images/s3.png"

const Agent = () => {
  return (
    <div className='agent'>
    <div className='a-heading'>
    <h1>Agents</h1>
    <p>jenfjksdnmgnjfgkmdfkfdnkn</p>
    </div>
    <div className='b-container'>
    <Agnetbox image={agentImage1} name="Ifeoluwa" />
    <Agnetbox image={agentImage2} name="Idapomimo" />
    <Agnetbox image={agentImage3} name="Oreofe" />
    </div>
    </div>
  )
}

export default Agent;