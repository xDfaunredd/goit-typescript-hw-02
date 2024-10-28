import ImageCard from "../ImageCard/ImageCard";
import { Data } from "../types/types";

import s from "./ImageGallery.module.css";

type Props = {
  images: Data[];
};

const ImageGallery = ({ images }: Props) => {
  return (
    <ul className={s.list}>
      {images.map((item: Data) => (
        <ImageCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ImageGallery;
