export interface Genre{
    id:number;
    genre:string
}

export interface Author{
    id:number;
    surname:string;
    name:string;
    birth:string
    middleName:string;
}

export interface Book {
    id:number;
    author:string;
    title:string;
    genre:string;
    pages:string;
    authorId:number;
    genreId:number
}