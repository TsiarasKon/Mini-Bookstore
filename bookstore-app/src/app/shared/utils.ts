import { IBook } from './types';

const getRandomInt = (min: number, max: number): number => {
    return Math.round(Math.random() * (max - min) + min);
}

// Generates a random rating in range [1, 5], allowing halves (e.g. 3.5)
const generateRandomRating = (): number => {
    return getRandomInt(2, 10) / 2.0;
}

export const generateBook = (book): IBook => {
    return {
        isbn13: book.isbn,
        title: book.title,
        authors: [book.author],
        publishedYear: new Date(book.published).getFullYear(),
        publisher: book.publisher,
        pages: book.pages,
        description: book.description,
        // imageURI: TODO,
        categories: [],
        rating: generateRandomRating(),
    }
}
