export interface BaseCategory {
  catName: string;
  price: number;
  description: string;
  image: string;
}


export interface Category extends BaseCategory {
    id: number
}