let Slider__Setting = () => {
  type Hero__Slider__setting = {
    // dots: boolean;
    // infinite: boolean;
    // speed: number;
    // slidesToShow: number;
    // slidesToScroll: number;

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
  };

  let Hero__Slider__setting: Hero__Slider__setting[] = [
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

  return { Hero__Slider__setting };
};

export default Slider__Setting;