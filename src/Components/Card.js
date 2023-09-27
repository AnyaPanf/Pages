import React from 'react'

export const Card = ({ key, bookImg, title, handleAddToList }) => {

    const handleAdd = () => {
        handleAddToList(key)
    }

    return (
        <div className='books__card' key={key}>
            <div className='book__img'>
                <img src={bookImg} />
            </div>
            <div className='book__info'>
                <p className='book__title'>{title}</p>
                <button type='button' className='book__btn' onClick={handleAdd}>Add to list</button>
            </div>
        </div>
    )
}
