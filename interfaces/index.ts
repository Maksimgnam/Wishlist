export interface Wish {
    title: string;
    createdAt: Date;
    isBooked: boolean;
}
export interface WishData{
    _id:number,
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

export interface viewWishData{
  _id:any,
  title: string;
  isBooked: boolean;
  
}
export interface viewWish{
  title: string;
  isBooked: boolean;
  
}
export interface viewWishListData {
  _id:any;
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