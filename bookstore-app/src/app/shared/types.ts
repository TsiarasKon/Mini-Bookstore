/** 
 * This interface is an attempted amalgamation between the fields shown in the mock-ups
 * and the test data given, since there exist quite a few discrepancies between them.abs
 */ 
export interface IBook {
    id?: number,
    isbn13: string,
    isbn10?: string,
    title: string,
    authors: string[],
    publishedYear: number,
    publisher: string,
    pages: number,
    description: string,
    imageURI?: string, 
    categories: string[],
    rating?: number,
}
