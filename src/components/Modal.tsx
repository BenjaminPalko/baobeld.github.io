import { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  content: ReactNode;
}

export const Modal = function ({ open, onClose, content }: ModalProps) {
  return (
    <>
      {open && (
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              width: "600px",
              height: "fit-content",
              background: "grey",
              padding: "12px",
              borderRadius: "4px",
            }}
          >
            {content}
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
