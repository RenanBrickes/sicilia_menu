const bruschetta =
  require("../assets/menu/appetizers/bruschetta.jpg") as string;
  const chesseBord =
  require("../assets/menu/appetizers/chesse_bord.jpg") as string;
  const shrimpGarlic =
  require("../assets/menu/appetizers/shrimp_in_garlic_and_oil.jpg") as string;

export const menuMock = 
    {
        name: "Appetizers",
        image: bruschetta,
        options: [
            {
                name: "Traditional Bruschetta",
                description: "Bruschetta on italian bread with tomato brasil, and olive oil.",
                value: 22,
                image:bruschetta
            },
            {
                name: "Cheese Board",
                description: "Cheese Board with parmesan, mozzarella, brie, provolone and gorgozola.",
                value: 25,
                image:chesseBord
            },
            {
                name: "Shrim in Garlic and Oil",
                description: "Shrim sautéed in farlic and oil with tomatoes and corn.",
                value: 10,
                image: shrimpGarlic
            }
        ]
    };
