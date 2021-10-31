import React, { useState, useEffect } from "react";
import md5  from "md5" ;
import { CardPersonaje } from "./CardPersonaje";
import { Carousel, Container } from 'react-bootstrap';
import './Personajes.css';

export default function Personajes() {
    const llavePublica= "3f96a57e3e24a99844fb3f00711e6801"
    const llavePrivada="254359872a1593b73db9e374b4656d49adb0aa25"
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
        if(localStorage.getItem("personajes") === null) {
            setPersonajes("Loading...")
        } else {
            //Fue necesario parsearlo a string y de vuelta a json por que de lo contrario no leía a info que se guardaba de manera correcta
            setPersonajes(JSON.parse(localStorage.getItem("personajes")));
        }}
    else {
      const ts = new Date().getTime().toString();
      const hash = md5(ts +llavePrivada+llavePublica);

      let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${llavePublica}&hash=${hash}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let personajes = data.data.results;
          setPersonajes(personajes);
          localStorage.setItem("personajes", JSON.stringify(personajes));
          console.log(data);
        });
    }
  }, []);
  return (<>
      <h1>Marvel characters</h1>
  <div className="container">

    {personajes && personajes.map((element) => (
      <CardPersonaje
      name={element.name}
        img={element.thumbnail}
        des={element.description}
        comics={element.comics.returned}
        events={element.events.returned}
        series={element.series.returned}
        stories={element.stories.returned}
        date={element.modified}
        key={element.id}
      />))}
  </div></>);
}
