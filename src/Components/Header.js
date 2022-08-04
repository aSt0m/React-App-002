import React, { Fragment,useEffect } from 'react';
import gsap from 'gsap';

const Header = () => {
    useEffect(() => {
        // default(x:-100)
        gsap.fromTo(".title1",{y:100,opacity:0,duration:4},{opacity:1,y:0, duration:4, ease:"none" })
        gsap.fromTo(".title2",{x: 100,opacity:0},{opacity:1,x:0, duration:2, ease:"none" })
      
    
    }, [])
    
    return ( 
        <Fragment>
            <div className='Header' > 
                <div className='container__header'>

                <div className='Header__left title1'>
                    <h1>Im title left</h1>
                </div>
                <div className='Header__right title2'>
                    <p>Im paragraph right Im paragraph right Im paragraph right </p>
                </div>
                </div>
                
            </div>
        </Fragment>
     );
}
 
export default Header;