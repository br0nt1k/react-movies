import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  return (
    <>
      <SearchBar onSubmit={() => {}} />
      <Loader />
      <ErrorMessage />
    </>
  );
}
