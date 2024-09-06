import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  id: string;
  children: React.ReactNode;
};

export const Portal = ({ id, children }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    if (id) {
      const portalContainer = document.getElementById(id);

      if (!portalContainer) {
        throw new Error("There is no portal.");
      }

      setContainer(portalContainer);
    }
  }, [id]);

  return container ? createPortal(children, container) : null;
};
