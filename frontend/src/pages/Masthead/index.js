import React, {useState, useEffect, Component} from 'react';
import { Container, Paragraph } from './styles'
import FadeIn from "../../components/FadeIn"
import Spinner from "../../components/FadeIn"



const Display = (results) => {
    var new_dict = [];
    var counter = 0;
    var i;

    for (i = 0; i < results.results.length; i++) {
      new_dict.push({"content": results.results[i],  "duration": 1300 + counter, "key": i});
      counter = counter + 200;
    }

    return (
      <ul>{new_dict.map(item => <FadeIn key={item.key} duration={item.duration}><p>{item.content}</p></FadeIn>)}</ul>
    );

};



function Masthead() {
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState("");

    useEffect(() => {
      async function get_masthead_data() {
        const response = await fetch(process.env.REACT_APP_LOCAL_LAMPOON_API + '/fetch_masthead_data');
        const returned = await response.json();
        setInfo(returned.output)
        setLoading(false);
      }
      get_masthead_data();
    }, []);

    return (
      <Container>
           <ul><h2>Masthead</h2></ul>
           <Display results={info}/>
      </Container>

    );
}

export default Masthead;
