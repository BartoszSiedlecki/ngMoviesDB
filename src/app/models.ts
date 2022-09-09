export interface Movie{
    _id: string;
    titleOriginal: string;
    release: string;
    genres: Array<Genre>;
    rating: string;
    description: string;
    image: string;
    year: number;
}

export interface APIResponse<T>{
    results: Array<T>;
}

interface Genre{
    name: string;
}