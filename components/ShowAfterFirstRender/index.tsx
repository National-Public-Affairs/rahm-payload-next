import React, { useState, useEffect } from 'react';

export const ShowAfterFirstRender: React.FC = (props) => {
  const { children } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div style={{ opacity: show ? 1 : 0 }}>
      {children}
    </div>
  );
};
