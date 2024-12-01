import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=200')
      .then(response => response.json())
      .then(data => setPokemonList(data.results))
      .catch(error => console.error('Error fetching Pokémon:', error));
  }, []);

  return (
    <div>
      <h1 className="mb-4">Lista de Pokémon</h1>
      <div className="row">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} id={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Home;
