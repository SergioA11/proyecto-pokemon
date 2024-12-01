import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detalle = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error('Error fetching Pokémon details:', error));
  }, [id]);

  if (!pokemon) return <p>Cargando datos del Pokémon...</p>;

  return (
    <div className="text-center">
      <h1>{pokemon.name.toUpperCase()}</h1>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        className="img-fluid mb-3"
      />
      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
      <p><strong>Tipos:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
    </div>
  );
};

export default Detalle;
