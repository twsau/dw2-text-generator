import { ReactElement, useEffect, useState } from "react";
import ReactModal from "react-modal";
import create from "zustand";
ReactModal.setAppElement("#root");

interface IModal {
  content: ReactElement | null;
  modal: (content: ReactElement) => void;
}

export const useModal = create<IModal>((set, get) => ({
  content: null,
  modal: (content) => set({ content }),
}));

export const Modal = () => {
  const { content } = useModal();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(content ? true : false);
  }, [content]);

  return (
    <ReactModal
      children={content}
      className="modal"
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      overlayClassName="modal-container"
    />
  );
};
