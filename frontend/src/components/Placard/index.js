import React from 'react';

const Placard = ({
    title = "",
    link = "",
    description ="",
    children,
    ...delegated
  }) => {
    return (
      <div{...delegated}>
        {children}
          <h3>{title}</h3>
          <a href={link}>{link}</a>
          <p>{description}</p>
      </div>
    );
};

export default Placard
