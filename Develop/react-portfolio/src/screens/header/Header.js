import React from 'react'
import Typed from 'react-typed';
function Header() {
    return (
        <div>
            <h1>Hello World</h1>
            <Typed 
            strings= {[
                " "
                "write in this array what you want to search",
                "popcorn",
                "bananas",
                "corn",
                " ",
                " ",
            ]}
                typeSpeed={20}
                backSpeed={60}
                loop
            
            
            />
        </div>
    )
}

export default Header
