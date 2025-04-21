import { useState } from 'react';
import { API_URL } from '../../../utils/constant/api';
import axios from 'axios';
import FormSearch from './FormSearch';
import DictionaryContent from './DictionaryContent';

const Main = () => {
  const [keyword, setKeyword] = useState('');
  const [dictionaryList, setDictionaryList] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState('');

  function onKeywordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  async function onSearchDictionary(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    try {
      setIsLoading('Loading...');
      setDictionaryList([]);
      const response = await axios.get(
        `${API_URL}/api/v2/entries/en/${keyword}`
      );

      setIsLoading('');
      setDictionaryList(response.data);
      console.log('data:', response.data);
    } catch (error: any) {
      console.log('here:', error);
      setIsLoading('');
      setMessage(error.response.data.message);
    }
  }

  return (
    <main className="dictionary-page">
      <section className="section section-app">
        <div className="container">
          <FormSearch
            keyword={keyword}
            onKeywordChange={onKeywordChange}
            onSearchDictionary={onSearchDictionary}
          />
          <DictionaryContent
            dictionaryList={dictionaryList}
            message={message}
            loading={isLoading}
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
