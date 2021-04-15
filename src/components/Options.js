import React, { useState } from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeAnimation } from '../animations'

function Options({ options, setOptions }) {
    const [name, setName] = useState('');

    const statusHandler = e => {
        setOptions({ ...options, status: e.target.value })
    }

    const genderHandler = e => {
        setOptions({ ...options, gender: e.target.value })
    }

    const nameHandler = e => {
        setName(e.target.value);
    }

    const searchHandler = e => {
        e.preventDefault();
        setOptions({ ...options, name });
        setName('');
    }

    return (
        <StyledOptions >
            <motion.form variants={fadeAnimation} initial="hidden" animate="visible"> 
                <input type="text" placeholder="Name" onChange={nameHandler} value={name}/>
                <button onClick={searchHandler}><BsSearch/></button>
            </motion.form>

            <motion.label htmlFor="status" variants={fadeAnimation} initial="hidden" animate="visible">Choose a status: </motion.label>
            <motion.select name="status" onChange={statusHandler} variants={fadeAnimation} initial="hidden" animate="visible">
                <option value="all">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </motion.select>

            <motion.label htmlFor="status" variants={fadeAnimation} initial="hidden" animate="visible">Choose a gender: </motion.label>
            <motion.select name="gender" onChange={genderHandler} variants={fadeAnimation} initial="hidden" animate="visible">
                <option value="all">All</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </motion.select>
        </StyledOptions>
    )
}

const StyledOptions = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem 3rem;

    input {
        padding: 0.5rem;
        width: 20rem;
        outline: none;
    }

    button {
        font-size: 1.3rem;
        transform: translate(-2rem, 0.3rem);
        border: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
    }

    select {
        padding: 0.5rem;
        margin: 0 1rem;
    }

    label {
        font-size: 1.5rem;
    }
`

export default Options
