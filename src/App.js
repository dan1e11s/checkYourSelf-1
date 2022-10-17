import React, { useState } from 'react';
import Task1 from './components/Task1';
import Card from './components/Card';
import Create from './components/Create';

const App = () => {

    const [styleNone, setStyleNone] = useState({display: 'block'});

    const [cards, setCards ] = useState([
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80',
        title: 'Image-1'
      },
      {
        id: 2,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
        title: 'Image-2'
      }
    ]);

  function deleteBtn() {
    setStyleNone({display: 'none'});
  };

  function addCard(newCard) {
    let newCards = [...cards];
    newCards.push(newCard);
    setCards(newCards);
  }

  function deleteCard(id) {
    let newCards = [...cards];
    newCards = newCards.filter(item => item.id !== id);
    setCards(newCards);
  }

  return (
    <>
      <Create addCard={addCard} />
      <br /><br />
      <Task1 deleteBtn={deleteBtn} styleNone={styleNone} />
      <br /><br />
      <Card cards={cards} deleteCard={deleteCard}/>
    </>
  )
}

export default App