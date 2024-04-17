import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Javascript' ]);

  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory)) return;

    setCategories([ newCategory, ...categories ])
    // setCategories(cat => [...cat, 'Javascript'])
  }

  return (
    <>
        {/* Titulo */}
        <h1>Gif Expert App</h1>

        {/* Input */}
        <AddCategory 
          onNewCategory = { (value) => onAddCategory(value) }
        />

        {/* Listado de Gifs */}
        
        {
          categories.map( category => (
              <GifGrid 
                key={ category } 
                category={ category }
              />
          ))
        }
    </>
  )
}
