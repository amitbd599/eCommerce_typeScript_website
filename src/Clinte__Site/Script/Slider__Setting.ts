let Slider__Setting = () => {
  type slider_type = {
    infinite?: boolean;
    slidesToShow?: number;
    slidesToScroll?: number;
    dots?: boolean;
    arrows?: boolean;
    fade?: boolean;
    easing?: string;
    adaptiveHeight?: boolean;
    speed?: 500;
    accessibility?: boolean;
    responsive?: any;
    initialSlide?: number;
    autoplay?: boolean;
  };

  let Hero__Slider__setting: slider_type[] = [
    {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      easing: "fade",
      adaptiveHeight: true,
      accessibility: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
          },
        },
      ],
    },
  ];

  let Product__Slider__One__setting: slider_type[] = [
    {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    },
  ];

  let bestSeller__product__setting: slider_type[] = [
    {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    },
  ];

  let customer__slider__review__setting: slider_type[] = [
    {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  ];

  return {
    Hero__Slider__setting,
    Product__Slider__One__setting,
    bestSeller__product__setting,
    customer__slider__review__setting,
  };
};

export default Slider__Setting;
