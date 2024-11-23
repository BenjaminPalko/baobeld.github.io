import { ReactNode } from "react";
// import "./index.css";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  content: ReactNode;
}

export const Modal = function ({ open, onClose, content }: ModalProps) {
  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal-card">
            {content}
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
