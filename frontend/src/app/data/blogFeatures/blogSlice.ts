import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import blogService from './blogService';

export interface BlogState {
  blogs: string[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}

export interface Blog {
  title: string;
  text: string;
}

const initialState: BlogState = {
  blogs: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

export const createBlog = createAsyncThunk(
  'blog/createBlog',
  async (blog: Blog, ThunkAPI: any) => {
    const token = ThunkAPI.getState().auth.user.token;
    try {
      return await blogService.createBlog(blog, token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return ThunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async (_, ThunkAPI: any) => {
    try {
      const token = ThunkAPI.getState().auth.user.token;

      return await blogService.fetchBlogs(token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return ThunkAPI.rejectWithValue(message);
    }
  }
);

export const blogSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.blogs = action.payload;
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload as string;
    });

    // create blog
    builder.addCase(createBlog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.blogs.push(action.payload);
    });
    builder.addCase(createBlog.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload as string;
    });
  },
});

export const { reset } = blogSlice.actions;

export default blogSlice.reducer;
