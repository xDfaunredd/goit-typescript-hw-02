import { useEffect, useRef } from "react";
import { Data } from "../types/types";

type Props = {
  setPage: (arg: (prev: number) => number) => void;
  images: Data[];
};

const LoadMore = ({ setPage, images }: Props) => {
  const count = useRef<number>(1);

  useEffect(() => {
    if (images.length === 16) {
      count.current = 1;
    }

    if (count.current !== 1) {
      window.scrollBy({ top: 3 * 300, behavior: "smooth" });
    }

    count.current = 2;
  }, [images]);

  function handleClick() {
    setPage((prev) => prev + 1);
  }

  return (
    <div className="flex justify-center mt-7 mb-7">
      <button className="btn-primary" onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
