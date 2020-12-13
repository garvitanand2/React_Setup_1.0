var toDoUsersData = {
  id: "123",
  user_info: {
    name: "Garvit Anand",
    phone: "918800208302",
    email: "xyz@gmail.com",
  },
  bucket_list: [
    {
      id: 0,
      name: "Food",
      desc: "Sample food desc",
      status: true,
      items: [
        { id: 3231, data: "To buy saucages", status: true, StatusGood: true },
        { id: 3232, data: "To buy Arahar Dal", status: true, StatusGood: true },
        { id: 32132, data: "To buy chicken", status: false, StatusGood: true },
      ],
    },
    {
      id: 1,
      name: "Clothes",
      desc: "Sample clothes desc",
      status: true,
      items: [{ id: 7878, data: "To buy new clothes", status: true, StatusGood:true }],
    },
  ],
};

export default toDoUsersData;
