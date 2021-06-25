import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from './components/TopNav';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import CardCarousel from './components/Carousel';
import MediaCard from './components/MediaCard';
import Data from './components/Data';
import DataHeading from './components/DataHeading';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <TopNav/>
     <Navbar/>
     <Menu/>
    <CardCarousel/>
    <MediaCard/>
    <DataHeading/>
    <Data/>
    <Footer/>
    </div>
  );
}

export default App;
