import React, { useState, useEffect } from 'react';
import Snowfall from 'react-snowfall';

import img0 from './images/0.png';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.png';
import img8 from './images/8.png';
import img9 from './images/9.png';
import img10 from './images/10.png';
import img11 from './images/11.png';
import img12 from './images/12.png';
import img13 from './images/13.png';
import img14 from './images/14.png';


function App() {
  const [slide, setSlide] = useState(0);
  const [counter, setCounter] = useState(0);
  const [bg, setBg] = useState("#efefef");
  const [inputVal, setInputVal] = useState('');
  const [snowCount, setSnowCount] = useState(50);
  const [enable, setEnable] = useState(false);
  const [music, setMusic] = useState('');
  const [update, setUpdate] = useState(0);

  document.addEventListener('keydown', function(event) {
    if(enable){
      let string = music;
      string += ` ${getArrow(event.keyCode)}`;
      setMusic(string)
    }
  });

  useEffect(() => {
    if(music.length >= 36){
      setEnable(false);
      if(music === ' RIGHT RIGHT LEFT DOWN LEFT UP RIGHT'){
        alert('Excellent!')
        setSlide(slide + 1);
      }else{
        alert('Close enough.')
        setSlide(slide + 1);
      }
    }
  }, [music])



  const getArrow = (key) => {
    switch(key){
      case 38:
        return 'UP';
      case 39:
        return 'RIGHT';
      case 40: 
      return 'DOWN';
      case 37: 
      return 'LEFT';
      default:
      return  'X';
    }
  }

  const openPresent = () => {
    setSlide(slide + 1);
  }

  useEffect(() => {
    if(counter < 4 && counter !== 0){
      setTimeout(() => startCounter(), 500)
    }
  }, [counter])

  const startCounter = () =>{
    setSlide(slide + 1);
    setCounter(counter + 1);
  }

  const onchange = (e) => {
    setInputVal(e.target.value);
  }

  const changeSnow = () => {
    setBg(inputVal.trim())
    setSlide(slide + 1)
  }

  const addSnow = () => {
    setSnowCount(snowCount + 2000)
    setSlide(slide + 1)
  }

  const tameSnow = () => {
    setSnowCount(250);
    setSlide(slide + 1);
    setEnable(true);
  }



  return (
    <center>
      <Snowfall
      color={bg}
      style={{ background: 'transparent' }}
      snowflakeCount={snowCount}
      />
      <br /><br /><br /><br />
      <div style={{border: '6px double gold', margin: '0', top: '10%', width: '80%', backgroundColor: 'rgb(116, 116, 116)'}}>
      <table>
        <tr>
          <td>
          <h1>Merry Virtual Holiday</h1> <br />
          <h1>Shirisha !</h1><br /><br /><br /><br />

          {slide === 0 ? (<>
  <h5>Click present to open</h5>
</>) : (<></>)}

{slide === 1 ? (<>
  <h5>Neat... what is it?  First add water.</h5><br /><br />
  <center>
  <button onClick={() => openPresent()}>Add Water</button>
  </center>
</>) : (<></>)}

{slide === 2 ? (<>
  <h5>Oooo green things! Next make a wish!</h5><br /><br />
  <center>
    <input type='text' size="50" />
  <button onClick={() => openPresent()}>Make a wish</button>
  </center>
</>) : (<></>)}

{slide === 3 ? (<>
  <h5>Growth! Hold your breath count to three!</h5><br /><br />
  <center>
  <button onClick={() => startCounter()}>Start!</button>
  </center>
</>) : (<></>)}

{slide === 4 ? (<>
  <center>
  <h1>{counter}</h1><br /><br />
 
  </center>
</>) : (<></>)}

{slide === 5 ? (<>
  <center>
  <h1>{counter}</h1><br /><br />
 
  </center>
</>) : (<></>)}

{slide === 6 ? (<>
  <center>
  <h1>{counter}</h1><br /><br />
  </center>
</>) : (<></>)}

{slide === 7 ? (<>
  <center>
  <h5>What's your favorite color ?</h5><br /><br />
    <input type='text' size="10" value={inputVal} onChange={onchange} />
  <button onClick={() => changeSnow()}>IS MY FAVORITE!</button>
  </center>
</>) : (<></>)}

{slide === 8 ? (<>
  <center>
  <h5>{bg.toUpperCase()} SNOW ! How delightful !</h5><br /><br />
  <h5>This special green squiggly needs MORE snow to GROW !</h5><br /><br />
  <button onClick={() => addSnow()}>LET IT SNOW!</button>
  </center>
</>) : (<></>)}

{slide === 9 ? (<>
  <center>
  <h5>BRRRRRR</h5><br /><br />
  <h5>Too much snow !</h5><br /><br />
  <button onClick={() => tameSnow()}>TAME THE SNOW</button>
  </center>
</>) : (<></>)}

{slide === 10 ? (<>
  <center>
  <h5>Perfect.</h5><br /><br />
  <h5>Press the arrow keys in order to play its favorite jingle. </h5><br /><br />
  RIGHT > RIGHT > LEFT > DOWN > LEFT > UP > RIGHT<br /><br />

  <h5>your input:</h5><br />
  {music}
  </center>
</>) : (<></>)}

{slide === 11 ? (<>
  <center>
  <h5>I didn't hear any music either- but look at those buds grow!</h5><br /><br />
  <h5>Almost there!</h5><br /><br />
  <button onClick={() => openPresent()}>Patience is a virtue</button>
  </center>
</>) : (<></>)}

{slide === 12 ? (<>
  <center>
  <h5>Ta-da!</h5><br /><br />
  <h5>I hope your holiday season is safe, warm, and bright and may this digital peace lily bring you joy.</h5><br /><br />
  </center>
</>) : (<></>)}
            
           
          </td>
          <td>
            {slide === 0 ? (<>
              <div onClick={() => openPresent()}>
              <img src={img0} />
            </div>
            </>) : (<></>)}

            {slide === 1 ? (<>
              
              <img src={img1} />
            
            </>) : (<></>)}

            {slide === 2 ? (<>
              
              <img src={img2} />
            
            </>) : (<></>)}

            {slide === 3 ? (<>
              
              <img src={img3} />
            
            </>) : (<></>)}

            {slide === 4 ? (<>
              
              <img src={img4} />
            
            </>) : (<></>)}

            {slide === 5 ? (<>
              
              <img src={img5} />
            
            </>) : (<></>)}

            {slide === 6 ? (<>
              
              <img src={img6} />
            
            </>) : (<></>)}

            {slide === 7 ? (<>
              
              <img src={img7} />
            
            </>) : (<></>)}

            {slide === 8 ? (<>
              
              <img src={img8} />
            
            </>) : (<></>)}

            {slide === 9 ? (<>
              
              <img src={img9} />
            
            </>) : (<></>)}

            {slide === 10 ? (<>
              
              <img src={img10} />
            
            </>) : (<></>)}

            {slide === 11 ? (<>
              
              <img src={img11} />
            
            </>) : (<></>)}

            {slide === 12 ? (<>
              
              <img src={img13} />
            
            </>) : (<></>)}
            
          </td>
        </tr>
      </table>
      </div>
    </center>
  );
}

export default App;
