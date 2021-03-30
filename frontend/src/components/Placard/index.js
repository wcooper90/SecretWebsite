import React from 'react';
import { Card, Card1, Card2, Name, Link, Description, Img} from './styles'

const Placard = ({
    title = "",
    link = "",
    description = "",
    type = "",
    children,
    ...delegated
  }) => {

    if (type === "definition") {
      return (
        <div{...delegated}>
          {children}
          <Card1>
            <h1> {title} </h1>
            <nobr/>
            <hr/>
            <br />
            <bold>{description}</bold>
          </Card1>
        </div>
      );
    }
    else if (type === "image") {
      return (
        <div{...delegated}>
          {children}
          <Link href={description}>
            <Card2>
              <h3> {title} </h3>
              <Img src={link}/>
            </Card2>
          </Link>
        </div>
      );
    }
    else {
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
    }

};

export default Placard
