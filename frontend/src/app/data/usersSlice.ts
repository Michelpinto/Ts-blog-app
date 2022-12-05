import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface UsersState {
  users: string[];
}

const initialState: UsersState = {
  users: [],
};

export const createBlog = createAsyncThunk(
  'blog/createBlog',
  async (User: any) => {
    const response = await fetch('http://localhost:8000/api/users', {});

    const data = await response.json();
    console.log(data);
    return data;
  }
);

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await fetch('http://localhost:8000/api/blogs');
  const res = await response.json();
  return res;
});

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
