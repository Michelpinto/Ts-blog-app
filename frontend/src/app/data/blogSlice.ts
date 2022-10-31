import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface BlogState {
  blogs: string[];
  isLoading: boolean;
}

const initialState: BlogState = {
  blogs: [],
  isLoading: false,
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await fetch('http://localhost:8000/api/goals');
  const res = await response.json();
  console.log('res', res);
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
  },
});

export default blogSlice.reducer;
