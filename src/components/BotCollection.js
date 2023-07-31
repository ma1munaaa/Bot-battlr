import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection({ isBot, setIsBot, handleAddBot }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/0651f1457377cdb61b5f')
      .then((response) => response.json())
      .then((data) => setBots(data.bots))
      .catch((error) => console.error('Error fetching bot data:', error));
  }, []);

  function handleDeleteBot(id) {
    setBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
  }

  return (
    <div className="container-fluid row">
      {bots.map((bota) => {
          return (
              <div key={bota.id} className="col-sm-3 mb-4 mb-sm-0">
                  <div onClick={() => handleAddBot(bota)}>
                      <BotCard
                          className="bg-info"
                          image={bota.avatar_url}
                          title={bota.name}
                          catchphrase={bota.catchphrase}
                          health={bota.health}
                          damage={bota.damage}
                          armor={bota.armor} />
                  </div>
                  <button onClick={() => handleDeleteBot(bota.id)}>DELETE</button>
              </div>
          );
      })}
    </div>
  );
}

export default BotCollection;
