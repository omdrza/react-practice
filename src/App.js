import logo from './logo.svg';
// import './App.css';
import styles from './App.module.css';
import { useState } from 'react';
function App(props) {
  // ----- handle events-------
  /*
  const handleClick =(text,ev)=>{
    debugger
  }
  return(
    <>
    <button onClick={ (ev)=> handleClick('hi react',ev)}>click me!</button>    
    </>
  )
  */
  
  // --------if statement----------
  // if (props.condition) {
  //   return <Child />
  // }else{
  //   return <Child2 />
  // }

  // --------- logical && operator------
  // return(
  //   <>
  //   {/* {props.condition && <Child />} */}
  //   {!props.condition && <Child />}
  //   </>
  // )

  // -------ternary oparator-------
/* 
  return(
    <>
    {props.condition ? <Child /> : <Child2/>}
    </>
  )
*/

// ----- props ------
  /*
  const data = {
    userbrand : 'omid',
    pass : '1234'
  }
  return (
    <>
      <p>hi im omid</p>
      <Child data="test" data2="test2" data3={data}/>
      
    </>
  );
  */


// -------React Lists -> map------
/* 
const cars= [
  {id : 1 ,brand: 'bmw'},
  {id:2, brand: 'benz'},
  {id:3, brand:'Gclass'},
  {id:4 , brand:'dodge'}
 ]
return(
  <>
    {cars.map((item)=><Child key={item.id} brand={item.brand}/>)}
    
    
  </>
)
*/

// ----- style css------
// inline style
/*return(
  <>
    <p style={{color : "red", backgroundColor:'blue'}}>test</p>
  </>
)
OR

const styleSheet={
  color : '#b17527',
  backgroundColor: '#a2d3b9'
}
return(
  <>
    <p style={styleSheet}>test</p> 
    
  </>
)
*/

// external style / stylesheets
/*
return(
  <>
    <p className='test'>test</p> 
    
  </>
  // then should go to App.css
)
*/
// css modules
/*
    return(
      <>
      <p className={styles.test}>test</p>
      </>
    ) 
*/

// ------react hooks------
// states
// react useState Hook

// let name = 'omid'
/*
const [name, setName] = useState('omid')
const showName= ()=>{
  // name = 'reza'
  setName('reza')
}
return(
  <>
  <button onClick={showName}>click me</button>
  <p>{name}</p>
  </>
)
*/


// Forms
/*
const [username , setUsername] = useState('')
const handleSubmit =(ev)=>{
  ev.preventDefault(); // این برای جلوگیری از ارسال فرم است
  alert(`hi ${username}`)
  
}


return(
  <>
    <form onSubmit={handleSubmit}>
      <input type='text' value={username} onChange={(ev)=>{setUsername(ev.target.value)}}/>
      <input type ='submit' value='submit'/>
    </form>
  </>
)
*/
// forms 2
const [inputs , setInputs] = useState({})

const handleSubmit =(ev)=>{
  ev.preventDefault(); // این برای جلوگیری از ارسال فرم است
  console.log(inputs);
}
const handleChange =(ev)=>{
  const name = ev.target.name;
  const value = ev.target.value;

  setInputs(values => ({...values, [name]:value}))
  
  
}

return(
  <>
    <form onSubmit={handleSubmit} >
      <input type='text' name='username' value={inputs.username || ''} onChange={handleChange}/>
      <input type='email' name='email' value={inputs.email || ''} onChange={handleChange}/>
      <input type ='submit' value='submit'/>
    </form>
  </>
)



}

export default App;

function Child(props){
  // console.log(props);
  
  return(
    <>
      <p>{props.brand}</p>
      {console.log({props})}
      
    </>
  )
}
function Child2() {
  return(
    <>
      <h1>hello react</h1>
    </>
  )
}