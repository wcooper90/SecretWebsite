import React, { useState, } from 'react';
import { Button, Details, AboutDescription,
      Container, Container2, Container3, Container4, Input, Button2 } from './styles'
// import { Link, } from 'react-router-dom';
import Spinner from '../../components/Spinner'
import FadeIn from "../../components/FadeIn"
import Placard from '../../components/Placard'
import Weather from '../../components/Weather'
import FactCheck from '../../components/FactCheck'


const Display = (search) => {
    var json = search;
    var new_dict = [];
    var counter = 0;
    Object.keys(json.summary).forEach(function(key) {
      new_dict.push({"title": json.summary[key]['title'], "link": json.summary[key]['link'], type: json.summary[key]['type'], "description": json.summary[key]['description'], "duration": 1300 + counter,"key": key});
      counter = counter + 200;
    });

    return (
      <ul>{new_dict.map(item => <FadeIn key={item.key} duration={item.duration}><Placard title={item.title} description={item.description} link={item.link} type={item.type}></Placard></FadeIn>)}</ul>
    );

};


function Home() {
  const [loading, setLoading] = useState(false);
  const [keyWords, setKeyWords] = useState('');
  const [result, setResult] = useState('')
  const [searched, setSearched] = useState(false)
  const [focus, setFocus] = useState(false);
  const [mode, setMode] = useState('regular')

  const items = ['booty', 'poop', 'at writing', 'at everything', '!!!!']
  var item = items[Math.floor(Math.random() * items.length)];

  console.log("crimson sux " + item)


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search(keyWords, mode);
    }
  }

  const search = async (text, mode) => {

    if (text === ""){
      return;
    }
    setLoading(true);
    const data = {'text': text, 'mode': mode}
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
                <Details>You might not find what you're looking for, but go for it anways.
                    </Details>
                <Container>
                  <Input name='text' cols="120" placeholder="how to get girls... " value={keyWords} onChange={event => setKeyWords(event.currentTarget.value)} onKeyDown={handleKeyDown} autoFocus={true}></Input>
                </Container>
                <Container>
                  <Button onClick={() => search(keyWords, mode)}>>>></Button>
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
                <Container2>
                  <Input style={{ width: '83%' }} name='text' placeholder="how to get girls... " value={keyWords} onChange={event => setKeyWords(event.currentTarget.value)} onKeyDown={handleKeyDown}></Input>
                  <Button onClick={() => search(keyWords, mode)}>👀 👀</Button>
                  <FadeIn>
                    <Container3>
                      <Button2 active={mode} onClick={() => { setMode('regular'); search(keyWords, 'regular'); }}>🔍 All</Button2>
                      <Button2 onClick={() => { setMode('news'); search(keyWords, 'news'); }}>News</Button2>
                      <Button2 onClick={() => { setMode('images'); search(keyWords, 'images'); }}>Images</Button2>
                      <Button2>Fact Check</Button2>
                      <Button2>Weather</Button2>
                      {loading ? <Spinner /> : <br />}
                    </Container3>
                  </FadeIn>
                </Container2>

                  <br/>
                  {searched ? <Display summary={result}/>: <br />}

              </div>
            </FadeIn>
        </div>
    );
  }
}

export default Home
