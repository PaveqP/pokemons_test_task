'use client'
import Chip from '@mui/material/Chip';
import styles from '../app/page.module.css';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
export default function PockemonsList({pocks}){

    const [pokemon, setPokemon] = useState()

    const fetchPokemon = async (selected) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selected}`)
            setPokemon(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    console.log(pokemon)

    return (
        <div className={styles.pokemonsList}>
            <ul className={styles.pokemons}>
            {
            pocks.map((po) => (
                <Chip 
                    key={po.url.length + po.name.length + Math.random()} 
                    onClick={() => fetchPokemon(po.name)} 
                    label={po.name} 
                    color='primary'>
                </Chip>
            ))
            }
            </ul>
            <div className={styles.card}>
                {pokemon ?
                    <>
                        <h2 className={styles.card__name}>
                            {pokemon.name}
                        </h2>
                        <img 
                            className={styles.card__image} 
                            src={pokemon.sprites.front_shiny} 
                            alt="Avatar" 
                        />
                        <div className={styles.card__stats}>
                            <p className={styles.stats_stat}>Снялся в {pokemon.weight} сериях</p>
                            <p className={styles.stats_stat}>Id: {pokemon.id}</p>
                            <p className={styles.stats_stat}>height: {pokemon.height}</p>
                            <p className={styles.stats_stat}>attack: {pokemon.stats.map(
                                (stat) => stat.stat.name === 'attack' && stat.base_stat
                            )}</p>
                        </div>
                    </>
                    :
                    <div className={styles.card__loader}>
                        <CircularProgress color="primary"/>
                        <p className={styles.card__loader_text}>Выберите персонажа для просмотра</p>
                    </div>
                }
            </div>
        </div>
    )
}