import './style/index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


function App() {
  let isPrimary = false;
  const images = [
    {
      id: 1001,
      description: 'Phall is basically a thick, tomato based curry made with Habanero or Scotch Bonnet peppers',
      sweetName: 'Phall Curry',
      price: '$50',
      image: 'https://th.bing.com/th/id/R.ffe651004c6c5afe672b2fe79bdbcdc6?rik=ypbzBV%2fQcuI%2fQQ&pid=ImgRaw&r=0'
    },
    {
      id: 1002,
      sweetName: 'Samosa',
      price: '$25',
      description: 'A samosa is a fried pastry with a savory filling, including ingredients such as potatoes.',
      image: 'https://th.bing.com/th/id/R.e2f2c1206d0e38fea58bc6ebf3028425?rik=MSkKE6nRqSvqpQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-l429VyxMmc4%2fUypaEwqqPlI%2fAAAAAAAADG8%2fnAqNhweW-RQ%2fs1600%2fjonassamusa.jpg&ehk=SKJaydfXBEgvLnsZEPunhJB1O29ZQT3E83pbAHP0MTY%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 1003,
      sweetName: 'Noodles',
      price: '$20',
      description: 'Noodles are food made of dough and sometimes given various shapes.',
      image: 'https://images.pexels.com/photos/2347383/pexels-photo-2347383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: 1003,
      sweetName: 'Chiili Beef',
      price: '$60',
      description: 'Beef Chilli Dry is stir-fried beef rolled in Chinese sweet and spicy veggies sauce.',
      image: 'https://images.pexels.com/photos/3535395/pexels-photo-3535395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ];

  return (
    <>
      <Header
        name='FoodShop'
        home='Home'
        about='About Us'
        contact='Contact Us' />

      <Banner
        title='Food Shop'
        content='Discover a culinary journey like no other at FoodShop. Indulge in our exquisite dishes crafted from the freshest ingredients, delivered right to your doorstep. Experience the  perfect blend of flavors and satisfaction.'
        isPrimary={isPrimary} />

      <Gallery
        menu='Menu of Food Shop'
        images={images}
      />
      <Footer
        text='All Rights Reserved. &copy;2023 FoodShop' />
    </>

  )
}
export default App;
