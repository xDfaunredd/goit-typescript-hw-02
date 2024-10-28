import { useMyContext } from "../hooks/useMyContext/useMyContext";
import { Data } from "../types/types";

type Prop = {
  item: Data;
};

const ImageCard = ({ item }: Prop) => {
  const { openModal, fullImage } = useMyContext();

  function handleClick() {
    openModal();
    fullImage(item.urls.full);
  }
  return (
    <li>
      <img
        className="cursor-zoom-in shadow-sm  w-[300px] h-[300px] object-cover rounded-lg hover:scale-[.9] transform transition-transform duration-300 hover:shadow-lg "
        src={`${item.urls.small}`}
        alt={item.alt_description}
        onClick={handleClick}
      />
    </li>
  );
};

export default ImageCard;
