import { IBook } from './types';

const getRandomInt = (min: number, max: number): number => {
    return Math.round(Math.random() * (max - min) + min);
}

// Generates a random rating in range [1, 5], allowing halves (e.g. 3.5)
const generateRandomRating = (): number => {
    return getRandomInt(2, 10) / 2.0;
}

export const generateBook = (book: Partial<IBook>): IBook => {
    return {
        ...book,
        rating: generateRandomRating(),
        categories: []
    } as IBook
}
