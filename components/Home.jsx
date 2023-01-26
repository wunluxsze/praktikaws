import React from 'react';
import uuid from 'react-uuid';

function Home(login) {
  let initProds = [
    { id: uuid(), name: 'я', price: 50, description: 'норм штука' },
    { id: uuid(), name: 'ты', price: 70, description: 'отличная штука' },
    { id: uuid(), name: 'он', price: 122220, description: 'дорогая штука' },
  ];

  let res = initProds.map(function (item, login) {
    return (
      <p key={item.id}>
        <p>название: {item.name}</p>
        <p>цена: {item.price}</p>
        {/* сделать два мапа чтобы при аккаунте True выводился один мап, а если нет то другой */}
        <p>описание: {item.description}</p>
        {login == true && <button>добавить в корзину</button>}
      </p>
    );
  });
  return <div>{res}</div>;
}

export default Home;
