import { createContext } from 'react';


const Context = createContext({
    posts: [],
    isLoading: true
});

export default Context;