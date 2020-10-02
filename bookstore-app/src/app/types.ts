export interface IBookDetails {
    isbn: string,
    title: string,
    subtitle: string,
    author: string,
    published: string,
    publisher: string,
    pages: number,
    description: string,
    website: string,
    imageURI?: string, 
}

export interface IBook {
    bookDetails: IBookDetails,
    rating: number,
}
