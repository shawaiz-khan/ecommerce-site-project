const products = [
    {
        id: 1,
        name: "Men's Casual Shirt",
        price: 29.99,
        description: "A comfortable and stylish casual shirt perfect for everyday wear.",
        image: "https://source.unsplash.com/300x300/?shirt,men"
    },
    {
        id: 2,
        name: "Men's Slim Fit Jeans",
        price: 39.99,
        description: "Trendy slim fit jeans designed for a modern look.",
        image: "https://source.unsplash.com/300x300/?jeans,men"
    },
    {
        id: 3,
        name: "Men's Sports Jacket",
        price: 49.99,
        description: "A high-performance jacket for outdoor sports activities.",
        image: "https://source.unsplash.com/300x300/?jacket,men"
    },
    {
        id: 4,
        name: "Men's Hoodie",
        price: 34.99,
        description: "Cozy and warm hoodie for a casual look.",
        image: "https://source.unsplash.com/300x300/?hoodie,men"
    },
    {
        id: 5,
        name: "Men's T-Shirt",
        price: 19.99,
        description: "Classic cotton T-shirt, perfect for everyday wear.",
        image: "https://source.unsplash.com/300x300/?tshirt,men"
    },
    {
        id: 6,
        name: "Men's Leather Jacket",
        price: 129.99,
        description: "Premium leather jacket that adds style and sophistication.",
        image: "https://source.unsplash.com/300x300/?leather,jacket,men"
    },
    {
        id: 7,
        name: "Men's Suit Jacket",
        price: 79.99,
        description: "Elegant suit jacket for formal occasions.",
        image: "https://source.unsplash.com/300x300/?suit,jacket,men"
    },
    {
        id: 8,
        name: "Men's Chinos",
        price: 34.99,
        description: "Versatile chinos that can be dressed up or down.",
        image: "https://source.unsplash.com/300x300/?chinos,men"
    },
    {
        id: 9,
        name: "Men's Polo Shirt",
        price: 25.99,
        description: "Classic polo shirt, ideal for a smart-casual look.",
        image: "https://source.unsplash.com/300x300/?polo,shirt,men"
    },
    {
        id: 10,
        name: "Men's Sweater",
        price: 39.99,
        description: "A stylish sweater for layering during the colder months.",
        image: "https://source.unsplash.com/300x300/?sweater,men"
    },
    {
        id: 11,
        name: "Men's Running Shoes",
        price: 59.99,
        description: "Lightweight running shoes built for performance.",
        image: "https://source.unsplash.com/300x300/?running,shoes,men"
    },
    {
        id: 12,
        name: "Men's Boots",
        price: 79.99,
        description: "Durable boots designed for both comfort and style.",
        image: "https://source.unsplash.com/300x300/?boots,men"
    },
    {
        id: 13,
        name: "Men's Casual Sneakers",
        price: 49.99,
        description: "Stylish sneakers suitable for daily wear.",
        image: "https://source.unsplash.com/300x300/?sneakers,men"
    },
    {
        id: 14,
        name: "Men's Winter Coat",
        price: 99.99,
        description: "A warm winter coat to keep you cozy during cold weather.",
        image: "https://source.unsplash.com/300x300/?winter,coat,men"
    },
    {
        id: 15,
        name: "Men's Track Pants",
        price: 29.99,
        description: "Comfortable track pants perfect for athletic activities.",
        image: "https://source.unsplash.com/300x300/?track,pants,men"
    },
    {
        id: 16,
        name: "Men's Dress Shirt",
        price: 49.99,
        description: "Formal dress shirt ideal for business or formal events.",
        image: "https://source.unsplash.com/300x300/?dress,shirt,men"
    },
    {
        id: 17,
        name: "Men's V-Neck T-Shirt",
        price: 22.99,
        description: "A stylish V-neck t-shirt for a modern and casual look.",
        image: "https://source.unsplash.com/300x300/?vneck,tshirt,men"
    },
    {
        id: 18,
        name: "Men's Camo Jacket",
        price: 64.99,
        description: "A trendy camo jacket perfect for outdoor adventures.",
        image: "https://source.unsplash.com/300x300/?camouflage,jacket,men"
    },
    {
        id: 19,
        name: "Men's Denim Jacket",
        price: 59.99,
        description: "Classic denim jacket that goes well with any casual outfit.",
        image: "https://source.unsplash.com/300x300/?denim,jacket,men"
    },
    {
        id: 20,
        name: "Men's Tank Top",
        price: 18.99,
        description: "Perfect tank top for hot summer days or layering.",
        image: "https://source.unsplash.com/300x300/?tank,top,men"
    },
    {
        id: 21,
        name: "Men's Bomber Jacket",
        price: 79.99,
        description: "Stylish bomber jacket, great for layering.",
        image: "https://source.unsplash.com/300x300/?bomber,jacket,men"
    },
    {
        id: 22,
        name: "Men's Corduroy Pants",
        price: 45.99,
        description: "Stylish corduroy pants for a vintage-inspired look.",
        image: "https://source.unsplash.com/300x300/?corduroy,pants,men"
    },
    {
        id: 23,
        name: "Men's Sweatpants",
        price: 29.99,
        description: "Comfortable sweatpants for lounging or working out.",
        image: "https://source.unsplash.com/300x300/?sweatpants,men"
    },
    {
        id: 24,
        name: "Men's Casual Blazer",
        price: 89.99,
        description: "A casual blazer that blends well with smart-casual attire.",
        image: "https://source.unsplash.com/300x300/?blazer,men"
    },
    {
        id: 25,
        name: "Men's Cargo Pants",
        price: 39.99,
        description: "Stylish cargo pants for a relaxed and practical look.",
        image: "https://source.unsplash.com/300x300/?cargo,pants,men"
    },
    {
        id: 26,
        name: "Men's Knit Sweater",
        price: 49.99,
        description: "A cozy knit sweater for colder weather.",
        image: "https://source.unsplash.com/300x300/?knit,sweater,men"
    },
    {
        id: 27,
        name: "Men's Cardigan",
        price: 54.99,
        description: "A stylish cardigan for layering during cooler seasons.",
        image: "https://source.unsplash.com/300x300/?cardigan,men"
    },
    {
        id: 28,
        name: "Men's Sandals",
        price: 19.99,
        description: "Comfortable sandals for warm weather.",
        image: "https://source.unsplash.com/300x300/?sandals,men"
    },
    {
        id: 29,
        name: "Men's Dress Shoes",
        price: 89.99,
        description: "Elegant dress shoes for formal occasions.",
        image: "https://source.unsplash.com/300x300/?dress,shoes,men"
    },
    {
        id: 30,
        name: "Men's Leather Wallet",
        price: 29.99,
        description: "Premium leather wallet to keep your essentials organized.",
        image: "https://source.unsplash.com/300x300/?leather,wallet,men"
    },
    {
        id: 31,
        name: "Men's Scarf",
        price: 15.99,
        description: "A soft scarf to keep you warm in the colder months.",
        image: "https://source.unsplash.com/300x300/?scarf,men"
    },
    {
        id: 32,
        name: "Men's Sunglasses",
        price: 22.99,
        description: "Stylish sunglasses to protect your eyes and enhance your look.",
        image: "https://source.unsplash.com/300x300/?sunglasses,men"
    },
    {
        id: 33,
        name: "Men's Watch",
        price: 149.99,
        description: "A luxury watch that adds elegance to your look.",
        image: "https://source.unsplash.com/300x300/?watch,men"
    },
    {
        id: 34,
        name: "Men's Beanie",
        price: 12.99,
        description: "A warm beanie to protect you from the cold.",
        image: "https://source.unsplash.com/300x300/?beanie,men"
    },
    {
        id: 35,
        name: "Men's Gloves",
        price: 19.99,
        description: "Warm gloves for colder climates.",
        image: "https://source.unsplash.com/300x300/?gloves,men"
    },
    {
        id: 36,
        name: "Men's Belt",
        price: 24.99,
        description: "Stylish leather belt for a polished look.",
        image: "https://source.unsplash.com/300x300/?belt,men"
    },
    {
        id: 37,
        name: "Men's Joggers",
        price: 34.99,
        description: "Comfortable joggers for exercise or lounging.",
        image: "https://source.unsplash.com/300x300/?joggers,men"
    },
    {
        id: 38,
        name: "Men's Windbreaker Jacket",
        price: 59.99,
        description: "Lightweight windbreaker jacket for outdoor activities.",
        image: "https://source.unsplash.com/300x300/?windbreaker,jacket,men"
    },
    {
        id: 39,
        name: "Men's Flip Flops",
        price: 9.99,
        description: "Easy-to-wear flip flops for beach days.",
        image: "https://source.unsplash.com/300x300/?flipflops,men"
    },
    {
        id: 40,
        name: "Men's Tracksuit",
        price: 49.99,
        description: "A complete tracksuit for a sporty look.",
        image: "https://source.unsplash.com/300x300/?tracksuit,men"
    },
    {
        id: 41,
        name: "Men's Backpack",
        price: 39.99,
        description: "Stylish and functional backpack for everyday use.",
        image: "https://source.unsplash.com/300x300/?backpack,men"
    },
    {
        id: 42,
        name: "Men's Messenger Bag",
        price: 44.99,
        description: "A sleek messenger bag for the modern man.",
        image: "https://source.unsplash.com/300x300/?messenger,bag,men"
    },
    {
        id: 43,
        name: "Men's Wool Coat",
        price: 129.99,
        description: "A luxurious wool coat perfect for formal occasions.",
        image: "https://source.unsplash.com/300x300/?wool,coat,men"
    },
    {
        id: 44,
        name: "Men's Casual Sneakers",
        price: 59.99,
        description: "Casual sneakers for a laid-back look.",
        image: "https://source.unsplash.com/300x300/?casual,sneakers,men"
    },
    {
        id: 45,
        name: "Men's Suit",
        price: 179.99,
        description: "A sophisticated suit for formal events.",
        image: "https://source.unsplash.com/300x300/?men,suit"
    },
    {
        id: 46,
        name: "Men's Running Shorts",
        price: 24.99,
        description: "Lightweight running shorts for exercise.",
        image: "https://source.unsplash.com/300x300/?running,shorts,men"
    },
    {
        id: 47,
        name: "Men's Casual Shoes",
        price: 39.99,
        description: "Comfortable and stylish casual shoes.",
        image: "https://source.unsplash.com/300x300/?casual,shoes,men"
    },
    {
        id: 48,
        name: "Men's Flip-Top Hat",
        price: 19.99,
        description: "A stylish hat to keep the sun off your face.",
        image: "https://source.unsplash.com/300x300/?hat,men"
    },
    {
        id: 49,
        name: "Men's Dress Pants",
        price: 69.99,
        description: "Elegant dress pants for formal occasions.",
        image: "https://source.unsplash.com/300x300/?dress,pants,men"
    },
    {
        id: 50,
        name: "Men's Tank Top",
        price: 14.99,
        description: "Perfect for hot days, this tank top provides a comfortable fit.",
        image: "https://source.unsplash.com/300x300/?tank,top,men"
    }
];

export default products;