import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice";
//Este sera el store principal, donde declararemos los slices (otros store)
export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a) => ({ //...a crea uan copia de todos los argumentos (set,get,api)
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a)
})))