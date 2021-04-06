import React from 'react';
import { Card, Description, Link, Title } from './styles'

const FactCheck = ({
    title = "",
    link = "",
    description = "",
    type = "",
    children,
    ...delegated
  }) => {
      return (
        <div{...delegated}>
          {children}
          <Card>
            <Title> Fact Check </Title>
            <h3> {title} </h3>
          </Card>
        </div>
      );
};

export default FactCheck
