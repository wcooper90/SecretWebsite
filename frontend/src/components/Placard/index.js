import React from 'react';
import { Card, Name, Link, Description } from './styles'

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
        <Card>
          <Name>{title}</Name>
          <Link href={link}>{link}</Link>
          <Description>{description}</Description>
        </Card>
      </div>
    );
};

export default Placard
