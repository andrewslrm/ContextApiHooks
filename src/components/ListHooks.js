import React from 'react';
import { usePosts } from '../management/customHooks';

const ListHooks = () => {

    const [posts] = usePosts();

    return (
        <>
            <p>Listado</p>
            <p>Total: {posts.length}</p>
            <ul>
                {
                    posts.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </>
    )
};


export default ListHooks;