import React from 'react';

const Card = ({ cards, deleteCard }) => {
    let style = {
        width: '250px',
        // height: '280px',
        border: '2px solid black',
        marginBottom: '20px',
        padding: '5px'
    }

   

  return (
    <>
        {
            cards.map((item) => (
            <div key={item.id} style={style}>
                <img src={item.image} width='250px'/>
                <h2>{item.title}</h2>
                <button onClick={() => deleteCard(item.id)}>DELETE</button>
            </div>
            ))
    }
    </>
  )
}

export default Card