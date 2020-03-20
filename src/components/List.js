import React, { useContext } from 'react';
import Context from '../management/context';


const List = () => {

    const { state: { posts }, dispatch } = useContext(Context);

    const onAdd = () => dispatch({ type: "POSTS", payload: [1,2,3] });

    return (
        <>
            <p>Listado</p>
            <p>Total: {posts.length}</p>
            <ul>
                {
                    posts.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
            <div>
                <button type="button" onClick={onAdd}>Cambiar</button>
            </div>
        </>
    )
};


export default List;