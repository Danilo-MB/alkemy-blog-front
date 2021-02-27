import React, { useState, useEffect } from 'react';

/** 
*@author
*@function PostsList
*/

function PostsList(){

  useEffect( () => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const items = await data.json();
    console.log(items);
    setItems(items);
  }

  return(
    <div>
        <table className="table">
        <thead>
          <tr>
            <th>Titulo</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead> 
        <tbody>
          {items.map( item =>  
          <tr>
            <td>{item.title}</td>
            <td>
                <a href={'/posts/' + item.id}>Detalle</a>
            </td>
            <td>
                <a href={'/posts/' + item.id}>Editar</a>
            </td>
            <td>
              <a>Eliminar</a>
            </td>
          </tr>
          )}
        </tbody> 
        </table>
    </div>
  )
}

export default PostsList;



