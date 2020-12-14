import React from 'react'
import '../components/Description.css'
import Typical from 'react-typical'

function Description() {
    return (
        
        <div className="description">
            <Typical
                steps={['I Love To Code',1000, 'I Design Cool Website',1000, "I Build Android Apps", 1000]}
                loop={Infinity}
                wrapper="p"  
      />
            
        </div>
    )
}

export default Description