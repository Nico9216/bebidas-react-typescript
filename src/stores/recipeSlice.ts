import { StateCreator } from "zustand"
import { getCategories, getRecipes,getRecipeById } from "../services/RecipeService"
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"
import { FavoritesSliceType } from "./favoritesSlice"

export type RecipesSliceType = {
    categories: Categories,
    drinks:Drinks,
    selectedRecipe:Recipe,
    modal:boolean,
    fetchCategories: () => Promise<void>,
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>,
    selectRecipe: (id:Drink['idDrink']) => Promise<void>
    closeModal: () => void
}
                                                                                                                              //Slice Anidados  
export const createRecipesSlice : StateCreator<RecipesSliceType & FavoritesSliceType, [], [], RecipesSliceType> = (set) =>({ //Esto lo hago para que desde favoritesSlice pueda acceder a los metodos de recipeSlice
    categories : {
        drinks:[]
    },
    drinks:{
        drinks:[]
    },
    selectedRecipe:{} as Recipe,
    modal:false,
    fetchCategories: async () => {
       const categories = await getCategories()
       set({
            categories
       })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe,
            modal:true
        })
    },
    closeModal: () => {
        set({
            modal:false,
            selectedRecipe: {} as Recipe
        })
    }
})