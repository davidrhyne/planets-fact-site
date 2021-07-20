import React, {useState, useContext, createContext } from 'react'

const CategoryContext = createContext()
const CategoryUpdateContext = createContext()

//  hook to provide access to the current planet value
export function useCategory() {
    return useContext(CategoryContext)
}

// hook to provide access to updating the current planet value
export function useCategoryUpdate() {
    return useContext(CategoryUpdateContext)
}

export function CategoryProvider({children}) {

    const [category, setCategory] = useState('Overview')

    function updateCategory(newCategory) {
        setCategory(newCategory)
    }

    return (
        <CategoryContext.Provider value={category}>
            <CategoryUpdateContext.Provider value={updateCategory}>
                {children}
            </CategoryUpdateContext.Provider>
        </CategoryContext.Provider>
    )
}