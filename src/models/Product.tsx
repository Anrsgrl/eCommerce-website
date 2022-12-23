export interface IProduct {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  image: string;
}

export interface ICartProduct {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  image: string;
  cartQuantity: number;
  cartTotalAmount: number;
}
