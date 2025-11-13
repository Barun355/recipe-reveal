
Formate:
----------
[
  {
    id: String,
    name: String,
    category: String,
    image: String,
    previewImage: String,
    rating: Number,
    reviews: Number,
    prepTime: String,
    cookTime: String,
    calories: Number,
    protein: Number,
    description: String,
    ingredients: [
      {
        name: String,
        quantity: String,
        priceRange: String,
        estimatedPrice: Number,
      }
    ],
    preCookingProcess: String[],
    cookingProcess: [
      {
        "process_1_name": string[],
        "process_2_name": string[],
        "process_3_name": string[],
        "process_4_name": string[],
      }
    ],
    postCookingProcess: String[],
    nutritionClassification: {
      protein: String,
      carbs: String,
      fats: String,
      fiber: String,
    },
    tipsAndTricks: String[],
    isHighProtein: Boolean,
    timeOfDay: String,
    isFeatured: Boolean,
  }
]

// Example

[
  {
    "id": "1",
    "name": "Paneer Tikka Masala",
    "category": "Other",
    "image": "https://res.cloudinary.com/rf-automation-test/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1761838933/recipe-reveal/recipes-images/paneer-tikka-16-4_telfkg.png",
    "previewImage": "https://res.cloudinary.com/rf-automation-test/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1761838930/recipe-reveal/recipes-images/paneer-tikka-1-1_gaikpp.png",
    "rating": 4.8,
    "reviews": 234,
    "prepTime": "20min",
    "cookTime": "30min",
    "calories": 420,
    "protein": 18,
    "description": "A rich and creamy North Indian curry made with marinated paneer cubes cooked in a spiced tomato-based gravy. Perfect for dinner with naan or rice.",
    "ingredients": [
      {
        "name": "Paneer",
        "quantity": "400g",
        "priceRange": "₹80-120",
        "estimatedPrice": 100
      },
      {
        "name": "Tomatoes",
        "quantity": "4 medium",
        "priceRange": "₹20-30",
        "estimatedPrice": 25
      },
      {
        "name": "Onions",
        "quantity": "2 large",
        "priceRange": "₹15-25",
        "estimatedPrice": 20
      },
      {
        "name": "Cashews",
        "quantity": "1/4 cup",
        "priceRange": "₹40-60",
        "estimatedPrice": 50
      },
      {
        "name": "Cream",
        "quantity": "1/2 cup",
        "priceRange": "₹30-50",
        "estimatedPrice": 40
      },
      {
        "name": "Garam Masala",
        "quantity": "2 tsp",
        "priceRange": "₹5-10",
        "estimatedPrice": 8
      },
      {
        "name": "Kashmiri Red Chili",
        "quantity": "1 tbsp",
        "priceRange": "₹5-10",
        "estimatedPrice": 7
      },
      {
        "name": "Ginger-Garlic Paste",
        "quantity": "2 tbsp",
        "priceRange": "₹10-15",
        "estimatedPrice": 12
      }
    ],
    "preCookingProcess": [
      "Cut paneer into 1-inch cubes and soak in warm salted water for 10 minutes",
      "Marinate paneer with yogurt, kashmiri chili, and garam masala for 15 minutes",
      "Soak cashews in warm water for 15 minutes",
      "Roughly chop tomatoes and onions"
    ],
    "cookingProcess": {
      "Preparation": [
        "Heat oil in a pan and shallow fry marinated paneer until golden. Set aside"
      ],
      "Gravy Base": [
        "In the same pan, add butter and sauté chopped onions until golden brown",
        "Add ginger-garlic paste and cook for 1 minute until raw smell disappears",
        "Add chopped tomatoes and cook until they turn mushy (about 8-10 minutes)",
        "Add cashew paste, salt, and all spices. Cook for 2-3 minutes"
      ],
      "Final Assembly": [
        "Add water to adjust consistency and bring to a boil",
        "Add fried paneer cubes and simmer for 5 minutes",
        "Finish with cream and kasuri methi (dried fenugreek leaves)"
      ]
    },
    "postCookingProcess": [
      "Garnish with fresh cream and chopped coriander",
      "Let it rest for 2-3 minutes before serving",
      "Serve hot with naan, roti, or jeera rice"
    ],
    "nutritionClassification": {
      "protein": "18g per serving",
      "carbs": "32g per serving",
      "fats": "28g per serving",
      "fiber": "4g per serving"
    },
    "servingSuggestions": [
      "Serve hot with fluffy basmati rice, naan, or paratha.",
      "Garnish with fresh cream swirl and chopped coriander.",
      "Accompany with sliced onions, lemon wedges, and a side of mint chutney."
    ],
    "tipsAndTricks": [
      "Soaking paneer in warm water makes it soft and prevents it from breaking",
      "Use fresh cream for better taste and consistency",
      "Adjust spice levels according to preference"
    ],
    "isHighProtein": true,
    "timeOfDay": "evening",
    "isFeatured": true
  },
  {
    "id": "2",
    "name": "Chicken Biryani",
    "category": "Non-Veg",
    "image": "https://res.cloudinary.com/rf-automation-test/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1761837097/recipe-reveal/recipes-images/chicken-biryani-16-4_ossstp.png",
    "previewImage": "https://res.cloudinary.com/rf-automation-test/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1761837094/recipe-reveal/recipes-images/chicken-birayani-1-1_u44uue.png",
    "rating": 4.9,
    "reviews": 567,
    "prepTime": "40min",
    "cookTime": "45min",
    "calories": 580,
    "protein": 32,
    "description": "Aromatic and flavorful layered rice dish with marinated chicken, fragrant spices, and caramelized onions. A celebration dish loved across India.",
    "ingredients": [
      {
        "name": "Chicken",
        "quantity": "1kg",
        "priceRange": "₹200-280",
        "estimatedPrice": 240
      },
      {
        "name": "Basmati Rice",
        "quantity": "500g",
        "priceRange": "₹80-120",
        "estimatedPrice": 100
      },
      {
        "name": "Yogurt",
        "quantity": "1 cup",
        "priceRange": "₹30-50",
        "estimatedPrice": 40
      },
      {
        "name": "Onions",
        "quantity": "4 large",
        "priceRange": "₹30-50",
        "estimatedPrice": 40
      },
      {
        "name": "Whole Spices",
        "quantity": "Mix",
        "priceRange": "₹30-50",
        "estimatedPrice": 40
      },
      {
        "name": "Saffron",
        "quantity": "1/4 tsp",
        "priceRange": "₹20-40",
        "estimatedPrice": 30
      },
      {
        "name": "Ghee",
        "quantity": "4 tbsp",
        "priceRange": "₹40-60",
        "estimatedPrice": 50
      }
    ],
    "preCookingProcess": [
      "Marinate chicken with yogurt, ginger-garlic paste, red chili, turmeric for 30 minutes",
      "Soak basmati rice for 30 minutes and drain",
      "Thinly slice onions and deep fry until golden brown",
      "Soak saffron in warm milk"
    ],
    "cookingProcess": {
      "Rice Preparation": [
        "Boil rice with whole spices until 70% cooked. Drain and set aside"
      ],
      "Chicken Base": [
        "In a heavy-bottomed pot, cook marinated chicken with half of fried onions"
      ],
      "Layering and Dum Cooking": [
        "Layer half of the rice over cooked chicken",
        "Sprinkle remaining fried onions, mint, and saffron milk",
        "Add remaining rice and seal with dough or tight lid",
        "Cook on high heat for 3 minutes, then low heat for 25-30 minutes (dum)"
      ]
    },
    "postCookingProcess": [
      "Let it rest for 5 minutes after turning off heat",
      "Gently mix layers while serving",
      "Serve hot with raita and pickle"
    ],
    "nutritionClassification": {
      "protein": "32g per serving",
      "carbs": "68g per serving",
      "fats": "18g per serving",
      "fiber": "3g per serving"
    },
    "servingSuggestions": [
      "Serve the Biryani hot, garnished with fresh coriander and mint leaves.",
      "Accompany with a side of cooling Raita (yogurt dip) and a simple green salad.",
      "Present in a large, traditional serving bowl to showcase the layers."
    ],
    "tipsAndTricks": [
      "Use good quality basmati rice for best results",
      "Dum cooking is crucial - use low heat and seal properly",
      "Don't skip the fried onions - they add essential flavor"
    ],
    "isHighProtein": true,
    "timeOfDay": "afternoon",
    "isFeatured": true
  },
]

