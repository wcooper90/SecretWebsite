import React  from 'react';
import { Container, Paragraph } from './styles'


function About() {

    return (
      <Container>
        <div className="nine columns main-col" style={{width: '100%', minHeight: '75vh', maxWidth: '1024px'}}>
           <h2>About</h2>

           <Paragraph> A search engine with a mind of its own.  </Paragraph>


        </div>
      </Container>

    );
}

export default About;
