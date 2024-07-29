export interface Wish {

    title: string;
    createdAt: Date;
    isBooked: boolean;
    grade:string,
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
    userId:string,
    private: boolean,
    password:string
}
export interface WishListData {
  _id:any;
  title: string;
  description:string;
  createdAt: Date;
  wishes: WishData[],
   userId:string,
   private: boolean,

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
  grade:string;

  isBooked: boolean;
  
}
export interface viewWish{
  wishId:string
  title: string;
  isBooked: boolean;
  grade: string
  
}
export interface viewWishListData {
  wishId:string
  title: string;
  description:string,
  wishes:viewWishData[],
  private: boolean,
  password:string
}
export  interface User {
  uid: any,
  displayName: string,
  email: string,
  
}

export  interface Auth {
  isChange:()=>void
  
}