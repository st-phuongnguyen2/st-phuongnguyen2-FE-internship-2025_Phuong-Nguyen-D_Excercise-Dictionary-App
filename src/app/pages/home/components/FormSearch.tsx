import SearchIcon from '../../../../assets/icons/search-icon.svg';

type TFormSearchProps = {
  keyword: string;
  onKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchDictionary: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const FormSearch = ({
  keyword,
  onKeywordChange,
  onSearchDictionary
}: TFormSearchProps) => {
  return (
    <form className="search-form">
      <input
        value={keyword}
        onChange={onKeywordChange}
        className="search-input"
        id="search-input"
        type="text"
        placeholder="Search My Dictionary App"
      />
      <button onClick={onSearchDictionary} className="btn-icon" id="search-btn">
        <img className="img-icon" src={SearchIcon} alt="btn-icon" />
      </button>
    </form>
  );
};

export default FormSearch;
