import React, { useState, useEffect } from 'react';

const Berries = () => {
  const [berries, setBerries] = useState([]);
  const [selectedBerry, setSelectedBerry] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/berry?limit=20')
      .then(response => response.json())
      .then(data => setBerries(data.results))
      .catch(error => console.error('Error fetching berries:', error));
  }, []);

  const handleBerryClick = async (berryName) => {
    const berryResponse = await fetch(`https://pokeapi.co/api/v2/berry/${berryName}`);
    const berryData = await berryResponse.json();
    setSelectedBerry(berryData);
  };

  return (
    <div>
      <h1>Bayas del Universo Pokémon</h1>
      <div className="row">
        {berries.map(berry => (
          <div key={berry.name} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{berry.name.toUpperCase()}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleBerryClick(berry.name)}
                >
                  Ver Detalles
                </button>

                {selectedBerry && selectedBerry.name === berry.name && (
                  <div className="mt-3">
                    <h6>Detalles:</h6>
                    <p><strong>Descripción:</strong> {selectedBerry.effect_entries ? selectedBerry.effect_entries[0].effect : 'No disponible'}</p>
                    <p><strong>Usos:</strong> {selectedBerry.item ? selectedBerry.item.name : 'No disponible'}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Berries;
