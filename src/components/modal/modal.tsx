import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createContainer } from "../../shared/helpers";
import { Portal } from "../portal/portal";

import styles from "./styles.module.css";

type ModalProps = {
  containerId: string;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
};

export const Modal = ({ containerId, title, children, onClose }: ModalProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);

  const handleClose: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    createContainer({ id: containerId });
    setMounted(true);
  }, [containerId]);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  return isMounted ? (
    <Portal id={containerId}>
      <div className={styles.wrapper} ref={rootRef}>
        <div className={styles.content}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleClose}
            data-testid="modal-close-button"
          >
            Х
          </button>
          <p className={styles.title}>{title}</p>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};
