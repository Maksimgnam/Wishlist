export interface Wish {

    title: string;
    createdAt: Date;
    isBooked: boolean;
}
export interface WishData{
    id:number,
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
  wishes:[],
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
  id:number,
  title: string;
  isBooked: boolean;
  
}
export interface viewWish{
  id:number,
  title: string;
  isBooked: boolean;
  
}
export interface viewWishListData {
  id:number;
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