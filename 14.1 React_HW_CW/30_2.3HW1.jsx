// 1. Given an array of objects, write a React component to display the total price of smartphones.

const SmartPhone = ({phones})=>{
  const totalPrice = phones.reduce((acc, cur)=> acc+ cur.price , 0);
  return (
    <>
    <h3>Price of all Smartphones</h3>
    {totalPrice.toFixed(2)}
    </>
  )
}

export default function App(){

  const smartphones = [
    { id: 1, brand: "Samsung", price: 799.99 },
    { id: 2, brand: "iPhone", price: 999.99 },
    { id: 3, brand: "Google Pixel", price: 899.99 },
  ];
  return (
    <>
    <SmartPhone phones = {smartphones} />
    </>
  )
}


