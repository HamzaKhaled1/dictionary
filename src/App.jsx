import { useState } from 'react'
import './App.css'
import Content from './content'
import Header from './Header'
import Searchbar from './Searchbar'
function App() {
const[word,setWord]=useState("")

const searchHandler=(item)=>{
  setWord(item);
}
 return (
    <>
    <div className=' flex  flex-col  items-center'>
 <Header />
 <Searchbar  searchHandler={searchHandler}/>
 <Content  Word={word}/>
  </div>
    
  </>
  )
}

export default App
