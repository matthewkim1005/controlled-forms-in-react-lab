import './App.jsx'
import { useState } from 'react';

const Bookshelf = (props) => {
    const [newBook, setNewBook] = useState(
        { title: '', author: '' }
    )
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([ ...books, newBook ])
        setNewBook({title: '', author: ''});
    }

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title: </label>
                        <input
                            id="title"
                            name="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="author">Author: </label>
                        <input
                            id="author"
                            name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Add Book</button>
                    </form>
                </div>
                <div className="bookCardsDiv">
                    <ul>
                        {books.map((book) =>
                            <li className="card">
                                <p>{book.title}</p>
                                <p>{book.author}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Bookshelf;