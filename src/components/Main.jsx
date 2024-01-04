import {useState} from "react";
import ListBox from "./ListBox";
import SelectedBox from "./SelectedBox";

export default function Main({animes}) {
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  return (
    <main className="main">
      <ListBox animes={animes} onSelectedAnime={handleSelectedAnime} />
      <SelectedBox selectedAnime={selectedAnime} />
    </main>
  );
}
