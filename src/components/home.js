import React from 'react';
import PostsList from './postsList';
//import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';

/** 
*@author
*@function Home
*/

const Home = (props) => {
    return(
        <div>
            <Button href="/create">Crear Post</Button>
            <PostsList/>
        </div>
 
    )
}

//ReactDOM.render(<PostsList/>, document.getElementById('root'));
export default Home;