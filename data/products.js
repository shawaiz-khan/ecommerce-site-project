const Products = [
    {
        id: 1,
        name: "American Football Jersey",
        price: 54.99,
        description: "High-quality jersey perfect for American football enthusiasts.",
        image: "../assets/products/American Football Uniforms/American Football Uniform Post 2/WhatsApp Image 2024-10-28 at 1.03.38 AM (1).jpeg"
    },
    {
        id: 3,
        name: "Basketball Shorts",
        price: 25.99,
        description: "Lightweight basketball shorts for mobility and comfort.",
        image: "../assets/products/Basketball Uniform/Post 1/Ac959b1c28d3e42cd9b4d9188cf08c133j.jpg_720x720q50.avif"
    },
    {
        id: 4,
        name: "Basketball Tank Top",
        price: 24.99,
        description: "Breathable tank top for basketball players.",
        image: "../assets/products/Basketball Uniform/Post 3/A10fbd0825a554bc38aa72ba03e3e916ax.jpg_720x720q50.avif"
    },
    {
        id: 7,
        name: "Sports Jacket",
        price: 69.99,
        description: "Stylish jacket for all outdoor sports activities.",
        image: "../assets/products/Jackets/Post 3/Adc5edd80facb437c95330522b9046cbbw.jpg_720x720q50.avif"
    },
    {
        id: 9,
        name: "Sports Hoodie",
        price: 59.99,
        description: "Comfortable hoodie perfect for workouts and casual wear.",
        image: "../assets/products/Hoodies/Post 2/H8e6fcaa898fb4d9e83f2777d03a7c2f8i.png_720x720q50.avif"
    },
    {
        id: 10,
        name: "Zipper Hoodie",
        price: 64.99,
        description: "Versatile hoodie with a front zipper for convenience.",
        image: "../assets/products/Hoodies/Post 5/Hb44eb707730c4acbadfdba78b2c8fdcba.jpg_720x720q50.avif"
    },
    {
        id: 11,
        name: "Track Pants",
        price: 34.99,
        description: "Comfortable and breathable track pants for training sessions.",
        image: "../assets/products/Track suits/Post 1/Ha949fb0f52324e718a7e9ce3c939abfbP.avif"
    },
    {
        id: 12,
        name: "Sweatpants",
        price: 29.99,
        description: "Relaxed-fit sweatpants ideal for lounging or light workouts.",
        image: "../assets/products/Trousers/Post 3/H343df727e32d4a4dad45af433b35415dT.avif"
    },
    {
        id: 13,
        name: "Running Suit",
        price: 19.99,
        description: "Lightweight and breathable shorts designed for running.",
        image: "../assets/products/Track suits/Post 3/A3b480a336b7d476d907842fd60b0d227W.jpg_720x720q50.avif"
    },
    {
        id: 14,
        name: "Training Suit",
        price: 22.99,
        description: "Durable shorts ideal for gym sessions and intense workouts.",
        image: "../assets/products/Track suits/Post 2/He04d98f93c31466586676699a880a13dN.avif"
    },
    {
        id: 15,
        name: "Sports T-Shirt",
        price: 19.99,
        description: "Moisture-wicking t-shirt for all kinds of sports.",
        image: "../assets/products/T-shirts/Post 2/H83ef3b17d5d64868a78cb099d7c9485bO.avif"
    },
    {
        id: 16,
        name: "Running T-Shirt",
        price: 21.99,
        description: "Lightweight t-shirt ideal for running and outdoor activities.",
        image: "../assets/products/T-shirts/Post 3/H37579ee1879e4cd08e83ca44a1a604e6q.avif"
    },
    {
        id: 17,
        name: "Netball Jersey",
        price: 29.99,
        description: "Comfortable netball jersey for team play.",
        image: "../assets/products/Netball Uniform/Post 1/HTB10KGDvBmWBuNkSndVq6AsApXaD.jpg_720x720q50.avif"
    },
    {
        id: 18,
        name: "Netball Shorts",
        price: 19.99,
        description: "Lightweight shorts for netball games.",
        image: "../assets/products/Netball Uniform/Post 4/Af06bdb6e681f40e7b1dd6a4f0c2811cej.jpg_720x720q50.avif"
    },
    {
        id: 19,
        name: "Rowing Suit",
        price: 34.99,
        description: "Aerodynamic rowing suit for enhanced performance.",
        image: "../assets/products/Rowing Uniform/Post 1/H1b370def4baa48e885245f4b1409e11fE.jpg_720x720q50.avif"
    },
    {
        id: 21,
        name: "Rugby Jersey",
        price: 44.99,
        description: "Durable rugby jersey for intense matches.",
        image: "../assets/products/Rugby Uniform/Post 1/A1cddf5e9be14485abfa7f404e754e799O.png_720x720q50.avif"
    },
    {
        id: 22,
        name: "Rugby Shorts",
        price: 24.99,
        description: "Reinforced shorts for rugby gameplay.",
        image: "../assets/products/Rugby Uniform/Post 4/H4f09ed26d4e14b2587ff04b93f237c38o.jpg_720x720q50.avif"
    },
    {
        id: 23,
        name: "Soccer Cleats",
        price: 59.99,
        description: "Lightweight cleats for better traction on the field.",
        image: "../assets/products/Soccer Uniform/Post 1/H290b07fe5b174cda9c34785997dadeafQ.png_720x720q50.avif"
    },
    {
        id: 24,
        name: "Soccer Socks",
        price: 9.99,
        description: "Comfortable and durable soccer socks.",
        image: "../assets/products/Soccer Uniform/Post 3/H2adc3db7a2784fe8b272dff60f3bdadat.jpg_720x720q50.avif"
    },
    {
        id: 25,
        name: "Sports Jersey",
        price: 49.99,
        description: "Protective cricket pads for safety and performance.",
        image: "../assets/products/Cricket Uniform/Post 3/A3d4e06ce808c4c0a9dd76f1e284889a7d.webp"
    },
    {
        id: 26,
        name: "Cricket Jersey Set",
        price: 59.99,
        description: "Durable helmet for safety on the pitch.",
        image: "../assets/products/Cricket Uniform/Post 5/Hb653520e679049c6a32f66a88b828c01i.jpg_720x720q50.avif"
    },
    {
        id: 27,
        name: "Volleyball Jersey",
        price: 29.99,
        description: "Breathable volleyball jersey for optimal performance.",
        image: "../assets/products/Volleyball Uniform/Post 3/A8321e8cd0a2d4142a75077fa82493368R.jpg_720x720q50.avif"
    },
    {
        id: 28,
        name: "Volleyball Shorts",
        price: 19.99,
        description: "Lightweight and flexible shorts for volleyball players.",
        image: "../assets/products/Volleyball Uniform/Postr 1/A40f2dbf7a9734afb818908230b4b3e93c.webp"
    },
    {
        id: 30,
        name: "Ice Hockey Pants",
        price: 44.99,
        description: "Protective pants for ice hockey gameplay.",
        image: "../assets/products/Ice Hockey Uniform/Post 3/H4fa8dad4847d482fbb0d6057f6384cc3D.avif"
    },
    {
        id: 32,
        name: "Baseball Pants",
        price: 39.99,
        description: "Durable baseball pants for long-lasting use.",
        image: "../assets/products/Baseball Uniform/Post 3/A695b0e974c904421aa1fffe1ad6ea80bX.jpg_720x720q50.avif"
    },
    {
        id: 33,
        name: "Lacrosse Jersey",
        price: 44.99,
        description: "Lightweight jersey for lacrosse players.",
        image: "../assets/products/Lacrose Uniform/Post 1/Ab946fc7c8544439b8da896fd405fe182t.jpg_720x720q50.avif"
    },
    {
        id: 34,
        name: "Lacrosse Shorts",
        price: 24.99,
        description: "Comfortable shorts for lacrosse matches.",
        image: "../assets/products/Lacrose Uniform/Post 3/A574792a8e6e54c61ad96096b968c5f90H.jpeg_720x720q50.avif"
    },
    {
        id: 37,
        name: "Softball Jersey",
        price: 34.99,
        description: "Classic softball jersey for optimal comfort.",
        image: "../assets/products/Softball Uniform/Post 2/A9c7f99005ee94262a51c07d3e60e74794.jpg_720x720q50.avif"
    },
    {
        id: 38,
        name: "Softball Pants",
        price: 39.99,
        description: "Durable softball pants for gameplay.",
        image: "../assets/products/Softball Uniform/Post 3/Aaac28bdd08194e438534d25349ef722dd.jpg_720x720q50.avif"
    },
    {
        id: 40,
        name: "Field Hockey Shorts",
        price: 29.99,
        description: "Flexible shorts for field hockey gameplay.",
        image: "../assets/products/Ice Hockey Uniform/Post 5/H558e9ad547aa4a29840b16f7178da35az.jpg_720x720q50.avif"
    },
    {
        id: 43,
        name: "Volleyball Socks",
        price: 11.99,
        description: "Comfortable and breathable socks for volleyball players.",
        image: "../assets/products/Volleyball Uniform/Post 4/A84c2211915e34e31918bd44edc3c7d1ei.webp"
    },
    {
        id: 44,
        name: "Soccer Shin Guards",
        price: 19.99,
        description: "Protective shin guards for soccer players.",
        image: "../assets/products/Soccer Uniform/Post 4/Adc2738c1a537434991a3f8e0d100475dC.webp"
    },
    {
        id: 45,
        name: "Baseball Cap",
        price: 14.99,
        description: "Classic cap for baseball players and fans.",
        image: "../assets/products/Baseball Uniform/Post 4/A5ecbeb8d0b694ceebca59fe77cd6aadef.jpg_720x720q50.avif"
    }
];

export default Products;