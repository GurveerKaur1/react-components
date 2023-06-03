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
      image: 'http://127.0.0.1:5500/Tools%20and%20Automation/Responsive/assets/img/pexels-naim-benjelloun-1618955.jpg'
    },
    {
      id: 1002,
      sweetName: 'Samosa',
      price: '$25',
      description: 'A samosa is a fried pastry with a savory filling, including ingredients such as potatoes.',
      image: 'http://127.0.0.1:5500/Tools%20and%20Automation/Responsive/assets/img/pexels-antony-trivet-13354489.jpg'
    },
    {
      id: 1003,
      sweetName: 'Noodles',
      price: '$20',
      description: 'Noodles are food made of dough and sometimes given various shapes.',
      image: 'http://127.0.0.1:5500/Tools%20and%20Automation/Responsive/assets/img/pexels-engin-akyurt-2347383.jpg'
    },
    {
      id: 1003,
      sweetName: 'Chiili Beef',
      price: '$60',
      description: 'Beef Chilli Dry is stir-fried beef rolled in Chinese sweet and spicy veggies sauce.',
      image: 'http://127.0.0.1:5500/Tools%20and%20Automation/Responsive/assets/img/pexels-iconcom-800773.jpg'
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
        sweets='Spicy'
        images={images}
      />
      <Footer
        text='All Rights Reserved. &copy;2023 FoodShop' />
    </>

  )
}
export default App;
