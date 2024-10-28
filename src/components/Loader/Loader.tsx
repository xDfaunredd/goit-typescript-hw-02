import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <InfinitySpin width="200" color="#bc47c9" />
    </div>
  );
};

export default Loader;
