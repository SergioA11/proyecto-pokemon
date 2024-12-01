// Items.js
import React, { useState, useEffect } from 'react';

const Items = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/item?limit=20')
      .then(response => response.json())
      .then(data => setItems(data.results))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const handleItemClick = async (itemName) => {
    const itemResponse = await fetch(`https://pokeapi.co/api/v2/item/${itemName}`);
    const itemData = await itemResponse.json();
    setSelectedItem(itemData);
  };

  return (
    <div>
      <h1>Items del Universo Pokémon</h1>
      <div className="row">
        {items.map(item => (
          <div key={item.name} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{item.name.toUpperCase()}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleItemClick(item.name)}
                >
                  Ver Detalles
                </button>

                {selectedItem && selectedItem.name === item.name && (
                  <div className="mt-3">
                    <h6>Detalles:</h6>
                    <p><strong>Descripción:</strong> {selectedItem.effect_entries ? selectedItem.effect_entries[0].effect : 'No disponible'}</p>
                    <p><strong>En uso en:</strong> {selectedItem.sprites ? <img src={selectedItem.sprites.default} alt={item.name} /> : 'No disponible'}</p>
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

export default Items;
