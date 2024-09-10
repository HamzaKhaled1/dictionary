import axios from "axios"
import { useRef } from "react";
import { useEffect, useState } from "react"
import play from '../public/assets/images/icon-play.svg'
import open from '../public/assets/images/icon-new-window.svg'
const Content =({Word}) => {
const [DATA,setDATA]=useState("")

const audioRef = useRef(null);

const Api =async (Word) => {
                    const response =await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${Word}`)
                    const data=response.data
                    setDATA(data)
                            }

useEffect(()=>{Api(Word);},[Word])

const playAudio = () => {
  audioRef.current.play(); 
};

console.log(DATA)
return (
  <>

  <div className="justify-start md:w-[40rem] mt-10 font-semibold ml-4 md:ml-0 ">
    <div className="w-full flex justify-between">
      <div>
  <p className="font-inter font-bold text-4xl">{DATA[0]?.word}</p>
  <p className=" text-lg text-custom">{DATA[0]?.phonetic}</p>
  </div>
  <div>
  <button onClick={playAudio} >{
    DATA?<img src={play} alt="" />:""
  }
  </button>
  <audio ref={audioRef}
    src={`//ssl.gstatic.com/dictionary/static/sounds/20200429/${Word}--_gb_1.mp3`}
          ></audio>
  </div>
  
</div>
  {DATA[0]?.meanings?.map((item, index) => (
    <div key={index}>
      <div className="flex w-full items-center h-10 mt-5">
        <span className="text-xl mr-1 font-loraIalicBold">{item.partOfSpeech}</span>
        <div className="h-[1px] bg-linebackground flex-grow opacity-25 "></div>
      </div>

      <p className="opacity-50 mt-6 mb-4 ">Meaning</p>
      <ul className="list-disc pl-5 mb-3  ">
      {item.definitions?.map((definition, defIndex) => (
        <div key={defIndex}>
          <li className="my-2 mb-0">
            {definition?.definition}
          </li>
          <span className="opacity-40 text-md">{item.definitions[defIndex]?.example}</span>
        </div>
      ))}
    </ul>
      <span className="opacity-60" >{`${item.synonyms[0]?`synonyms  : `:``}`}</span>
      <span className="text-custom   ">{item.synonyms[0]}</span>
  
    </div>
  ))}
  
 <div className="flex flex-col mb-10 mt-5">
  {DATA[0]?.sourceUrls ? (
    <>
    <div className="h-[1px]  flex-grow opacity-25 mb-4   "></div>
    <div className="flex w-32">
      <p className="opacity-50">Source: </p>
      <a 
        href={DATA[0].sourceUrls[0]} 
        target="_blank" 
        
        className="underline flex ml-1 opacity-70"
      >
        {DATA[0].sourceUrls[0]}
        <img src={open} alt="window"  className="ml-2 w-5"/>
      </a>
      </div>
    </>
  ) : ("")
  }
</div>
</div>
</>
  );
  
}

export default Content
