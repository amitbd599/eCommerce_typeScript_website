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

  const productImgFile: { src: string }[] = [
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654986427/Ecommerce%20Product%20Img-%20Important/S608db1fd077343a8acbd5f86ef49c403h_zpuh5t.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654986697/Ecommerce%20Product%20Img-%20Important/Sef70926d6b3e4270b6421bfab06cfeb6N_ethvy5.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654986554/Ecommerce%20Product%20Img-%20Important/H0ece10d529f247988751160c3c78e78aD_b3c8ax.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654986678/Ecommerce%20Product%20Img-%20Important/H0a8632e1daa945b9a0328f62ae43c146h_ghakvn.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654986547/Ecommerce%20Product%20Img-%20Important/Hf3d62562396e4bbebbe1c6d8dbb7e8dfi_qja48j.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654986534/Ecommerce%20Product%20Img-%20Important/H82ee6ee5946d4b529d8fe2903b95588cQ_oxdxgx.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654986519/Ecommerce%20Product%20Img-%20Important/HTB1qpFEcUGF3KVjSZFvq6z_nXXaC_vszyoe.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654986416/Ecommerce%20Product%20Img-%20Important/H34579b28cbf44b11aebd2242ed0f35f2K_jpaw2i.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654986434/Ecommerce%20Product%20Img-%20Important/S4a089189c7744c74a267d0ef908ecd0d6_oxvvft.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654986407/Ecommerce%20Product%20Img-%20Important/Hcf988b8f4d4645bb9431372045fe96b6U_s1ptp5.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654986386/Ecommerce%20Product%20Img-%20Important/H239bcd49212b425f91d54a5a7dc01105d_t990uu.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654986328/Ecommerce%20Product%20Img-%20Important/S2200a913b14d4b72affc63535a04bc92f_klj16h.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985963/Ecommerce%20Product%20Img-%20Important/S6e8e01fcc6294199a12c3d03dda8936ev_o5p6wk.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985925/Ecommerce%20Product%20Img-%20Important/HTB12ExXQwHqK1RjSZFgq6y7JXXax_rzcy1b.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985974/Ecommerce%20Product%20Img-%20Important/Scb811eb0c2a54e7db82449dc50f1361c1_opir3a.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985963/Ecommerce%20Product%20Img-%20Important/S6e8e01fcc6294199a12c3d03dda8936ev_o5p6wk.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985328/Ecommerce%20Product%20Img-%20Important/H1d97e67af1d04b5da490e56462b4d17ei_lp8ljd.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985952/Ecommerce%20Product%20Img-%20Important/Sae2639f8435a4b62afa4367af862301dX_nheipp.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985884/Ecommerce%20Product%20Img-%20Important/H98e382fd292b448a91b93728f0c04a6f0_jjgr91.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985939/Ecommerce%20Product%20Img-%20Important/Hdeea7402ec634275bf4da3a9c7810676i_vl2oil.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985876/Ecommerce%20Product%20Img-%20Important/Hfdb99d3fb49d4109805ef327ae33cdd8Q_kftf2i.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985856/Ecommerce%20Product%20Img-%20Important/H26ab155676ad4f8db464ea723ea38fe3U_y7kd5h.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985869/Ecommerce%20Product%20Img-%20Important/H081987f4f67d4a0096c6d46d091ecc21L_n46dxi.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985837/Ecommerce%20Product%20Img-%20Important/H17d2626e0a6544e4b98c4e8bb8a8b505y_x4kk0k.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985822/Ecommerce%20Product%20Img-%20Important/H8fd7fec8531a4609a00c0c9d31058b7aD_dhblru.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985799/Ecommerce%20Product%20Img-%20Important/Hf7e72fb6036243de956a3d8581aefde8k_eo94ug.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985766/Ecommerce%20Product%20Img-%20Important/Ha0a6d0ca3c924d71b34c410ec73ea45cJ_iunk01.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985782/Ecommerce%20Product%20Img-%20Important/Hd01af9c3bcdc4e9794406ae18dd3508eL_npcbvb.webp",
    },

    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654983820/Ecommerce%20Product%20Img-%20Important/H55b3141f3c934dd686bccf4b9d83f9bfR_cqambr.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654983695/Ecommerce%20Product%20Img-%20Important/H80237188aeb04868a1a10eee83914b12W_u8itmd.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654984901/Ecommerce%20Product%20Img-%20Important/Hb7d0730171344d0a891e62f7a7defa53c_s07htm.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654983796/Ecommerce%20Product%20Img-%20Important/Ha1e73a96090e467bbd6a43bacfb1762fq_yyiy2w.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654983810/Ecommerce%20Product%20Img-%20Important/Hbd2ac87f479a46df9a2c5e28f7a9df7cs_pkfrky.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985240/Ecommerce%20Product%20Img-%20Important/H615e82b3a1524ba6bb61b21ae7b08ac8n_ecwy1f.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654985125/Ecommerce%20Product%20Img-%20Important/Hf8bc8b38d70d40279de119f08590202dV_r2dcrf.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654984987/Ecommerce%20Product%20Img-%20Important/Sc6da1ea51ed247eb85a6c93755aaf2900_mvo2nr.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654984936/Ecommerce%20Product%20Img-%20Important/H0447e5b58bd24c9b844788d94f3da96c6_h5qb8e.png",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654984980/Ecommerce%20Product%20Img-%20Important/S336723cfd5f2431488db00451e68a13c2_r1taop.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654984832/Ecommerce%20Product%20Img-%20Important/S2ba2aa32f7354cfa8f8ff7adacfecee9p_dxvwja.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654984786/Ecommerce%20Product%20Img-%20Important/S073bc9f67af24e7bbfbc48d9019c160bO_sim1hk.jpg",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654984891/Ecommerce%20Product%20Img-%20Important/S79801d655d434939b2e91f95904dc3c5q_jmpfyd.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654984704/Ecommerce%20Product%20Img-%20Important/H733780a0a5ab4dbd96a6546fa5f12f96i_d8llkr.webp",
    },
    {
      src: "https://res.cloudinary.com/amitjs/image/upload/v1654984661/Ecommerce%20Product%20Img-%20Important/H4a137fbca0ca437daaced6a9940ed3a3t_las5d7.webp",
    },
  ];

  return {
    mixProduct,
    productSlider,
    product,
    productmixedSize,
    productImgFile,
  };
};

export default Product_Data;
