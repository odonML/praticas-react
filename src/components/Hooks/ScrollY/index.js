import React, { useState, useEffect } from 'react'

function ScrollY() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        console.log(scrollY)
        const scrollingY = () => setScrollY(window.pageYOffset);
        window.addEventListener("scroll", scrollingY)
    })
    return (
        <div>
            <h3>scrolling {scrollY}</h3>
        </div>
    )
}

export default ScrollY
