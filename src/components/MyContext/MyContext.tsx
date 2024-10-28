import React, { createContext, useState } from "react";

type MyContext = {
  isOpen: boolean;
  url: string;
  openModal: () => void;
  closeModal: () => void;
  fullImage: (arg: string) => void;
};

type Props = {
  children: React.ReactNode;
};

export const myContext = createContext<MyContext | undefined>(undefined);

const MyContext = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function fullImage(url: string) {
    setUrl(url);
  }

  return (
    <myContext.Provider
      value={{ isOpen, openModal, closeModal, fullImage, url }}
    >
      {children}
    </myContext.Provider>
  );
};

export default MyContext;
