
function Item({name, quantity,category,price,onClick}){
  return(
    <li onClick={onClick} className="border border-gray-600 rounded p-4 mb-4 ml-4 mr-4 bg-emerald-100 hover:-translate-y-1  hover:shadow-lg transition duration-1000">
      <h4 className="font-bold text-lg">{name}</h4>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
      <p>Price: ${Number(price).toFixed(2)}</p>
    </li>
    );
} 

export default Item;