import React from 'react'
import styled from 'styled-components'
import { photoAnimation, fadeAnimation } from '../animations'
import { motion } from "framer-motion";

function Charakter({ name, status, species, gender, image }) {
    return (
        <StyledCharacter>
            <motion.img src={image} alt={name} variants={photoAnimation} initial="hidden" animate="visible"/>
            <motion.div variants={fadeAnimation} initial="hidden" animate="visible">
                <h2>{name}</h2>
                <p>Status: {status}</p>
                <p>Species: {species}</p>
                <p>Gander: {gender}</p>
            </motion.div>
        </StyledCharacter>
    )
}

const StyledCharacter = styled.div`
    margin-bottom: 3rem;

    img {
        border-radius: 20px;
        transition: all 0.5s ease;
    }
`

export default Charakter
