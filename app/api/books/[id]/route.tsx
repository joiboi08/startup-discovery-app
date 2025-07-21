// for dynamic routes using specific [id]

import books from "../../db";



export async function PUT( request: Request, context: { params: { id: string }} ) {
// updating existing book details
    const id = +context.params.id;  
    // shorthand for: Number(context.params.id); // convert string to number

    const book = await request.json();

    const index = books.findIndex( (book) => {
        return book.id === id;
    } ); // returns index of matched book

    books[index] = book; // update book details

    return Response.json(books);
}


export async function DELETE( request: Request, context: { params: { id: string } } ) {

    // deleting book with matched id
    const id = +context.params.id; // convert string to number

    const index = books.findIndex( (b) => {
        return b.id === id;
    }); 

    books.splice(index, 1); // remove book from array

    return Response.json(books);
}