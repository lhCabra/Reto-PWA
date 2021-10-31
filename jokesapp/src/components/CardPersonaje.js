import React from 'react'
import './CardComponent.css';
import { Card } from 'react-bootstrap';
export const CardPersonaje = ({ name, img,des, comics, events,series,stories ,date}) => {
  return (
      <Card className="text-center">
    <Card.Header className="titulo">{name}</Card.Header>
    <Card.Body>
    <img
        className="d-block w-100"
        src={`${img.path}/landscape_amazing.${img.extension}`}
        alt={name}
      />
       <Card.Text>
          <p className="contenido">
            <div>{des}</div>
            <div> Featured comics: {comics}</div>
            <div> Events: {events}</div>
            <div> Series: {series}</div>
            <div>  Stories: {stories}</div>
            </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted fecha">Last modification: {date}</Card.Footer>
  </Card>
      );

}