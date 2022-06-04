const custom_Data = () => {
  type language = {
    id: number;
    title: string;
    sort_title: string;
  };
  const language = [
    {
      id: 1,
      title: "English",
      sort_title: "Eng",
    },
    {
      id: 2,
      title: "Russian",
      sort_title: "Rus",
    },
    {
      id: 3,
      title: "Spanish",
      sort_title: "Spa",
    },
    {
      id: 4,
      title: "French",
      sort_title: "Fre",
    },
    {
      id: 5,
      title: "Portuguese",
      sort_title: "Por",
    },
  ];

  return { language };
};

export default custom_Data;
