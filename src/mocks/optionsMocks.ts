const optionBruschetta =
  require("../assets/options/bruschetta.jpg") as string;
const optionPasta =
  require("../assets/options/pasta.jpg") as string;
  const optionDessert =
  require("../assets/options/dessert.jpg") as string;
const optionDrinks =
  require("../assets/options/drinks.jpg") as string;
  const optionWineLetter =
  require("../assets/options/wine_letter.jpg") as string;
  const optionOthers =
  require("../assets/options/other.jpg") as string;

export const mocks: Mock[] = [
  {
    "src": optionBruschetta,
    "title": "Appetizers"
  },
  {
    "src": optionPasta,
    "title": "Pasta"
  },
  {
    "src": optionDessert,
    "title": "Dessert"
  },
  {
    "src": optionDrinks,
    "title": "Drinks"
  },
  {
    "src": optionOthers,
    "title": "Others"
  },
  {
    "src": optionWineLetter,
    "title": "Wine Letter"
  },
]

type Mock = {
  src : string;
  title: string;
}
