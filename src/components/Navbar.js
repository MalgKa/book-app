import { Link } from 'react-router-dom'


//styles
import './Navbar.css'
import Searchbar from './Searchbar'


function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link to='/' className='brand' >
                    <h1>All Books</h1>
                </Link>
                <Searchbar />
                <Link to='/add'>Add Book</Link>
            </nav>
        </div>
    )
}

export default Navbar