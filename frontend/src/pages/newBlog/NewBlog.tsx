import React, { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../app/data/blogSlice';

import { Div, ErrorMsg, Form } from './styles';
import { AppDispatch } from '../../app/store';
import Nav from '../../components/nav/Nav';

const NewBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const [message, setMessage] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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
        setText(quill.root.innerHTML);
      });
    }
  }, [quill]);

  const createNewBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const blog = {
      title,
      text,
    };

    if (!title || !text) {
      setMessage('Please write something');
    } else {
      dispatch(createBlog(blog));
      setTitle('');
      quill?.setText('');
    }
  };

  return (
    <>
      <Nav />
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

        {message && <ErrorMsg>{message}</ErrorMsg>}
      </Div>
    </>
  );
};

export default NewBlog;
