import React, { useEffect, useState } from 'react'
import Charakter from './Charakter'
import axios from 'axios';
import styled from 'styled-components'

function Charakters({ options, setOptions, url, setUrl, setCount }) {
    const [characters, setCharacters] = useState([]);
    const [init, setInit] = useState(false);
    

    const fetchAPI = async () => {
        try {
            await axios
                .get(url)
                .then(res => {
                    setCharacters(res.data.results);
                    setCount(res.data.info.count)
                    setInit(true)
                });
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const newUrl = new URL(url);
        if (options.status) newUrl.searchParams.set('status', options.status)
        if (options.gender) newUrl.searchParams.set('gender', options.gender)
        if (options.name) newUrl.searchParams.set('name', options.name)
        if (options.status === 'all') newUrl.searchParams.set('status', '')
        if (options.gender === 'all') newUrl.searchParams.set('gender', '')
        if (options.name === '') newUrl.searchParams.set('name', '')
        setUrl(newUrl);
    }, [options])
    
    useEffect(() => {
        fetchAPI()
    }, [url])

    return (
        <CharaktersStyled>
            {init && (
                characters.map(character => (
                    <Charakter name={character.name} status={character.status} species={character.species} gender={character.gender} image={character.image} key={character.id}/>
                ))
            )}
        </CharaktersStyled>
    )
}

const CharaktersStyled = styled.div`
    margin: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
`

export default Charakters
