import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSectionContext } from "../context/SectionContext";

interface ObserverSectionProps {
  id: string;
  children: React.ReactNode;
}

const ObserverSection: React.FC<ObserverSectionProps> = ({ id, children }) => {
  const { setActiveSection } = useSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.5, // Define a porcentagem de visibilidade para considerar como "ativa"
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
  }, [inView, id, setActiveSection]);

  return (
    <section ref={ref} id={id} style={{ minHeight: "100vh" }}>
      {children}
    </section>
  );
};

export default ObserverSection;
