const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 50010;

app.use(cors());
app.use(express.json());

const burgermenu = [
  {
    id: 1,
    name: "Beef-Burger",
    unitPrice: 95,
    imageUrl: "https://foods-images-3.onrender.com/burger/beefbur-1.jpg",
    ingredients: [
      "Ground beef",
      "Classic hamburger buns",
      "Cheddar",
      "Lettuce leaves ",
      "Ketchup",
    ],
    soldOut: false,
  },
  {
    id: 2,
    name: "Beef-Burger",
    unitPrice: 95,
    imageUrl: "https://foods-images-3.onrender.com/burger/beefbur-2.jpg",
    ingredients: [
      "Pre-made patties",
      "Brioche buns",
      "Swiss",
      "Sliced tomatoes",
      "",
    ],
    soldOut: false,
  },
  {
    id: 3,
    name: "Beef-Burger",
    unitPrice: 95,
    imageUrl: "https://foods-images-3.onrender.com/burger/beefbur-3.jpg",
    ingredients: [
      "Ground beef, seasoned with salt, pepper, and optional spices like garlic powder, onion powder, or smoked paprika",
      "Pretzel buns",
      "Pepper Jack",
      "Sliced red onions or caramelized onions",
      "BBQ sauce",
    ],
    soldOut: false,
  },
  {
    id: 4,
    name: "Beef-Burger",
    unitPrice: 95,
    imageUrl: "https://foods-images-3.onrender.com/burger/beefbur-5.jpg",
    ingredients: [
      "Beef Patties Pre-made ",
      "Whole wheat buns",
      "Blue cheese (crumbled or a slice)",
      "Pickles (slices or spears)",
      "Chipotle mayo",
    ],
    soldOut: false,
  },
  {
    id: 5,
    name: "Beef-Burger",
    unitPrice: 95,
    imageUrl: "https://foods-images-3.onrender.com/burger/beefbur-5.jpg",
    ingredients: [
      "Ground beef",
      "Whole wheat buns",
      "Blue cheese ",
      "Bacon (crispy strips)",
      "Sautéed mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 6,
    name: "Beef-Burger",
    unitPrice: 95,
    imageUrl: "https://foods-images-3.onrender.com/burger/beefbur-6.jpg",
    ingredients: [
      "Ground beef",
      "Whole wheat buns",
      "Cheddar",
      "Sautéed mushrooms",
      "BBQ sauce",
    ],
    soldOut: false,
  },
  {
    id: 7,
    name: "Beef-Burger",
    unitPrice: 95,
    imageUrl: "https://foods-images-3.onrender.com/burger/beefbur-7.jpg",
    ingredients: [
      "Pre-made patties",
      "Sliced avocado",
      "Swiss",
      "Brioche buns",
      "Potato wedges",
    ],
    soldOut: false,
  },
  {
    id: 8,
    name: "Beef-Burger",
    unitPrice: 95,
    imageUrl: "https://foods-images-3.onrender.com/burger/beefbur-8.jpg",
    ingredients: [
      "Ground beef",
      "Sliced tomatoes",
      "Ketchup",
      "Mayonnaise",
      "Coleslaw",
    ],
    soldOut: false,
  },
  {
    id: 9,
    name: "Beef-Burger",
    unitPrice: 95,
    imageUrl: "https://foods-images-3.onrender.com/burger/beefbur-9.jpg",
    ingredients: [
      "Ground beef",
      "Lettuce leaves ",
      "Cheddar",
      "Sautéed mushrooms",
      "Mayonnaise",
    ],
    soldOut: false,
  },
  {
    id: 10,
    name: "Beef-Burger",
    unitPrice: 95,
    imageUrl: "https://foods-images-3.onrender.com/burger/beefbur-10.jpg",
    ingredients: [
      "Ground beef",
      "Pretzel buns",
      "Provolone",
      "Sliced avocado",
      "Bacon (crispy strips)",
    ],
    soldOut: false,
  },
  {
    id: 11,
    name: "Breakfast-Burger",
    unitPrice: 80,
    imageUrl: "https://foods-images-3.onrender.com/burger/breakfast-1.jpg",
    ingredients: [
      "Beef Patty",
      "Ground beef ",
      "Fried egg ",
      "Classic hamburger buns",
      "American cheese",
    ],
    soldOut: false,
  },
  {
    id: 12,
    name: "Breakfast-Burger",
    unitPrice: 80,
    imageUrl: "https://foods-images-3.onrender.com/burger/breakfast-2.jpg",
    ingredients: [
      "Beef Patty",
      "Ground beef ",
      "Cheddar",
      "Brioche buns",
      "Bacon",
    ],
    soldOut: false,
  },
  {
    id: 13,
    name: "Breakfast-Burger",
    unitPrice: 80,
    imageUrl: "https://foods-images-3.onrender.com/burger/breakfast-3.jpg",
    ingredients: [
      "Beef Patty",
      "Classic hamburger buns",
      "Cheddar",
      "Sausage Patty",
      "Sliced jalapeños (for a spicy kick)",
    ],
    soldOut: false,
  },
  {
    id: 14,
    name: "Breakfast-Burger",
    unitPrice: 80,
    imageUrl: "https://foods-images-3.onrender.com/burger/breakfast-4.jpg",
    ingredients: [
      "Beef Patty",
      "Classic hamburger buns",
      "Cheddar",
      "Sausage Patty",
      "Sliced jalapeños (for a spicy kick)",
    ],
    soldOut: false,
  },
  {
    id: 15,
    name: "Breakfast-Burger",
    unitPrice: 80,
    imageUrl: "https://foods-images-3.onrender.com/burger/breakfast-5.jpg",
    ingredients: [
      "chicken",
      "Fried egg ",
      "English muffins",
      "Provolone",
      "Bacon ",
    ],
    soldOut: false,
  },
  {
    id: 16,
    name: "Breakfast-Burger",
    unitPrice: 80,
    imageUrl: "https://foods-images-3.onrender.com/burger/breakfast-6.jpg",
    ingredients: [
      "Egg",
      "American cheese",
      "Sausage Patty",
      "Sliced jalapeños ",
      "Hot sauce (e.g., Sriracha or Cholula)",
      "Gravy (especially sausage gravy for a Southern flair)",
    ],
    soldOut: false,
  },
  {
    id: 17,
    name: "Chicken-Burger",
    unitPrice: 85,
    imageUrl: "https://foods-images-3.onrender.com/burger/chicken-1.jpg",
    ingredients: [
      "Breaded and fried chicken",
      "Brioche buns",
      "Swiss",
      "Lettuce (Romaine, iceberg, or butter lettuce)",
      "Mayonnaise or garlic aioli",
    ],
    soldOut: false,
  },
  {
    id: 18,
    name: "Chicken-Burger",
    unitPrice: 85,
    imageUrl: "https://foods-images-3.onrender.com/burger/chicken-3.jpg",
    ingredients: [
      "Breaded and fried chicken",
      "Whole wheat buns",
      "Cheddar",
      "Sliced tomatoes",
      "Mayonnaise or garlic aioli",
    ],
    soldOut: false,
  },
  {
    id: 19,
    name: "Chicken-Burger",
    unitPrice: 85,
    imageUrl: "https://foods-images-3.onrender.com/burger/chicken-6.jpg",
    ingredients: [
      "Grilled chicken breast",
      "Whole wheat buns",
      "Mozzarella",
      "Sliced avocado",
      "Mayonnaise or garlic aioli",
    ],
    soldOut: false,
  },

  {
    id: 20,
    name: "Chicken-Burger",
    unitPrice: 85,
    imageUrl: "https://foods-images-3.onrender.com/burger/chickenbur-2.jpg",
    ingredients: [
      "Ground chicken patty",
      "Classic hamburger buns",
      "Sliced avocado",
      "Bacon (crispy strips or turkey bacon)",
      "Ketchup",
    ],
    soldOut: false,
  },

  {
    id: 21,
    name: "Chicken-Burger",
    unitPrice: 85,
    imageUrl: "https://foods-images-3.onrender.com/burger/chikcenbur-4.jpg",
    ingredients: [
      "Ground chicken patty",
      "Classic hamburger buns",
      "Sliced avocado",
      "Bacon (crispy strips or turkey bacon)",
      "Ketchup",
    ],
    soldOut: false,
  },

  {
    id: 22,
    name: "Vegan-Burger",
    unitPrice: 100,
    imageUrl: "https://foods-images-3.onrender.com/burger/veganbur-1.jpg",
    ingredients: [
      "Ground chicken patty",
      "Classic hamburger buns",
      "Sliced avocado",
      "Bacon (crispy strips or turkey bacon)",
      "Ketchup",
    ],
    soldOut: false,
  },

  {
    id: 23,
    name: "Vegan-Burger",
    unitPrice: 100,
    imageUrl: "https://foods-images-3.onrender.com/burger/veganbur-2.jpg",
    ingredients: [
      "Ground chicken patty",
      "Classic hamburger buns",
      "Sliced avocado",
      "Bacon (crispy strips or turkey bacon)",
      "Ketchup",
    ],
    soldOut: false,
  },

  {
    id: 24,
    name: "Vegan-Burger",
    unitPrice: 100,
    imageUrl: "https://foods-images-3.onrender.com/burger/veganbur-3.jpg",
    ingredients: [
      "Ground chicken patty",
      "Classic hamburger buns",
      "Sliced avocado",
      "Bacon (crispy strips or turkey bacon)",
      "Ketchup",
    ],
    soldOut: false,
  },

  {
    id: 25,
    name: "Vegan-Burger",
    unitPrice: 100,
    imageUrl: "https://foods-images-3.onrender.com/burger/veganbur-4.jpg",
    ingredients: [
      "Ground chicken patty",
      "Vegan burger buns",
      "Sliced avocado",
      "Bacon (crispy strips or turkey bacon)",
      "Ketchup",
    ],
    soldOut: false,
  },
  {
    id: 26,
    name: "Vegan-Burger",
    unitPrice: 100,
    imageUrl: "https://foods-images-3.onrender.com/burger/veganbur-5.jpg",
    ingredients: [
      "Chickpeas,Breadcrumbs, Carrot, Onion, Flaxseed, Quinoa, NutritionalYeast, SoySauce, GarlicPowder, Paprika, Salt, Pepper, OliveOil",
      "Ground chicken patty",
      "Vegan burger buns",
      "Sliced avocado",
      "Bacon (crispy strips or turkey bacon)",
      "Ketchup",
    ],
    soldOut: false,
  },
  {
    id: 27,
    name: "Fish-Burger",
    unitPrice: 100,
    imageUrl: "https://foods-images-3.onrender.com/burger/fishbur-1.jpg",
    ingredients: [
      "Tuna fish",
      "Bread crumbs (panko works best),All-purpose flour, Egg (for binding), Black pepper, Oil (for frying)",
      "Classic hamburger buns",
      "Sliced avocado,Tomato slices",
      "Bacon (crispy strips or turkey bacon)",
      "Ketchup",
    ],
    soldOut: false,
  },
];
const pizzamenu = [
  {
    id: 1,
    name: "Pizzapizza-Brazilian",
    unitPrice: 120,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzabrazilian-1.jpg",
    ingredients: ["tomato", "mozzarella", "basil"],
    soldOut: false,
  },
  {
    id: 2,
    name: "Pizzapizza-Brazilian",
    unitPrice: 140,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzabrazilian-2.jpg",
    ingredients: [
      "tomato",
      "egg",
      "mozzarella",
      "ham",
      "mushrooms",
      "artichoke",
    ],
    soldOut: true,
  },
  {
    id: 3,
    name: "Pizza-Breakfast",
    unitPrice: 130,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzabreakfast-1.jpg",
    ingredients: ["tomato", "mozzarella", "prosciutto"],
    soldOut: false,
  },
  {
    id: 4,
    name: "Pizza-Breakfast",
    unitPrice: 145,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzabreakfast-2.jpg",
    ingredients: ["tomato", "mozzarella", "prosciutto", "arugula"],
    soldOut: false,
  },
  {
    id: 5,
    name: "Pizza-Breakfast",
    unitPrice: 160,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzabreakfast-3.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "egg",
      "spicy salami",
      "chili flakes",
    ],
    soldOut: false,
  },
  {
    id: 6,
    name: "Pizza-Brocoli",
    unitPrice: 130,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzabrocoli.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 7,
    name: "Pizza-Margherita",
    unitPrice: 120,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzamargherita-1.jpg",
    ingredients: ["tomato", "mozzarella", "basil"],
    soldOut: false,
  },
  {
    id: 8,
    name: "Pizza-Margherita",
    unitPrice: 140,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzamargherita-2.jpg",
    ingredients: ["tomato", "mozzarella", "ham", "mushrooms", "artichoke"],
    soldOut: true,
  },
  {
    id: 9,
    name: "pizzapizzamargherita-1.jpg",
    unitPrice: 150,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzamargherita-2.jpg",
    ingredients: ["tomato", "mozzarella", "prosciutto"],
    soldOut: false,
  },
  {
    id: 10,
    name: "Pizza-Marinara",
    unitPrice: 160,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzamarinara-1.jpg",
    ingredients: ["tomato", "mozzarella", "prosciutto", "arugula"],
    soldOut: false,
  },
  {
    id: 11,
    name: "Pizza-Marinara",
    unitPrice: 160,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzamarinara-2.jpg",
    ingredients: ["tomato", "mozzarella", "spicy salami", "chili flakes"],
    soldOut: false,
  },
  {
    id: 12,
    name: "Pizza-Marinara",
    unitPrice: 130,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzamarinara-3.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },

  {
    id: 13,
    name: "Pizza-Newyork",
    unitPrice: 130,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzanewyork-1.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 14,
    name: "Pizza-Newyork",
    unitPrice: 130,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzanewyork-2.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 15,
    name: "Pizza-Newyork",
    unitPrice: 130,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzanewyork-3.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 16,
    name: "Pizza-Oliva",
    unitPrice: 130,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzaoliva-1.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 17,
    name: "Pizza-Oliva",
    unitPrice: 130,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzaoliva-2.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 18,
    name: "Pizza-Oliva",
    unitPrice: 130,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzaoliva-3.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 19,
    name: "Pizza-Quattro",
    unitPrice: 140,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzaquattro-1.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 20,
    name: "Pizza-Quattro",
    unitPrice: 140,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzaquattro-2.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 21,
    name: "Pizza-Quattro",
    unitPrice: 140,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzaquattro-3.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 22,
    name: "Pizza-Spinach",
    unitPrice: 135,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzaspinach.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 23,
    name: "Pizza-Turkish",
    unitPrice: 135,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzaturkish-1.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 24,
    name: "Pizza-Turkish",
    unitPrice: 135,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzaturkish-2.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 25,
    name: "Pizza-Vegan",
    unitPrice: 135,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzavegan-1.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 26,
    name: "Pizza-Vegan",
    unitPrice: 135,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzavegan-2.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 27,
    name: "Pizza-Vegan",
    unitPrice: 135,
    imageUrl: "https://foods-images-3.onrender.com/pizza/pizzavegan-3.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
];
const tacobarmenu = [
  {
    id: 1,
    name: "Bacontacobar",
    unitPrice: 75,
    imageUrl: "https://foods-images-3.onrender.com/tacobar/bacontacobar.jpg",
    ingredients: [
      "bacon",
      "Ground beef or turkey",
      "Shredded cheddar",
      "Shredded lettuce",
    ],
    soldOut: false,
  },
  {
    id: 2,
    name: "BBQ Tofu",
    unitPrice: 65,
    imageUrl: "https://foods-images-3.onrender.com/tacobar/bbqtofutacos.jpg",
    ingredients: [
      "Soft flour tortillas",
      "Shredded lettuce",
      "Shredded cheddar or Monterey Jack",
      "Extra BBQ sauce",
      "Black beans or refried beans",
    ],
    soldOut: false,
  },
  {
    id: 3,
    name: "BBQ Tofu",
    unitPrice: 65,
    imageUrl: "https://foods-images-3.onrender.com/tacobar/bbqtacobar.jpg",
    ingredients: [
      "Grilled pineapple chunks",
      "Hot sauce (e.g., Cholula, Tabasco)",
      "Vegan cheese ",
      "Sliced avocado or guacamole",
    ],
    soldOut: false,
  },
  {
    id: 4,
    name: "Beeftacobar",
    unitPrice: 65,
    imageUrl: "https://foods-images-3.onrender.com/tacobar/beeftacobar-1.jpg",
    ingredients: [
      "Seasoned Ground Beef",
      "Taco Shells ",
      "Cheeses",
      "Vegetables",
      "Beans or Sides",
    ],
    soldOut: false,
  },
  {
    id: 5,
    name: "Beeftacobar",
    unitPrice: 65,
    imageUrl: "https://foods-images-3.onrender.com/tacobar/beefytacobar-2.jpg",
    ingredients: [
      "Soft flour tortillas",
      "Shredded cheddar",
      "Shredded lettuce",
      "Sour cream",
    ],
    soldOut: false,
  },
  {
    id: 6,
    name: "Breakfast Tacobar",
    unitPrice: 55,
    imageUrl:
      "https://foods-images-3.onrender.com/tacobar/breakfasttacobar.jpg",
    ingredients: [
      "Soft corn tortillas",
      "Queso fresco",
      "Chopped onions",
      "Refried beans",
      "Lime wedges",
    ],
    soldOut: false,
  },
  {
    id: 7,
    name: "Chicken Tacobar",
    unitPrice: 65,
    imageUrl:
      "https://foods-images-3.onrender.com/tacobar/chickentacobar-1.jpg",
    ingredients: [
      "Shredded Chicken cooked with taco seasoning or salsa.",
      "Hard taco shells",
      "Vegetables",
      "Cheeses",
    ],
    soldOut: false,
  },
  {
    id: 8,
    name: "Chicken Tacobar",
    unitPrice: 65,
    imageUrl:
      "https://foods-images-3.onrender.com/tacobar/chickentacobar-2.jpg",
    ingredients: [
      "Grilled Chicken seasoned with a marinade (lime, garlic, cumin, paprika).",
      "Soft flour tortillas",
      "Vegetables",
      "Cheeses",
    ],
    soldOut: false,
  },
  {
    id: 9,
    name: "Chicken Tacobar",
    unitPrice: 65,
    imageUrl: "https://foods-images-3.onrender.com/tacobar/chickentacobar.jpg",
    ingredients: [
      "Chicken Tinga (shredded chicken in a smoky tomato-chipotle sauce)",
      "Soft flour tortillas",
      "Vegetables",
      "Cheeses",
    ],
    soldOut: false,
  },
  {
    id: 10,
    name: "Chicken Tacobar",
    unitPrice: 65,
    imageUrl:
      "https://foods-images-3.onrender.com/tacobar/chickentacobar-4.jpg",
    ingredients: [
      "Shredded Chicken cooked with taco seasoning",
      "Lettuce leaves",
      "Vegetables",
      "Cheeses",
    ],
    soldOut: false,
  },
  {
    id: 11,
    name: "Fish Tacobar",
    unitPrice: 65,
    imageUrl: "https://foods-images-3.onrender.com/tacobar/fishtacobar-1.jpg",
    ingredients: [
      "Grilled, baked, or fried fish",
      "Soft flour tortillas",
      "Cheeses ",
      "Vegetables and Toppings",
    ],
    soldOut: false,
  },
  {
    id: 12,
    name: "Fish Tacobar",
    unitPrice: 65,
    imageUrl: "https://foods-images-3.onrender.com/tacobar/fishtacobar-2.jpg",
    ingredients: [
      "White fish (tilapia, cod, halibut, or mahi-mahi) seasoned with lime, garlic, cumin, chili powder, or a taco seasoning blend",
      "Soft flour tortillas",
      "Cheeses ",
      "Vegetables and Toppings",
    ],
    soldOut: false,
  },
  {
    id: 13,
    name: "Vegetables Tacobar",
    unitPrice: 50,
    imageUrl:
      "https://foods-images-3.onrender.com/tacobar/vegetablestacobar.jpg",
    ingredients: [
      "Roasted Vegetables",
      "Grilled Corn Kernels",
      "Sauteed Mushrooms",
      "Spiced Cauliflower",
    ],
    soldOut: false,
  },
];

app.get("/api/burgermenu", (req, res) => {
  try {
    res.status(200).json({ status: "success", data: burgermenu });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.get("/api/pizzamenu", (req, res) => {
  try {
    res.status(200).json({ status: "success", data: pizzamenu });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.get("/api/tacobarmenu", (req, res) => {
  try {
    res.status(200).json({ status: "success", data: tacobarmenu });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Generate a random order ID
function generateRandomId() {
  return "ORD" + Math.random().toString(36).substring(2, 7).toUpperCase();
}

let orders = [];

// Create a new order
app.post("/api/order", (req, res) => {
  console.log("Received Data:", req.body);
  const cart = req.body.cart || [];
  const orderPrice = cart.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0
  );

  const estimatedDelivery = new Date();
  estimatedDelivery.setMinutes(estimatedDelivery.getMinutes() + 30); // 👈 Add 30 minutes

  const newOrder = {
    id: generateRandomId(),
    address: req.body.address,
    phone: req.body.phone,
    customer: req.body.customer,
    status: req.body.status || "pending",
    cart: cart,
    orderPrice: orderPrice,
    estimatedDelivery: estimatedDelivery.toISOString(),
  };

  orders.push(newOrder);
  res.status(201).json({ status: "success", data: newOrder });
});

// Get order by ID
app.get("/api/order/:id", (req, res) => {
  const orderId = req.params.id;
  const order = orders.find((o) => o.id === orderId);
  if (!order) {
    return res
      .status(404)
      .json({ status: "fail", message: `Couldn't find order #${orderId}` });
  }
  res.status(200).json({ status: "success", data: order });
});

// Update order by ID
app.patch("/api/order/:id", (req, res) => {
  const orderId = req.params.id;
  const orderIndex = orders.findIndex((o) => o.id === orderId);

  if (orderIndex === -1) {
    return res.status(404).json({ status: "fail", message: `Order not found` });
  }

  orders[orderIndex] = { ...orders[orderIndex], ...req.body };
  res.status(200).json({ status: "success", data: orders[orderIndex] });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
