export interface ProductResponse {
  Id:number;
  name:string;
  price:number;
  discountPrice?:number | null;
  Image:string
}