import React from 'react';

function AddProduct() {
    function Add(){
        const header = document.getElementById('header').value
        const price = document.getElementById('price').value
        const dataProduct = {
            header: header,
            price: price
        }
        console.log(dataProduct)

        const api = 'http://localhost:9001/addproduct'
        
        fetch(api,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataProduct)
        })
        .then(result => result.json())
        .then((result) => {
          console.log(result)
        })
        window.location.href = "http://localhost:3000/";
        
    }    
  return (
    <>
        <h1>Добавление товара</h1>
        <input id='header' type='text' placeholder='Название' />
        <input id='price' type='text' placeholder='Цена' />
        <button onClick={Add} >Добавить</button>
    </>
  );
}

export default AddProduct;