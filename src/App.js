import React, { useState, useEffect } from 'react';
import Options from '../src/components/Options'
import Charakters from '../src/components/Charakters'
import GlobalStyles from '../src/components/GlobalStyles'
import Logo from '../src/logo.png'
import styled from 'styled-components'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { logoAnimation, titleAnimation } from './animations'
import { motion } from "framer-motion";

function App() {
  const [options, setOptions] = useState({ page: 1 });
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/?page=1');
  const [count, setCount] = useState(0);

  const prevHandler = () => {
    let pageNumber = options.page;
    pageNumber = pageNumber - 1;
    if (options.page !== 1) setOptions({ ...options, page: pageNumber })
    window.scrollTo(0, 0)
  }

  const nextHandler = () => {
    let pageNumber = options.page;
    pageNumber = pageNumber + 1;
    if ((options.page * 20) < count) setOptions({ ...options, page: pageNumber })
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const newUrl = new URL(url);
    newUrl.searchParams.set('page', options.page)
    setUrl(newUrl);
  }, [options.page])

  return (
    <>
      <GlobalStyles/>
      <MainLogo>
        <motion.img src={Logo} alt="Logo" variants={logoAnimation} initial="hidden" animate="visible"/>
      </MainLogo>
      <motion.h1 variants={titleAnimation} initial="hidden" animate="visible">All {count} characters from Rick and Morthy cartoon!</motion.h1>
      <Options options={options} setOptions={setOptions}/>
      <Charakters options={options} url={url} setUrl={setUrl} setCount={setCount}/>
      <Pages>
        <button onClick={prevHandler}><GrFormPrevious/></button>
        <button onClick={nextHandler}><GrFormNext/></button>
      </Pages>
    </>
  );
}

const MainLogo = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
`

const Pages = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0 2rem 2rem 2rem;
    color: #fff;
    border: none;
    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.2);
    }
   }
`

export default App;
