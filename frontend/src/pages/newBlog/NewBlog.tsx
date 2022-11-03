import React, { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';

import { Div, Form } from './styles';

const NewBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const blogs = useSelector((state: any) => state.blogs.blogs);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
      ['code-block'],
    ],
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'code-block',
  ];

  const placeholder = "Let's write something epic...";

  const { quillRef, quill } = useQuill({ modules, formats, placeholder });

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        setContent(quill.root.innerHTML);
      });
    }
  }, [quill]);

  const createNewBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const blog = {
    //   title,
    //   content,
    // };
    // console.log(blog);

    const response = await fetch('http://localhost:5000/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    const data = await response.json();
    console.log(data);

    setTitle('');
    quill?.setText('');
  };

  return (
    <Div>
      <h1>Share your amazing ideas</h1>
      <Form onSubmit={createNewBlog}>
        <input
          onChange={handleTitleChange}
          value={title}
          name='title'
          placeholder='Title'
          type='text'
        />
        <div>
          <div ref={quillRef} />
        </div>
        <button type='submit'>Post blog</button>
      </Form>
    </Div>
  );
};

export default NewBlog;
