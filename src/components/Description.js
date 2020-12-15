import React from 'react'
import '../components/Description.css'
import Typical from 'react-typical'
import $ from 'jquery'

function Description() {
    
    
    return (
        
        <div className="description">
           
            <Typical
                className="typical"
                steps={["I love to code" ,1000, " I design Cool Website",1000, "I build Android Apps", 1000]}
                loop={Infinity}
               
      />
     
            
        </div>
    )
}

export default Description
