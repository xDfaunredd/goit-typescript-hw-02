import { useEffect, useState } from "react";
import "./App.css";

import { Data, Response } from "../types/types";
import { fetchFunc } from "../fetchFunc/fetchFunc";

import SearchBar from "../SearchBar/SearchBar";
import LoadMore from "../LoadMore/LoadMore";
import ImageGallery from "../ImageGallety/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

function App() {
  const [images, setImages] = useState<Array<Data>>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function fetchData(): Promise<void | string> {
      if (!query.trim()) {
        setIsVisible(false);
        return;
      }
      setIsVisible(false);
      setLoading(true);
      try {
        const data: Response = await fetchFunc(query, page);

        if (data.total_pages === 0) {
          setLoading(false);

          return toast.error(`Wrong request , there are no ${query}`);
        }

        console.log(data);
        setImages((prev) => [...prev, ...data.results]);
        setLoading(false);

        setIsVisible(true);

        if (data.total_pages === page) {
          setLoading(false);
          setIsVisible(false);
          toast(`There are no more ${query}`);
        }
      } catch (error: unknown) {
        setLoading(false);
        setIsVisible(false);
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    }

    fetchData();
  }, [query, page]);

  function resetValues(arg: string) {
    setImages([]);
    setPage(1);
    setQuery(arg);
  }

  return (
    <>
      <ImageModal />
      <SearchBar resetValues={resetValues} />
      <ImageGallery images={images} />
      {loading && <Loader />}
      {isVisible && <LoadMore images={images} setPage={setPage} />}
      {error && (
        <div className="flex items-center flex-col">
          <h2>Something went wrong!</h2>
          <p>{`${error}`}</p>
        </div>
      )}
    </>
  );
}

export default App;
