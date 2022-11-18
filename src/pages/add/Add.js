import { useState } from 'react'



//styles

import './Add.css'



function Add() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [img, setImg] = useState('')
    const [desc, setDesc] = useState('')
    const [rating, setRating] = useState('')

    const handleAdd = (e) => {
        e.preventDefault()


    }

    return (
        <div className='add'>
            <h2 className="page-title">Add new book</h2>
            <form onSubmit={handleAdd}>

                <label>
                    <span>Book title:</span>
                    <input type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>

                <label>
                    <span>Author:</span>
                    <input type="text"
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                        required
                    />
                </label>

                <label>
                    <span>Img url:</span>
                    <input type="text"
                        onChange={(e) => setImg(e.target.value)}
                        value={img}
                        required
                    />
                </label>

                <label>
                    <span>Description:</span>
                    <textarea
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                        required
                    />
                </label>

                <label>
                    <span>Rating:</span>
                    <input type="number"
                        onChange={(e) => setRating(e.target.value)}
                        value={rating}
                        required
                    />
                </label>
                <button className='btn'>Add</button>
            </form>
        </div>
    )
}

export default Add