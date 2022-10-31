import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Blogs from './pages/blogs/Blogs';
import NewBlog from './pages/newBlog/NewBlog';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/newBlog' element={<NewBlog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
