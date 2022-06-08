const Slider__Data = () => {
  interface dataType {
    name?: string;
    img?: string;
    position?: string;
    title?: string;
    des?: string;
  }

  let customer__review: dataType[] = [
    {
      name: "Alex John",
      img: "/assets/images/client/client-1.png",
      position: "Customer",
      des: "In sales, commerce, and economics, a customer is the recipient of a good, service, product or an idea - obtained from a seller, vendor, or supplier via a financial transaction.",
    },
    {
      name: "Alex John",
      img: "/assets/images/client/client-3.png",
      position: "Customer",
      des: "In sales, commerce, and economics, a customer is the recipient of a good, service, product or an idea - obtained from a seller, vendor, or supplier via a financial transaction.",
    },
    {
      name: "Alex John",
      img: "/assets/images/client/client-5.png",
      position: "Customer",
      des: "In sales, commerce, and economics, a customer is the recipient of a good, service, product or an idea - obtained from a seller, vendor, or supplier via a financial transaction.",
    },
    {
      name: "Alex John",
      img: "/assets/images/client/client-2.png",
      position: "Customer",
      des: "In sales, commerce, and economics, a customer is the recipient of a good, service, product or an idea - obtained from a seller, vendor, or supplier via a financial transaction.",
    },
    {
      name: "Alex John",
      img: "/assets/images/client/client-4.png",
      position: "Customer",
      des: "In sales, commerce, and economics, a customer is the recipient of a good, service, product or an idea - obtained from a seller, vendor, or supplier via a financial transaction.",
    },
    {
      name: "Alex John",
      img: "/assets/images/client/client-6.png",
      position: "Customer",
      des: "In sales, commerce, and economics, a customer is the recipient of a good, service, product or an idea - obtained from a seller, vendor, or supplier via a financial transaction.",
    },
  ];

  return { customer__review };
};

export default Slider__Data;
