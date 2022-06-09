const Product_Data = () => {
  type mixProduct = {
    name: string;
    img: string;
    price: number;
    categories: string;
  };

  const mixProduct: mixProduct[] = [
    {
      name: "",
      img: "/assets/images/mix-product/mix_product-1.png",
      price: 10,
      categories: "Children",
    },
    {
      name: "",
      img: "/assets/images/mix-product/mix_product-12.png",
      price: 10,
      categories: "Boys",
    },
    {
      name: "",
      img: "/assets/images/mix-product/mix_product-17.png",
      price: 10,
      categories: "Girls",
    },
    {
      name: "",
      img: "/assets/images/mix-product/mix_product-2.png",
      price: 10,
      categories: "Women",
    },
    {
      name: "",
      img: "/assets/images/mix-product/mix_product-14.png",
      price: 10,
      categories: "Men",
    },
    {
      name: "",
      img: "/assets/images/mix-product/mix_product-18.png",
      price: 10,
      categories: "Accessory",
    },
    {
      name: "",
      img: "/assets/images/mix-product/mix_product-19.png",
      price: 10,
      categories: "Shoes",
    },
    {
      name: "",
      img: "/assets/images/mix-product/mix_product-3.png",
      price: 10,
      categories: "Beauty",
    },
    {
      name: "",
      img: "/assets/images/mix-product/mix_product-20.png",
      price: 10,
      categories: "Groceries",
    },
    {
      name: "",
      img: "/assets/images/mix-product/mix_product-6.png",
      price: 10,
      categories: "Health",
    },
    {
      name: "",
      img: "/assets/images/mix-product/mix_product-5.png",
      price: 10,
      categories: "Clothing",
    },
    {
      name: "",
      img: "/assets/images/mix-product/mix_product-7.png",
      price: 10,
      categories: "Belt",
    },
  ];

  // Product Slider Data

  type productSlider = {
    name: string;
    img: string;
    categories: string;
    link: string;
  };

  let productSlider: productSlider[] = [
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-1.png",
      categories: "Audio/Video",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-2.png",
      categories: "Gaming",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-3.png",
      categories: "Headphone",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-4.png",
      categories: "Digital Camera",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-5.png",
      categories: "Mobile Phone",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-6.png",
      categories: "Computer",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-7.png",
      categories: "Smart TV",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-8.png",
      categories: "Smart Watch",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-9.png",
      categories: "Jewelry",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-10.png",
      categories: "Bag",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-11.png",
      categories: "T shirt",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-12.png",
      categories: "sunglasses",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-13.png",
      categories: "Beard Oil",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-14.png",
      categories: "Coffee",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-15.png",
      categories: "Dual-Chip Watch",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-16.png",
      categories: "Cable",
      link: "/",
    },
    {
      name: "",
      img: "/assets/images/productSliderOne/productSlider-17.png",
      categories: "Cosmetic",
      link: "/",
    },
  ];

  // Product Data

  type product = {
    name: string;
    img: string;
    categories: string;
    link: string;
    rate?: number;
    price?: number;
    brand?: string;
  };

  let product: product[] = [
    {
      name: "Math Clock  Half Sleeve T Shirt For Men",
      img: "/assets/images/products_Small/product-1.png",
      categories: "T Shirt",
      link: "/",
      rate: 3,
      price: 60,
      brand: "Pcnoa",
    },
    {
      name: "Exclusive leather wallet money bag for men",
      img: "/assets/images/products_Small/product-2.png",
      categories: "Wallet",
      link: "/",
      rate: 4,
      price: 90,
      brand: "Synthetic",
    },
    {
      name: "Stiff Belt for Men SB-B47- Black",
      img: "/assets/images/products_Small/product-3.png",
      categories: "Belt",
      link: "/",
      rate: 5,
      price: 120,
      brand: "Foxcon",
    },
    {
      name: "Striped casual sneaker shoes for men",
      img: "/assets/images/products_Small/product-4.png",
      categories: "Shoes",
      link: "/",
      rate: 5,
      price: 60,
      brand: "Sneaker",
    },
    {
      name: "Boys Short Pant Branded Targis",
      img: "/assets/images/products_Small/product-5.png",
      categories: "Pant",
      link: "/",
      rate: 2,
      price: 60,
      brand: "Adadas",
    },
    {
      name: "31-in-1 Screwdriver Tool Set - Yellow",
      img: "/assets/images/products_Small/product-6.png",
      categories: "Screwdriver",
      link: "/",
      rate: 4,
      price: 60,
      brand: "Screw",
    },
    {
      name: "HTC AT-522 Trimmer for men - Black",
      img: "/assets/images/products_Small/product-7.png",
      categories: "Trimmer",
      link: "/",
      rate: 3,
      price: 300,
      brand: "HTC",
    },
    {
      name: "Xiaomi Redmi Buds 3 Youth Edition - Black",
      img: "/assets/images/products_Small/product-8.png",
      categories: "Ear Buds",
      link: "/",
      rate: 5,
      price: 40,
      brand: "Xiaomi",
    },
    {
      name: "Selfie Camera Lenses - Black & Blue",
      img: "/assets/images/products_Small/product-9.png",
      categories: "Lenses",
      link: "/",
      rate: 3,
      price: 20,
      brand: "Macro",
    },
    {
      name: "Black Half Foam Net Styles Cap for Men",
      img: "/assets/images/products_Small/product-10.png",
      categories: "Cap",
      link: "/",
      rate: 4,
      price: 30,
      brand: "Retro",
    },
  ];

  // productmixedSize Data

  type productmixedSize = {
    name: string;
    img: string;
    categories: string;
    link: string;
    rate?: number;
    price?: number;
    brand?: string;
  };

  let productmixedSize: productmixedSize[] = [
    {
      name: "Math Clock  Half Sleeve T Shirt For Men",
      img: "https://res.cloudinary.com/amitjs/image/upload/v1654759453/productMix/Se300e3f2dada482ba99208559fe98a23a_mcu7hx.jpg",
      categories: "T Shirt",
      link: "/",
      rate: 3,
      price: 60,
      brand: "Pcnoa",
    },
    {
      name: "Exclusive leather wallet money bag for men",
      img: "https://res.cloudinary.com/amitjs/image/upload/v1654759411/productMix/23514209d11c9bd465afd6605cfb9dda_z9bryr.jpg",
      categories: "Wallet",
      link: "/",
      rate: 4,
      price: 90,
      brand: "Synthetic",
    },
    {
      name: "Stiff Belt for Men SB-B47- Black",
      img: "/assets/images/products_Small/product-3.png",
      categories: "Belt",
      link: "/",
      rate: 5,
      price: 120,
      brand: "Foxcon",
    },
    {
      name: "Striped casual sneaker shoes for men",
      img: "/assets/images/products_Small/product-4.png",
      categories: "Shoes",
      link: "/",
      rate: 5,
      price: 60,
      brand: "Sneaker",
    },
    {
      name: "Boys Short Pant Branded Targis",
      img: "/assets/images/products_Small/product-5.png",
      categories: "Pant",
      link: "/",
      rate: 2,
      price: 60,
      brand: "Adadas",
    },
    {
      name: "31-in-1 Screwdriver Tool Set - Yellow",
      img: "/assets/images/products_Small/product-6.png",
      categories: "Screwdriver",
      link: "/",
      rate: 4,
      price: 60,
      brand: "Screw",
    },
    {
      name: "HTC AT-522 Trimmer for men - Black",
      img: "/assets/images/products_Small/product-7.png",
      categories: "Trimmer",
      link: "/",
      rate: 3,
      price: 300,
      brand: "HTC",
    },
    {
      name: "Xiaomi Redmi Buds 3 Youth Edition - Black",
      img: "/assets/images/products_Small/product-8.png",
      categories: "Ear Buds",
      link: "/",
      rate: 5,
      price: 40,
      brand: "Xiaomi",
    },
    {
      name: "Selfie Camera Lenses - Black & Blue",
      img: "/assets/images/products_Small/product-9.png",
      categories: "Lenses",
      link: "/",
      rate: 3,
      price: 20,
      brand: "Macro",
    },
    {
      name: "Black Half Foam Net Styles Cap for Men",
      img: "/assets/images/products_Small/product-10.png",
      categories: "Cap",
      link: "/",
      rate: 4,
      price: 30,
      brand: "Retro",
    },
  ];

  return { mixProduct, productSlider, product, productmixedSize };
};

export default Product_Data;
