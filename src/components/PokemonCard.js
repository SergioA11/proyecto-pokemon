import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon, id }) => {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card text-center">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          className="card-img-top"
          alt={pokemon.name}
        />
        <div className="card-body">
          <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
          <Link to={`/detalle/${id}`} className="btn btn-primary">
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
