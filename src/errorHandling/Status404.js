import React, {useEffect, useRef} from 'react';
import Status from './Status';
import './Status404.css';
// import { gsap } from 'gsap/gsap-core';
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
// import { PixiPlugin } from "gsap/PixiPlugin.js";

// gsap.registerPlugin(PixiPlugin, MotionPathPlugin );

const Status404 = () => {
    // const boxRef = useRef(null)
    // useEffect(()=>{
    //     gsap.fromTo(".error-404", 
    //     {rotation: 1},
    //     {rotation: 360,
    //      transformOrigin: "50% 60%",
    //      repeat: 0,
    //      ease: "none",
    //      motionPath: {
    //         path: [{x:-500, y:0}, {x:0, y:0}, {x:0, y:0}, {x:0, y:0}],
    //         type: "cubic"
    //       }
    //     });
    // }, [])
   


    return (
      <Status code={404}>
        <div className='error-container'>
            <div className='error-text-wrapper'>
              <h2 className='sorry'>Sorry,</h2>
              <h2 className='sorry'>can't find that.</h2>
              {/* <h3 ref={boxRef} className='error-404'>404</h3> */}
           </div>
        </div>
      </Status>
    );
  };

export default Status404;