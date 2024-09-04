import { useState } from 'react';

interface AccordionProps {
  children: React.ReactNode;
  title?: string | React.ReactNode;
  titleClass?: string;
  rotateIconClass?: string;
}

export const Accordion = (props: AccordionProps) => {
  const {} = props;

  const [expanded, setExpanded] = useState(false); // Открыт ли аккордион
  return <div className=''></div>;
};
