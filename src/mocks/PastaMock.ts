const pastaZucchini =
  require("../assets/menu/pasta/zucchini.jpg") as string;

const fetuchineShrimpMushroom =
  require("../assets/menu/pasta/fetuchine_shrimp_mushroom.jpg") as string;

const homemadeHerbsTomatoes =
  require("../assets/menu/pasta/homemade_herbs_tomatoes.png") as string;

const pastaBasilGourmet =
  require("../assets/options/pasta.jpg") as string;

export const PastaMock = 
    {
        name: "Pasta",
        image: pastaZucchini,
        options: [
            {
                name: "Pasta Zucchini",
                description: "Tagliatelle with chease and succhini sauce.",
                value: 22,
                image: pastaZucchini
            },
            {
                name: "Fettuccine Shrimp Mushroom",
                description: "Fettucine white cream sauce with shrimp mushroom.",
                value: 25,
                image: fetuchineShrimpMushroom
            },
            {
                name: "Homemade Herbs Tomatoes",
                description: "Homemade pasta with herbs tomatoes.",
                value: 10,
                image: homemadeHerbsTomatoes
            },
            {
                name: "Pasta Basil Gourmete",
                description: "Homemade past with basil and tomate cherry.",
                value:18,
                image : pastaBasilGourmet
            }
        ]
    };
