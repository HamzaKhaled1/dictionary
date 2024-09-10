import { useState } from 'react';
import search from '../public/assets/images/icon-search.svg';

const Searchbar = ({ searchHandler }) => {
  const [word, setWord] = useState('');

  const inputHandler = (e) => {
    setWord((e.target.value).toLowerCase());
  };

  const submitHandler = () => {
    searchHandler(word);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      submitHandler();
    }
  };

  return (
    <>
      <div className='flex justify-start gap-20 ml-1 md:gap-[28rem] bg-slate-200 mt-10 rounded-md p-2'>
        <input
          type="text"
          placeholder="search..."
          className='bg-transparent focus:outline-none font-loraBold dark:text-black'
          onChange={inputHandler}
          onKeyPress={handleKeyPress}
          value={word}
        />
        <img
          src={search}
          alt="search"
          className='cursor-pointer mr-1'
          onClick={submitHandler}
        />
      </div>
    </>
  );
};

export default Searchbar;
