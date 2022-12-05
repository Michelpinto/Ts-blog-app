import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Blogs from './pages/blogs/Blogs';
import SingleBlogPage from './pages/blogs/SingleBlogPage';
import Login from './pages/login/Login';
import NewBlog from './pages/newBlog/NewBlog';

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/:id' element={<SingleBlogPage />} />
        <Route path='/newBlog' element={<NewBlog />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
