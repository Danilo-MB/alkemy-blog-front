import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    //console.log(items);
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
                <button href={'/posts/' + item.id}>Detalle</button>
            </td>
            <td>
                <button href={'/edit/' + item.id}>Editar</button>
            </td>
            <td>
              <button onClick={ () => {
                axios.delete(`https://jsonplaceholder.typicode.com/posts/${item.id}`);
                alert("Ha sido eliminado el Post # " + item.id);
                }}
                >Eliminar</button>
            </td>
          </tr>
          )}
        </tbody> 
        </table>
    </div>
  )
}

export default PostsList;



