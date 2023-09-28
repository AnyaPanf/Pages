import React from 'react'

export const Card = ({ id, bookImg, title, handleAddToList }) => {

    return (
        <div className='books__card' id={id}>
            <div className='book__img'>
                <img src={bookImg} />
            </div>
            <div className='book__info'>
                <p className='book__title'>{title}</p>
                <button type='button' className='book__btn'>Add to list</button>
            </div>
        </div>
    )
}
