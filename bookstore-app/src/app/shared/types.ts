/** 
 * This interface is an attempted amalgamation between the fields shown in the mock-ups
 * and the test data given, since there exist quite a few discrepancies between them.abs
 */ 
export interface IBook {
    isbn: string,       // isbn13
    isbn10?: string,
    title: string,
    subtitle?: string,
    author: string,
    published: string,      // date/year
    publisher: string,
    pages: number,
    description: string,
    website?: string,
    imageURI?: string, 
    categories: string[],
    rating?: number,
}
