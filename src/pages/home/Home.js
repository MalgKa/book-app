import { useFetch } from '../../hooks/useFetch'


//styles
import './Home.css'

//components

import BookList from '../../components/BookList'


function Home() {
    const { data, isPending, error } = useFetch('http://localhost:3004/books');


    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <BookList books={data} />}
        </div>
    )
}

export default Home