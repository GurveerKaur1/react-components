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
      image: 'https://th.bing.com/th/id/R.8ac394618bb28c1ffbac80dc099826ac?rik=1TRUn2nXC6ztvg&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1541783245831-57d6fb0926d3%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8NHx8Y2hvY29sYXR8fDB8fHx8MTYyOTE5Njc1MQ%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=7uZNJ39aeBNmR%2bh6BCU31S2Wrrf6M54KkbCvBCzAOhU%3d&risl=&pid=ImgRaw&r=0'
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
        images={images}
      />
      <Footer
        text='All Rights Reserved. &copy;2023 FoodShop' />
    </>

  )
}
export default App;
