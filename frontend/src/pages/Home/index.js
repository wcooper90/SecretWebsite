import React, { useState, } from 'react';
import { Button, Details, AboutDescription,
      Container, Input } from './styles'
// import { Link, } from 'react-router-dom';
import Spinner from '../../components/Spinner'
import FadeIn from "../../components/FadeIn"
import Placard from '../../components/Placard'


const Display = (search) => {
    var json = search;
    var new_dict = [];
    var counter = 0;
    Object.keys(json.summary).forEach(function(key) {
      new_dict.push({"title": json.summary[key]['title'], "link": json.summary[key]['link'], "description": json.summary[key]['description'], "duration": 1300 + counter,"key": key});
      counter = counter + 200;
    });

    return (
      <ul>{new_dict.map(item => <FadeIn key={item.key} duration={item.duration}><Placard title={item.title} description={item.description} link={item.link}></Placard></FadeIn>)}</ul>
    );

};


function Home() {
  const [loading, setLoading] = useState(false);
  const [keyWords, setKeyWords] = useState('');
  const [result, setResult] = useState('')
  const [searched, setSearched] = useState(false)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search(keyWords);
    }
  }

  const search = async text => {

    if (text !== ""){
      setLoading(true);
    }

    const data = {'text': text, 'mode': 'regular'}
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(process.env.REACT_APP_LOCAL_LAMPOON_API + '/fetch_data', settings);
    const returned = await response.json();
    setResult(returned.output)
    setLoading(false)
    setSearched(true)
  }

  if (!searched){
    return (
        <div style={{ width: '100%', minHeight: '75vh', maxWidth: '1024px' }}>
          <AboutDescription>
            <FadeIn>
              <div>
                <Details>A devious search engine. Use at your own risk.
                    </Details>
                <Container>
                  <Input name='text' cols="120" placeholder="how to get girls... " value={keyWords} onChange={event => setKeyWords(event.currentTarget.value)} onKeyDown={handleKeyDown}></Input>
                </Container>
                <Container>
                  <Button onClick={() => search(keyWords)}>Let's Go</Button>
                  {loading ? <Spinner /> : <br />}
                </Container>
              </div>
            </FadeIn>
          </AboutDescription>
        </div>
    );
  }
  else {
    return (
        <div style={{ width: '100%', minHeight: '75vh', maxWidth: '1024px' }}>
            <FadeIn>
              <div>
                <Container>
                  <Input name='text' cols="120" placeholder="how to get girls... " value={keyWords} onChange={event => setKeyWords(event.currentTarget.value)}></Input>
                  <Button onClick={() => search(keyWords)}>Let's Go</Button>
                  {loading ? <Spinner /> : <br />}
                </Container>
                {searched ? <Display summary={result}/>: <br />}
              </div>
            </FadeIn>
        </div>
    );
  }
}

export default Home
