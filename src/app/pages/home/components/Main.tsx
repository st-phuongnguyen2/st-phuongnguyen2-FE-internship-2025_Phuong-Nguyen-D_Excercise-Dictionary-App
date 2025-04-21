import { useState } from 'react';

import axios from 'axios';
import FormSearch from './FormSearch';
import DictionaryContent from './DictionaryContent';

const API_URL = 'https://api.dictionaryapi.dev';

const Main = () => {
  const [keyword, setKeyword] = useState('');
  const [dictionaryList, setDictionaryList] = useState([]);
  const [message, setMessage] = useState('');

  function renderDictionaryList() {
    return dictionaryList.map((item: any) => {
      return (
        <li className="list-item dictionary-item">
          <h2 className="item-title">{item.word}</h2>
          <ul className="list phonetic-list">
            {item.phonetics.map((itemPhonetic: any) => {
              return (
                <li className="list-item phonetic-item">{itemPhonetic.text}</li>
              );
            })}
          </ul>
          <ul className="list meaning-list">
            {item.meanings.map((itemMeaning: any) => {
              return (
                <li className="list-item meaning-item">
                  <p className="type-word">{itemMeaning.partOfSpeech}</p>
                  <p className="meaning-text">Meaning</p>
                  <ul className="list definition-list">
                    {itemMeaning.definitions.map((itemDefinition: any) => {
                      return (
                        <li className="list-item definition-item">
                          {itemDefinition.definition}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </li>
      );
    });
  }

  function onKeywordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  async function onSearchDictionary(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    try {
      setMessage('Loading...');
      setDictionaryList([]);
      const response = await axios.get(
        `${API_URL}/api/v2/entries/en/${keyword}`
      );

      setMessage('');
      setDictionaryList(response.data);
      console.log('data:', response.data);
    } catch (error: any) {
      console.log('here:', error);
      setMessage(error.response.data.message);
    }
  }

  return (
    <main className="main">
      <section className="section section-app">
        <div className="container">
          <FormSearch
            keyword={keyword}
            onKeywordChange={onKeywordChange}
            onSearchDictionary={onSearchDictionary}
          />
          <DictionaryContent
            renderDictionaryList={renderDictionaryList}
            message={message}
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
