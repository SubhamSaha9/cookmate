export default {
    GENERATE_RECIPE_OPTION_PROMPT: `:Depends on user instruction create 3 different Recipe variant with Recipe Name with Emoji,
    2 line description and main ingredient list in JSON format with field recipeName, description, ingredients (without size) only`,
    GENERATE_COMPLETE_RECIPE_PROMPT: `
    - As per recipe Name and Description, Give me all list of ingredients as ingredient ,
    - emoji icons for each ingredient as icon, quantity as quantity, along with detail step by step recipe as steps
    - Total Calories as calories (only number), Minutes to cook as cookTime and serving number as serveTo
    - relastic image Text prompt as per reciepe as imagePrompt
    - Give me category List for recipe from [Breakfast, Lunch, Dinner, Chinese, Healthy, Fast Food, Dessert, Custard, Drinks, Paneer, Biryani, South Indian] as category
    - Give me response in JSON format only`
}