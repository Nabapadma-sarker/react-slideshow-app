import React, { useState } from 'react';

function Slides({slides}) {
   const [nowSlide, setNowSlide]= useState(0)
   const [restartVal, setRestartVal]= useState(false)
   const [prevVal, setPrevVal]= useState(false)
   const [nextVal, setNextVal]= useState(true)
   
   const restart= ()=>{
        setNowSlide(0)
        setRestartVal(false)
        setPrevVal(false)
        setNextVal(true)
   }
   const previous= ()=>{
       if (nowSlide < 2) {
           setPrevVal(false)
           setRestartVal(false)
       } else {
            setPrevVal(true)
            setRestartVal(true)
            setNextVal(true)
       }
       setNowSlide(nowSlide - 1)
   }
   const next= ()=>{
       if (nowSlide < slides.length-2) {
            setNextVal(true)
            setRestartVal(true)
            setPrevVal(true)
       } else {
            setNextVal(false)
            setRestartVal(true)
            setPrevVal(true)
       }
       setNowSlide(nowSlide + 1)
   }
   console.log(nowSlide)
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restart} disabled={!restartVal}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={previous} disabled={!prevVal}>Prev</button>
                <button data-testid="button-next" className="small" onClick={next} disabled={!nextVal}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides && slides[nowSlide].title}</h1>
                <p data-testid="text">{slides && slides[nowSlide].text}e</p>
            </div>
        </div>
    );

}

export default Slides;
