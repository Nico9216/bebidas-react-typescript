import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";

//Este sera el store principal, donde declararemos los slices (otros store)
export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({ //...a crea uan copia de todos los argumentos (set,get,api)
    ...createRecipesSlice(...a)
})))