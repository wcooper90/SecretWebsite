import React from 'react';
import { Card, Description, Link, Title } from './styles'

const Weather = ({
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
            <Title> Weather </Title>
            <h3> {title} </h3>
          </Card>
        </div>
      );
};

export default Weather
