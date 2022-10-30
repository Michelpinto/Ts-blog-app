import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from './pages/blogs/Blogs';
import NewBlog from './pages/newBlog/NewBlog';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Blogs />} />
      <Route path='/newBlog' element={<NewBlog />} />
    </Routes>
  );
};

export default App;
