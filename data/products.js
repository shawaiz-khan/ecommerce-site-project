const Products = [
    {
        id: 1,
        name: "American Football Jersey",
        price: 54.99,
        description: "High-quality jersey perfect for American football enthusiasts.",
        image: "https://source.unsplash.com/300x300/?americanfootball,jersey"
    },
    {
        id: 2,
        name: "American Football Pants",
        price: 34.99,
        description: "Durable pants designed for the rigors of American football.",
        image: "https://source.unsplash.com/300x300/?americanfootball,pants"
    },
    {
        id: 3,
        name: "Basketball Shorts",
        price: 25.99,
        description: "Lightweight basketball shorts for mobility and comfort.",
        image: "https://source.unsplash.com/300x300/?basketball,shorts"
    },
    {
        id: 4,
        name: "Basketball Tank Top",
        price: 24.99,
        description: "Breathable tank top for basketball players.",
        image: "https://source.unsplash.com/300x300/?basketball,tanktop"
    },
    {
        id: 5,
        name: "Cycling Jersey",
        price: 49.99,
        description: "Lightweight cycling jersey for long rides.",
        image: "https://source.unsplash.com/300x300/?cycling,jersey"
    },
    {
        id: 6,
        name: "Cycling Pants",
        price: 39.99,
        description: "Comfortable cycling pants for endurance rides.",
        image: "https://source.unsplash.com/300x300/?cycling,pants"
    },
    {
        id: 7,
        name: "Sports Jacket",
        price: 69.99,
        description: "Stylish jacket for all outdoor sports activities.",
        image: "https://source.unsplash.com/300x300/?sports,jacket"
    },
    {
        id: 8,
        name: "Windbreaker Jacket",
        price: 79.99,
        description: "Lightweight and weather-resistant jacket for running and cycling.",
        image: "https://source.unsplash.com/300x300/?windbreaker,jacket,men"
    },
    {
        id: 9,
        name: "Sports Hoodie",
        price: 59.99,
        description: "Comfortable hoodie perfect for workouts and casual wear.",
        image: "https://source.unsplash.com/300x300/?hoodie,men"
    },
    {
        id: 10,
        name: "Zipper Hoodie",
        price: 64.99,
        description: "Versatile hoodie with a front zipper for convenience.",
        image: "https://source.unsplash.com/300x300/?zipper,hoodie,men"
    },
    {
        id: 11,
        name: "Track Pants",
        price: 34.99,
        description: "Comfortable and breathable track pants for training sessions.",
        image: "https://source.unsplash.com/300x300/?track,pants,men"
    },
    {
        id: 12,
        name: "Sweatpants",
        price: 29.99,
        description: "Relaxed-fit sweatpants ideal for lounging or light workouts.",
        image: "https://source.unsplash.com/300x300/?sweatpants,men"
    },
    {
        id: 13,
        name: "Running Shorts",
        price: 19.99,
        description: "Lightweight and breathable shorts designed for running.",
        image: "https://source.unsplash.com/300x300/?running,shorts,men"
    },
    {
        id: 14,
        name: "Training Shorts",
        price: 22.99,
        description: "Durable shorts ideal for gym sessions and intense workouts.",
        image: "https://source.unsplash.com/300x300/?training,shorts,men"
    },
    {
        id: 15,
        name: "Sports T-Shirt",
        price: 19.99,
        description: "Moisture-wicking t-shirt for all kinds of sports.",
        image: "https://source.unsplash.com/300x300/?sports,tshirt,men"
    },
    {
        id: 16,
        name: "Running T-Shirt",
        price: 21.99,
        description: "Lightweight t-shirt ideal for running and outdoor activities.",
        image: "https://source.unsplash.com/300x300/?running,tshirt,men"
    },
    {
        id: 17,
        name: "Netball Jersey",
        price: 29.99,
        description: "Comfortable netball jersey for team play.",
        image: "https://source.unsplash.com/300x300/?netball,jersey,men"
    },
    {
        id: 18,
        name: "Netball Shorts",
        price: 19.99,
        description: "Lightweight shorts for netball games.",
        image: "https://source.unsplash.com/300x300/?netball,shorts,men"
    },
    {
        id: 19,
        name: "Rowing Suit",
        price: 34.99,
        description: "Aerodynamic rowing suit for enhanced performance.",
        image: "https://source.unsplash.com/300x300/?rowing,suit,men"
    },
    {
        id: 20,
        name: "Rowing Tank Top",
        price: 22.99,
        description: "Comfortable tank top for rowing activities.",
        image: "https://source.unsplash.com/300x300/?rowing,tanktop,men"
    },
    {
        id: 21,
        name: "Rugby Jersey",
        price: 44.99,
        description: "Durable rugby jersey for intense matches.",
        image: "https://source.unsplash.com/300x300/?rugby,jersey,men"
    },
    {
        id: 22,
        name: "Rugby Shorts",
        price: 24.99,
        description: "Reinforced shorts for rugby gameplay.",
        image: "https://source.unsplash.com/300x300/?rugby,shorts,men"
    },
    {
        id: 23,
        name: "Soccer Cleats",
        price: 59.99,
        description: "Lightweight cleats for better traction on the field.",
        image: "https://source.unsplash.com/300x300/?soccer,cleats,men"
    },
    {
        id: 24,
        name: "Soccer Socks",
        price: 9.99,
        description: "Comfortable and durable soccer socks.",
        image: "https://source.unsplash.com/300x300/?soccer,socks,men"
    },
    {
        id: 25,
        name: "Cricket Pads",
        price: 49.99,
        description: "Protective cricket pads for safety and performance.",
        image: "https://source.unsplash.com/300x300/?cricket,pads,men"
    },
    {
        id: 26,
        name: "Cricket Helmet",
        price: 59.99,
        description: "Durable helmet for safety on the pitch.",
        image: "https://source.unsplash.com/300x300/?cricket,helmet,men"
    },
    {
        id: 27,
        name: "Volleyball Jersey",
        price: 29.99,
        description: "Breathable volleyball jersey for optimal performance.",
        image: "https://source.unsplash.com/300x300/?volleyball,jersey,men"
    },
    {
        id: 28,
        name: "Volleyball Shorts",
        price: 19.99,
        description: "Lightweight and flexible shorts for volleyball players.",
        image: "https://source.unsplash.com/300x300/?volleyball,shorts,men"
    },
    {
        id: 29,
        name: "Ice Hockey Jersey",
        price: 49.99,
        description: "Durable jersey for intense ice hockey matches.",
        image: "https://source.unsplash.com/300x300/?icehockey,jersey,men"
    },
    {
        id: 30,
        name: "Ice Hockey Pants",
        price: 44.99,
        description: "Protective pants for ice hockey gameplay.",
        image: "https://source.unsplash.com/300x300/?icehockey,pants,men"
    },
    {
        id: 31,
        name: "Baseball Jersey",
        price: 34.99,
        description: "Classic baseball jersey for comfortable gameplay.",
        image: "https://source.unsplash.com/300x300/?baseball,jersey,men"
    },
    {
        id: 32,
        name: "Baseball Pants",
        price: 39.99,
        description: "Durable baseball pants for long-lasting use.",
        image: "https://source.unsplash.com/300x300/?baseball,pants,men"
    },
    {
        id: 33,
        name: "Lacrosse Jersey",
        price: 44.99,
        description: "Lightweight jersey for lacrosse players.",
        image: "https://source.unsplash.com/300x300/?lacrosse,jersey,men"
    },
    {
        id: 34,
        name: "Lacrosse Shorts",
        price: 24.99,
        description: "Comfortable shorts for lacrosse matches.",
        image: "https://source.unsplash.com/300x300/?lacrosse,shorts,men"
    },
    {
        id: 35,
        name: "Cheerleading Top",
        price: 34.99,
        description: "Stylish and flexible cheerleading top.",
        image: "https://source.unsplash.com/300x300/?cheerleading,top,men"
    },
    {
        id: 36,
        name: "Cheerleading Pants",
        price: 39.99,
        description: "Comfortable and stretchable cheerleading pants.",
        image: "https://source.unsplash.com/300x300/?cheerleading,pants,men"
    },
    {
        id: 37,
        name: "Softball Jersey",
        price: 34.99,
        description: "Classic softball jersey for optimal comfort.",
        image: "https://source.unsplash.com/300x300/?softball,jersey,men"
    },
    {
        id: 38,
        name: "Softball Pants",
        price: 39.99,
        description: "Durable softball pants for gameplay.",
        image: "https://source.unsplash.com/300x300/?softball,pants,men"
    },
    {
        id: 39,
        name: "Field Hockey Jersey",
        price: 34.99,
        description: "Lightweight field hockey jersey for enhanced performance.",
        image: "https://source.unsplash.com/300x300/?fieldhockey,jersey,men"
    },
    {
        id: 40,
        name: "Field Hockey Shorts",
        price: 29.99,
        description: "Flexible shorts for field hockey gameplay.",
        image: "https://source.unsplash.com/300x300/?fieldhockey,shorts,men"
    },
    {
        id: 41,
        name: "Rowing Shorts",
        price: 22.99,
        description: "Comfortable and flexible shorts for rowing.",
        image: "https://source.unsplash.com/300x300/?rowing,shorts,men"
    },
    {
        id: 42,
        name: "Rugby Socks",
        price: 12.99,
        description: "Durable socks for intense rugby matches.",
        image: "https://source.unsplash.com/300x300/?rugby,socks,men"
    },
    {
        id: 43,
        name: "Volleyball Socks",
        price: 11.99,
        description: "Comfortable and breathable socks for volleyball players.",
        image: "https://source.unsplash.com/300x300/?volleyball,socks,men"
    },
    {
        id: 44,
        name: "Soccer Shin Guards",
        price: 19.99,
        description: "Protective shin guards for soccer players.",
        image: "https://source.unsplash.com/300x300/?soccer,shinguards,men"
    },
    {
        id: 45,
        name: "Baseball Cap",
        price: 14.99,
        description: "Classic cap for baseball players and fans.",
        image: "https://source.unsplash.com/300x300/?baseball,cap,men"
    }
];

export default Products; x