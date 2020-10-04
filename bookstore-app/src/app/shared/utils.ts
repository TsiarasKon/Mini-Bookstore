import { IBook } from './types';

const getRandomInt = (min: number, max: number): number => {
    return Math.round(Math.random() * (max - min) + min);
};

// Generates a random rating in range [1, 5], allowing halves (e.g. 3.5)
const generateRandomRating = (): number => {
    return getRandomInt(2, 10) / 2.0;
};

export const generateBook = (book): IBook => {
    return {
        isbn13: book.isbn,
        title: book.title,
        authors: [book.author],
        publishedYear: new Date(book.published).getFullYear(),
        publisher: book.publisher,
        pages: book.pages,
        description: book.description,
        imageURI: `assets/img/test-book-covers/${book.isbn}.jpg`,
        categories: ['Programming'],
        rating: generateRandomRating(),
    };
};

export const includesCaseIns = (str1: string, str2: string): boolean => {
    return str1.toLowerCase().includes(str2.toLowerCase());
};

// Generator function to split an array into chunks
export function* chunks(arr, n) {
    for (let i = 0; i < arr.length; i += n) {
        yield arr.slice(i, i + n);
    }
}
