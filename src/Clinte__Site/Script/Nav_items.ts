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
    link: "/shop",
    className: "shop",
    shop: "cdf",
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
        link: "/cart-page",
      },
      {
        item: "Blog",
        link: "/blog",
      },
      {
        item: "Single Blog",
        link: "/single-blog",
      },
      {
        item: "About",
        link: "/about",
      },
      {
        item: "Account",
        link: "/account",
      },
    ],
  },

  {
    item: "Blog",
    link: "/",
  },
  {
    item: "Contact",
    link: "/",
  },
];

export default nav__Items;
