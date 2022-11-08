import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface BlogState {
  blogs: string[];
  isLoading: boolean;
}

export interface Blog {
  title: string;
  text: string;
}

const initialState: BlogState = {
  blogs: [],
  isLoading: false,
};

export const createBlog = createAsyncThunk(
  'blog/createBlog',
  async (blog: Blog) => {
    const response = await fetch('http://localhost:8000/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    });

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

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
    });
    builder.addCase(fetchBlogs.rejected, (state) => {
      state.isLoading = false;
    });

    // create blog
    builder.addCase(createBlog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogs.push(action.payload);
    });
    builder.addCase(createBlog.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default blogSlice.reducer;
