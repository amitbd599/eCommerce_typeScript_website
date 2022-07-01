type nav__Items = {
  item: string;
  link: string;
  className?: string | any;
  megaMenu?: string;
  shop?: string;
  dropdown?: any;
};

const nav__Items: nav__Items[] = [
  {
    item: "Home",
    link: "/",
  },
  {
    item: "Mega",
    link: "#",
    className: "megaMenu__intro",
    megaMenu: "cd",
  },
  {
    item: "Shop",
    link: "#",
    className: "shop",
    shop: "cdf",
    dropdown: [
      {
        item: "Product ",
        link: "/product",
      },
      {
        item: "Single Product ",
        link: "/single-product",
      },
    ],
  },
  {
    item: "Page",
    link: "#",
    className: "pageItem",
    dropdown: [
      {
        item: "Portfolio",
        link: "/portfolio",
      },
      {
        item: "Our Store",
        link: "/our-store",
      },
      {
        item: "Cart Page",
        link: "/cart",
      },
      {
        item: "Checkout",
        link: "/checkout",
      },

      {
        item: "About",
        link: "/about",
      },
      {
        item: "Account",
        link: "/account",
      },
      {
        item: "FAQs",
        link: "/faqs",
      },
      {
        item: "Error",
        link: "/error",
      },
      {
        item: "Coming Soon",
        link: "/coming-soon",
      },
      {
        item: "Login/Register",
        link: "/login-register",
      },
    ],
  },

  {
    item: "Blog",
    link: "#",
    className: "pageItem",
    dropdown: [
      {
        item: "Blog ",
        link: "/blog",
      },
      {
        item: "Single Blog ",
        link: "/single-blog",
      },
    ],
  },
  {
    item: "Contact",
    link: "/contact",
  },
];

export default nav__Items;
