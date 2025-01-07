import { useState } from "react";

const LangugaeForm = () => {
  const [seletedLanguage, setSelectedLanguage] = useState([]);

  const handlelanguageChecked = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLanguage((prevValue) => [...prevValue, value]);
    } else {
      setSelectedLanguage((prevValue) =>
        prevValue.filter((lang) => lang != value)
      );
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        value="Javascript"
        onChange={handlelanguageChecked}
      />{" "}
      Javascript
      <input
        type="checkbox"
        value="Python"
        onChange={handlelanguageChecked}
      />{" "}
      Python
      <input
        type="checkbox"
        value="Java"
        onChange={handlelanguageChecked}
      />{" "}
      Java
      <br />
      <br />
      <p>Selected Language: {seletedLanguage.join(", ")}</p>
    </div>
  );
};

const MusicGenre = () => {
  const [musicgenre, setMusicGenre] = useState([]);
  const handleMusicCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setMusicGenre((prevValue) => [...prevValue, value]);
    } else {
      setMusicGenre((prevValue) => prevValue.filter((lang) => lang != value));
    }
  };

  return (
    <div>
      <input type="checkbox" value="Rock" onChange={handleMusicCheckbox} /> Rock
      <input type="checkbox" value="Jaz" onChange={handleMusicCheckbox} /> Jaz
      <input type="checkbox" value="Pop" onChange={handleMusicCheckbox} /> Pop
      <p>Selected Music : {musicgenre.join(", ")}</p>
    </div>
  );
};

export default function App() {
  return (
    <>
      <LangugaeForm />
      <br />
      <MusicGenre />
    </>
  );
}
