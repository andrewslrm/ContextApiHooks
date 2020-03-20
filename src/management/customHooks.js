import { useContext, useEffect } from 'react';
import Context from './context';


export const usePosts = () => {
    const { state: { posts }, dispatch } = useContext(Context);

    useEffect(() => {
        dispatch({ type: "POSTS", payload: [1,2,3,4,5,6,7,8,9,10] });
    },[])

    return [posts];
}