export interface IAddress {
  street: string,
  city: string,
  zipcode: string,
}

export interface IUser {
  id: string | number,
  name: string,
  email: string,
  address: IAddress
}

export interface ITodo {
  id: number | string
  title: string
  completed: boolean
}