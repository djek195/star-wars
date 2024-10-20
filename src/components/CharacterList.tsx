import { useEffect, useState } from 'react';

import { getCharacters } from '../core/api/charactersApi';
import { Character } from '../core/types/character.type';

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters(page);
        setCharacters(data);
      } catch (error) {
        console.error('Failed to fetch characters', error);
      }
    };

    fetchCharacters();
  }, [page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.length > 0 ? (
          characters.map((character: Character) => (
            <li key={character.url}>{character.name}</li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
      <button onClick={handleClick}>Load More</button>
    </div>
  );
};

export default CharactersList;
