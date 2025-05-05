export interface ProductType {
  productId: number;
  title: string;
  price: number;
  category: string;
  description?: string;
  image?: string[];
  rating?: number;
}

const products: ProductType[] = [
  {
    productId: 1,
    title: "Performance Dry Fit T-Shirt",
    price: 999,
    category: "T-Shirts",
    description:
      "High-performance dry fit t-shirt for intense workouts, keeps you cool and dry even during long sessions.",
    image: [
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746477595/Performance_Dry_Fit_T-Shirt_duujca.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746477595/Performance_Dry_Fit_T-Shirt1_s0celz.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746477594/Performance_Dry_Fit_T-Shirt2_q5ngxs.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746477594/Performance_Dry_Fit_T-Shirt3_jreh49.avif",
    ],
    rating: 4.5,
  },
  {
    productId: 2,
    title: "Cotton Gym T-Shirt",
    price: 799,
    category: "T-Shirts",
    description:
      "Soft cotton t-shirt designed for everyday gym sessions with breathable fabric and comfortable fit for long hours.",
    image: [
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478172/Cotton_Gym_TShirt_mcjyjo.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478172/Cotton_Gym_TShirt2_u7jy3x.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478172/Cotton_Gym_TShirt1_wfem13.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478173/Cotton_Gym_TShirt3_b5v7gn.avif",
    ],
    rating: 4.2,
  },
  {
    productId: 3,
    title: "Sleeveless Workout Tank",
    price: 699,
    category: "T-Shirts",
    description:
      "Sleeveless tank top with stretchable fabric offering great flexibility and airflow during high-intensity workouts.",
    image: [
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478239/Sleeveless_Workout_Tank_qkkcn6.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478241/Sleeveless_Workout_Tank1_qjnlk4.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478240/Sleeveless_Workout_Tank2_kkeznq.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478240/Sleeveless_Workout_Tank3_f7xkki.avif",
    ],
    rating: 4.3,
  },
  {
    productId: 4,
    title: "Oversized Activewear Tee",
    price: 1099,
    category: "T-Shirts",
    description:
      "Stylish oversized t-shirt made with quick-dry fabric perfect for gym, casual wear, and fitness routines.",
    image: [
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746479245/p2643995_qjnrvn.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746479255/p2643998_cmbapf.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746479253/p2643997_acvdlx.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746479249/p2643996_bowvrm.avif",
    ],
    rating: 4.0,
  },
  {
    productId: 5,
    title: "Seamless Compression Tee",
    price: 1299,
    category: "T-Shirts",
    description:
      "Seamless compression fit t-shirt improves blood flow and muscle support, enhancing performance during intense workouts.",
    image: [
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478291/p2367034_rsla3v.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478290/p2367033_plzsje.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478289/p2367031_doblvm.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478288/p2367032_eadc6y.avif",
    ],
    rating: 4.7,
  },
  {
    productId: 6,
    title: "Training Shorts for Men",
    price: 899,
    category: "Bottomwear",
    description:
      "Lightweight and flexible training shorts designed for unrestricted movement and breathable comfort during workouts.",
    image: [
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478368/p2732081_cedd4q.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478367/p2732079_gbjcfw.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478366/p2732078_snirnf.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478366/p1883256_jopuei.avif",
    ],
    rating: 4.4,
  },
  {
    productId: 7,
    title: "Slim Fit Joggers",
    price: 1399,
    category: "Bottomwear",
    description:
      "Modern slim-fit joggers with ankle cuffs and stretchable material for both gym and casual wear.",
    image: [
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478441/p2621126_sv3oac.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478440/p2197286_ppwfel.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478439/p2197284_hylgdr.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478439/p2197285_tg2ctj.avif",
    ],
    rating: 4.6,
  },
  {
    productId: 8,
    title: "High-Performance Leggings",
    price: 1499,
    category: "Bottomwear",
    description:
      "Full-length compression leggings with moisture-wicking technology to keep you dry during intense leg workouts.",
    image: [
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478528/p2629185_ltdkj4.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478526/p2629151_soqq8p.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478525/p2629122_ezi8ju.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478521/p2629113_dw0sp4.avif",
    ],
    rating: 4.3,
  },
  {
    productId: 9,
    title: "Cotton Workout Shorts",
    price: 799,
    category: "Bottomwear",
    description:
      "Stretchable cotton workout shorts offering comfort, breathability, and enough pocket space for essentials.",
    image: [
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478554/p2828365_cjge9l.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478553/p2828364_mjs2i6.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478552/p2828363_s6aumn.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478547/p2828362_iaucv3.avif",
    ],
    rating: 4.1,
  },
  {
    productId: 10,
    title: "Tapered Fit Track Pants",
    price: 1299,
    category: "Bottomwear",
    description:
      "Tapered track pants designed with sweat-wicking fabric and zippered pockets for secure storage during activities.",
    image: [
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478581/p1880644_rktzj9.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478579/p1880568_ta91gq.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478578/p1880567_u8oh3m.avif",
      "https://res.cloudinary.com/dac4kvju3/image/upload/v1746478576/p1880565_paer8a.avif",
    ],
    rating: 4.5,
  },
  {
    productId: 11,
    title: "Sports Wristband Pack",
    price: 299,
    category: "Accessories",
    description:
      "Sweat-absorbing wristbands made with soft material to keep hands dry and provide wrist support while lifting.",
    image: [],
    rating: 4.4,
  },
  {
    productId: 12,
    title: "Gym Duffle Bag",
    price: 1999,
    category: "Accessories",
    description:
      "Spacious gym duffle bag with multiple compartments for shoes, bottles, and accessories with waterproof build.",
    image: [],
    rating: 4.7,
  },
  {
    productId: 13,
    title: "Adjustable Workout Gloves",
    price: 899,
    category: "Accessories",
    description:
      "Padded gloves with wrist strap support for better grip and protection during lifting, pulling, and training.",
    image: [],
    rating: 4.5,
  },
  {
    productId: 14,
    title: "Sweat-Resistant Headband",
    price: 349,
    category: "Accessories",
    description:
      "Elastic headband designed to stay in place while soaking sweat during cardio and HIIT sessions.",
    image: [],
    rating: 4.0,
  },
  {
    productId: 15,
    title: "Resistance Band Set",
    price: 1199,
    category: "Accessories",
    description:
      "Set of resistance bands for home workouts, rehabilitation, and strength training with different resistance levels.",
    image: [],
    rating: 4.6,
  },
  {
    productId: 16,
    title: "Zipper Pocket Gym Shorts",
    price: 999,
    category: "Bottomwear",
    description:
      "Gym shorts with zipper pockets and moisture control fabric, great for running, training, or daily wear.",
    image: [],
    rating: 4.2,
  },
  {
    productId: 17,
    title: "Mesh Panel T-Shirt",
    price: 899,
    category: "T-Shirts",
    description:
      "Breathable mesh panel t-shirt ideal for hot weather workouts and designed for maximum airflow and movement.",
    image: [],
    rating: 4.1,
  },
  {
    productId: 18,
    title: "Reflective Gym Jacket",
    price: 1799,
    category: "Accessories",
    description:
      "Lightweight reflective gym jacket with zipper closure, keeps you visible and comfortable during early runs.",
    image: [],
    rating: 4.3,
  },
  {
    productId: 19,
    title: "Men’s Compression Shorts",
    price: 899,
    category: "Bottomwear",
    description:
      "Tight-fit compression shorts for enhanced performance, support, and reduced muscle fatigue during workouts.",
    image: [],
    rating: 4.5,
  },
  {
    productId: 20,
    title: "Raglan Sleeve Active T-Shirt",
    price: 1049,
    category: "T-Shirts",
    description:
      "Modern raglan-sleeve t-shirt with ergonomic design and sweat-wicking fabric suitable for gym and daily wear.",
    image: [],
    rating: 4.4,
  },
];

export default products;
