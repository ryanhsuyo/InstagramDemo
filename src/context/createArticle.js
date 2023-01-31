import React, {createContext } from 'react';
import { useState } from 'react';


const createArticleContext = createContext();

const CreateArticleProvider = (props) => {
    const [isCreateArticleVisible, setIsCreateArticleVisible] = useState(false);

    const toggleCreateArticle = () => {
        setIsCreateArticleVisible(!isCreateArticleVisible);
    }

    return (
        <createArticleContext.Provider value={{ isCreateArticleVisible, toggleCreateArticle}}>
            {props.children}
        </createArticleContext.Provider>
    )
}

export default CreateArticleProvider