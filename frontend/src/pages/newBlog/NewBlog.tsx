import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Div, Form } from './styles';

const NewBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
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

  return (
    <Div>
      <h1>Share your amazing ideas</h1>
      <Form>
        <input
          onChange={handleTitleChange}
          value={title}
          name='title'
          placeholder='Title'
          type='text'
        />
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          placeholder='Write something amazing...'
          // theme='snow'
          modules={modules}
          formats={formats}
        />
        <button type='submit'>Post blog</button>
      </Form>
    </Div>
  );
};

export default NewBlog;
