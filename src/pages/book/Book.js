import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch'


//styles
import './Book.css'



function Book() {
    const { id } = useParams()
    const url = 'http://localhost:3004/books/' + id
    const { error, isPending, data: book } = useFetch(url)

    return (
        <div className="book">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {book && (
                <>
                    <h2 className="page-title">{book.title}</h2>
                    <h2 className="page-title">{book.author}</h2>
                    <p>{book.desc}</p>
                </>
            )}
        </div>
    )
}

export default Book