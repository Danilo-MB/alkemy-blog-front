import React from 'react';
import PostsList from './postsList';
//import ReactDOM from 'react-dom';

/** 
*@author
*@function Home
*/

const Home = (props) => {
    return(
        <div>
            <PostsList/>
        </div>
 
    )
}

//ReactDOM.render(<PostsList/>, document.getElementById('root'));
export default Home;