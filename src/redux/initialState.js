const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      image: 'src=../../images/bed/arb_1.jpg',
      price: 30,
      oldPrice: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      image: 'src=../../images/bed/arb_2.jpg',
      price: 30,

      stars: 2,
      userRating: 4,
      promo: 'sale',
      newFurniture: true,
      favorites: true,
      heart: true,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      image: 'src=../../images/bed/arb_3.jpg',
      price: 30,

      stars: 2,
      userRating: 3,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      image: 'src=../../images/bed/arb_4.jpg',
      price: 30,

      stars: 2,
      userRating: 5,
      promo: 'sale',
      newFurniture: true,
      favorites: true,
      heart: true,
      arrows: true,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      image: 'src=../../images/bed/arb_5.jpg',
      price: 30,
      oldPrice: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      image: 'src=../../images/bed/arb_6.jpg',
      price: 30,

      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      image: 'src=../../images/bed/arb_7.jpg',
      price: 30,
      oldPrice: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      image: 'src=../../images/bed/arb_8.jpg',
      price: 30,

      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      image: 'src=../../images/bed/arb_9.jpg',
      price: 30,
      oldPrice: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      image: 'src=../../images/bed/arb_10.jpg',
      price: 30,

      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      image: 'src=../../images/bed/arb_11.jpg',
      price: 30,

      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      image: 'src=../../images/bed/arb_12.jpg',
      price: 30,
      oldPrice: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      image: 'src=../../images/bed/arb_13.jpg',
      price: 30,

      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      image: 'src=../../images/bed/arb_14.jpg',
      price: 30,

      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      image: 'src=../../images/bed/arb_15.jpg',
      price: 30,

      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      image: 'src=../../images/bed/arb_16.jpg',
      price: 30,
      oldPrice: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      image: 'src=../../images/bed/arb_17.jpg',
      price: 30,

      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      image: 'src=../../images/bed/arb_18.jpg',
      price: 30,

      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      image: 'src=../../images/bed/arb_19.jpg',
      price: 30,
      oldPrice: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      image: 'src=../../images/bed/arb_20.jpg',
      price: 30,

      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      image: 'src=../../images/bed/arb_21.jpg',
      price: 30,

      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      image: 'src=../../images/bed/arb_22.jpg',
      price: 30,
      oldPrice: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      image: 'src=../../images/bed/arb_23.jpg',
      price: 30,

      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      image: 'src=../../images/bed/arb_24.jpg',
      price: 30,

      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      heart: false,
      arrows: false,
    },
  ],
  cart: {
    products: [],
  },
  compare: {
    products: [],
  },
  chairs: [
    {
      id: 'chair-1',
      name: 'chair 1',
      image: 'src=../../images/chairs.jpg',
    },
  ],
  brands: [
    {
      id: 'brand-1',
      name: 'brand 1',
      image: 'https://i.imgur.com/ZuY7GNH.jpg',
    },
    {
      id: 'brand-2',
      name: 'brand 2',
      image: 'https://i.imgur.com/1MobFGZ.jpg',
    },
    {
      id: 'brand-3',
      name: 'brand 3',
      image: 'https://i.imgur.com/cOyb9mk.jpg',
    },
    {
      id: 'brand-4',
      name: 'brand 4',
      image: 'https://i.imgur.com/1P2Y8zb.jpg',
    },
    {
      id: 'brand-5',
      name: 'brand 5',
      image: 'https://i.imgur.com/spQ9tQf.jpg',
    },
    {
      id: 'brand-6',
      name: 'brand 6',
      image: 'https://i.imgur.com/ZuY7GNH.jpg',
    },
    {
      id: 'brand-7',
      name: 'brand 7',
      image: 'https://i.imgur.com/1MobFGZ.jpg',
    },
    {
      id: 'brand-8',
      name: 'brand 8',
      image: 'https://i.imgur.com/cOyb9mk.jpg',
    },
    {
      id: 'brand-9',
      name: 'brand 9',
      image: 'https://i.imgur.com/1P2Y8zb.jpg',
    },
    {
      id: 'brand-10',
      name: 'brand 10',
      image: 'https://i.imgur.com/spQ9tQf.jpg',
    },
  ],
  feedbacks: [
    {
      id: 'quote-1',
      clientName: 'John Smith',
      clientText:
        'Vestibulum eu ante non enim malesuada vestibulum quis ac nisl. Nullam eget lacus iaculis, blandit augue in, pulvinar ipsum. Curabitur quis ligula tempus, tristique sapien pulvinar, dictum enim. Etiam tempor mollis tellus, id interdum ipsum condimentum id.',
      clientImage:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'quote-2',
      clientName: 'Mary Shelley',
      clientText:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis tellus est. Sed sapien mi. Mauris diam quam, consequat vitae neque in, pretium efficitur mauris. Donec vulputate consectetur ipsum non dictum. Aenean enim dui.',
      clientImage:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'quote-3',
      clientName: 'Jane Doe',
      clientText:
        'Etiam accumsan dui a lacus pulvinar gravida. Duis eu congue urna. Pellentesque facilisis justo vitae enim viverra dictum. Proin non lacus. Phasellus in blandit leo, a maximus magna. Phasellus cursus eros sit amet lacus fermentum ultrices. Etiam eget sapien at erat.',
      clientImage:
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ],
  mode: '',
  banner: {
    title: 'BEDROOM',
    titleBold: 'FURNITURE',
    subtitle: 'ALWAYS',
    subtitleColor: '25%',
    subtitleAfterColor: 'OFF OR MORE',
  },
};

export default initialState;
