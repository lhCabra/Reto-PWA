import React from 'react'
import './CardComponent.css';
import { Card, Button } from 'react-bootstrap';
export const CardPersonaje = ({ name, img,des, comics, events,series,stories ,date}) => {
  return (
      <div className='col-sm-2 container'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          <div>Description: {des}</div>
            <div>Featured comics: {comics}</div>
            <div>Events: {events}</div>
            <div>Series: {series}</div>
            <div>Stories: {stories}</div>
            <div>Last modification: {date}</div>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  );

}