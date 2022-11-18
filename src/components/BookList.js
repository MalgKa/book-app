import { Link } from 'react-router-dom'

//styles
import './BookList.css'




function BookList({ books }) {

    return (
        <div className="book-list">
            {books.map((book) => {
                return (
                    <div key={book.id} className='card'>
                        <h2 >{book.title}</h2>
                        <h3>{book.author}</h3>
                        <img src={book.image} alt="" />
                        <p>{book.desc.substring(0, 100)}...
                            <Link to={`/books/${book.id}`}>Read more</Link></p>
                        <p>Rating {book.rating}</p>
                    </div>)

            })}
        </div>
    )

}


export default BookList



