import React from 'react';
import { useCart } from 'react-use-cart';

const List = () => {
  const { items, removeItem, emptyCart } = useCart();

  return (
    <div>
      
      <h1 className="text-center">Favorite List</h1>
      {items.map((movie) => (
        <div key={movie.id} className="fav-item">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="item-actions">
            <button onClick={() => removeItem(movie.id)}>Remove</button>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <div className="cart-actions">
          <button onClick={() => emptyCart()}>Empty Cart</button>
        </div>
      )}
    </div>
  );
};

export default List;


// import React from 'react';
// import { useCart } from 'react-use-cart';

// const List = () => {

//   const { items, isEmpty, totalUniqueItems, updateItemQuantity, totalItems, cartTotal, removeItem, emptyCart } = useCart();

//   return (
//     <div>
//       <h1 className="text-center">Favourite list</h1>
//       {items.map((movie)=>{
//           return(
//             <div className="fav">
//             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
//             </div>
//           )
//       })}
//     </div>
//   );
// }

// export default List;
