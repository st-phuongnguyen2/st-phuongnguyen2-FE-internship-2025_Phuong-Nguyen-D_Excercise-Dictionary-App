type TDictionaryContentProps = {
  renderDictionaryList: () => React.ReactNode;
  message: string;
};

const DictionaryContent = ({
  renderDictionaryList,
  message
}: TDictionaryContentProps) => {
  return (
    <div className="section-content">
      <ul className="list dictionary-list" id="dictionary-list">
        {renderDictionaryList()}
      </ul>
      <p className="section-message" id="section-message">
        {message}
      </p>
    </div>
  );
};

export default DictionaryContent;
