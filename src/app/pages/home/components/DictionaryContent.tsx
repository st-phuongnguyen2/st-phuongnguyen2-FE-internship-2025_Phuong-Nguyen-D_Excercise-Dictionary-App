type TDictionaryContentProps = {
  dictionaryList: Array<string>[];
  message: string;
  loading: string;
};

const DictionaryContent = ({ message, loading, dictionaryList}: TDictionaryContentProps) => {
  
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
  return (
    <div className="notification-content">
      <ul className="list dictionary-list" id="dictionary-list">
        {renderDictionaryList()}
      </ul>
      <p className="loading" id="loading">
        {loading}
      </p>
      <p className="message" id="message">
        {message}
      </p>
    </div>
  );
};

export default DictionaryContent;
