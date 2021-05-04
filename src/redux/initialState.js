export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        userId: '1',
        title: 'Great room for nice and crazy person!',
        content: 'Are you looking for place to live? We offer you a nice room for rent. Fully equiped! Let\'s contact us',
        date: '10.01.2021',
        updateDate: '13.01.2021',
        mail: 'amandagreat@example.com',
        phone: '574853242',
        price: '$200',
        status: 'published',
        image: 'https://images.pexels.com/photos/930004/pexels-photo-930004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '2',
        userId: '2',
        title: 'Phone found',
        content: 'I found some Samsung phone on a Muchoborska railway station yesterday at 9 p.m.. Write me a message and give a feedback what color the case was ',
        date: '14.01.2021',
        updateDate: '15.01.2021',
        mail: 'kennyfox@example.com',
        status: 'published',
      },
      {
        id: '3',
        userId: '3',
        title: 'Russian lessons',
        content: 'Professional Russian teacher will give lessons to all who want to learn new language. Free weekends.',
        date: '20.01.2020',
        updateDate: '21.02.2020',
        mail: 'mathsimon@example.com',
        status: 'published',
        price: '$25',
        image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '4',
        userId: '1',
        title: 'Great room for nice and crazy person!',
        content: 'Are you looking for place to live? We offer you a nice room for rent. Fully equiped! Let\'s contact us',
        date: '10.01.2021',
        updateDate: '13.01.2021',
        mail: 'amandagreat@example.com',
        phone: '574853242',
        price: '$200',
        status: 'published',
        image: 'https://images.pexels.com/photos/930004/pexels-photo-930004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: '5',
        userId: '3',
        title: 'Russian lessons',
        content: 'Professional Russian teacher will give lessons to all who want to learn new language. Free weekends.',
        date: '20.01.2020',
        updateDate: '21.02.2020',
        mail: 'mathsimon@example.com',
        status: 'published',
        price: '$25',
        image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    id: '1',
    logged: true,
  },
};
