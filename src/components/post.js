import React, { useState, useEffect } from 'react';

/** 
*@author
*@function Post
*/

function Post({match}){

    useEffect( () => {
        fetchItem();
      }, []
    );
    //console.log(match);

    const [item, setItem] = useState({});  

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
    };
    //console.log(item);

//
    return(
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.body}</p>
            <h6>Creado por (user Id): {item.userId}</h6>
        </div>
        </div>
  
    )
}

export default Post;

// const Post = (props) => {
//     return(


 
//     )
// }

