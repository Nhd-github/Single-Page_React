
import React, { Component } from "react";
import Book from '../Book/Book'


export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            books: [],
            title: '',
            author: '',
            year: '',
        }
        this.titleHandler = this.titleHandler.bind(this)
        this.authorHandler = this.authorHandler.bind(this)

        this.yearHandler = this.yearHandler.bind(this)

        this.submitHandler = this.submitHandler.bind(this)
    }
    submitHandler(event) {
        event.preventDefault()
        //destructing
        let { title, author, year } = this.state
        if (title && author && year) {
            let newBook = {
                id: this.state.books.length + 1,
                title,
                author,
                year
            }

        this.setState({
            books:[...this.state.books,newBook]
        })
       this.setState({
        title:'',
        author:'',
        year:'',
       })   


        }
    }
    titleHandler(event) {
        this.setState({
            title: event.target.value
        })
    }
    authorHandler(event) {
        this.setState({
            author: event.target.value
        })
    }
    yearHandler(event) {
        this.setState({
            year: event.target.value
        })
    }





    render() {
        return (
            <div className="container mt-4">
                <h1 className="display-4 text-center">
                    <p className="text-warning bg-dark">ReactJs BookList</p>
                </h1>
                <form id="book-form" onSubmit={this.submitHandler} autocomplete="off" style={{ display: 'flex', flexDirection: 'column', direction:'rtl' }}>
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input type="text"value={this.state.title} onChange={this.titleHandler} id="title" className="form-control" />
                    </div>

                    <div className="form-group" >
                        <label for="author">Author</label>
                        <input type="text" id="author" value={this.state.author} onChange={this.authorHandler}  className="form-control" />
                    </div>

                    <div className="form-group">
                        <label for="year">Year</label>
                        <input type="text" id="year" value={this.state.year} onChange={this.yearHandler}  className="form-control" />
                    </div>
                    <input
                        type="submit"
                        value="Add Book"
                        className="btn btn-warning btn-block add-btn d-flex align-self-center justify-self-center"
                    />
                </form>
                <table className="table table-striped mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Author</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">
                        {this.state.books.map(book=>(

                            <Book {...book} key={book.id}/>
                        )

                        )

                        }
                    
                    </tbody>
                </table>
            </div>

        )
    }
}