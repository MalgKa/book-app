import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'



//styles

import './Add.css'



function Add() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')
    const [rating, setRating] = useState('')
    const history = useHistory()


    const { postData, data } = useFetch('http://localhost:3004/books', 'POST')


    const handleAdd = (e) => {
        e.preventDefault()
        postData({ title, author, image, desc, rating })
    }

    useEffect(() => {
        if (data) {
            history.push('/')
        }

    }, [data])

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
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
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