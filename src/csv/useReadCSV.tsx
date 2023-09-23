type Recipes = {
    recipe_id: string,
    recipe_name: string,
    category: string,
    rating: string,
    cook_time: string,
    servings: string,
    category_sub: string,
    tod: string
}

type Ingredients = {

}

type Instructions = {

}

type Values = {
    recipes: Recipes[]
}

const useReadCSV = () => {
    fetch('raw.githubusercontent.com/chriskmann32/cookbook-ghpage/main/recipes.csv')
        .then(res => console.log(res))
}

export default useReadCSV

