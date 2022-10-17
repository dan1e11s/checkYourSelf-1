import React, { useState } from 'react'

const Create = ({ addCard }) => {

    const [createImg, setCreateImg] = useState('');
    const [createTitle, setCreateTitle] = useState('');

    function create() {
        if(!createImg || !createTitle) {
            alert('Some inputs are empty!')
            return;
        };
        
        let newCard = {
            id: Date.now(),
            image: createImg,
            title: createTitle
        };

        addCard(newCard);

        setCreateImg('');
        setCreateTitle('');
    }
  return (
    <>
        <input type="text" placeholder="image url" onChange={(e) => setCreateImg(e.target.value)} value={createImg} />
        <br /><br />
        <input type="text" placeholder="title" onChange={(e) => setCreateTitle(e.target.value)} value={createTitle} />
        <br /><br />
        <button onClick={create}>Add</button>
    </>
  )
}

export default Create