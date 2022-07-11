const bruschetta =
  require("../assets/menu/appetizers/bruschetta.jpg") as string;
  const chesseBord =
  require("../assets/menu/appetizers/chesse_bord.jpg") as string;
  const fetuchineShrimpMushroom =
  require("../assets/menu/pasta/fetuchine_shrimp_mushroom.jpg") as string;
export const OrdersMock = {
    total : [
        {
            name: "Traditional Bruschetta",
            value: 22,
            amount: 1,
            image: bruschetta
        },
        {
            name: "Cheese Board",
            value: 25,
            amount: 1,
            image: chesseBord 
        },
        {
            name: "Fettuccine Shrimp Mushroom",
            value: 25,
            amount: 2,
            image: fetuchineShrimpMushroom
        }
    ],
};
