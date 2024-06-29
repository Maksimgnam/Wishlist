export interface Wish {

    title: string;
    createdAt: Date;
    isBooked: boolean;
    wishId:string
}
export interface WishData{
    id:string,
    title: string;
    createdAt: Date;
    isBooked: boolean;
   
  }


  export interface WishList {
    title: string;
    description:string;
    createdAt: Date;
    userId:string
}
export interface WishListData {
  _id:any;
  title: string;
  description:string;
  createdAt: Date;
  wishes: WishData[],
   userId:string
}


export interface Params{
  params:{
    id:any
    uid:any

  }


}
export interface ViewParams{
  params:{
    id:any
    uid:any,
    wishId:string

  }


}

export interface viewWishData{
  _id:string,
  wishId:string
  title: string;
  isBooked: boolean;
  
}
export interface viewWish{
  wishId:string
  title: string;
  isBooked: boolean;
  
}
export interface viewWishListData {
  wishId:string
  title: string;
  wishes:viewWishData[]
}
export  interface User {
  uid: any,
  displayName: string,
  email: string,
  
}

export  interface Auth {
  isChange:()=>void
  
}