import { CartModel } from "../shopping/cart.model"

export interface PurchaseModel{

    purchaseID : number,
    userID: number,
    totalCost: number,
    purchaseDate: string,
    shoppingCartItemPojos: CartModel[]
}