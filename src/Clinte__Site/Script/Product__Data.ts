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

  return { mixProduct };
};

export default Product_Data;
