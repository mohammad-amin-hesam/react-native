import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.data;

    case "edit_blogpost":
      return state.map(blogPost =>
        blogPost._id === action.payload._id ? action.payload : blogPost
      );

    case "delete_blogpost":
      return state.filter(blogPost => blogPost._id !== action.id);

    case "add_blogpost":
      return state;

    default:
      return state;
  }
};

const getBlogPosts = dispatch => () => {
  jsonServer.get("api").then(res => {
    const { data } = res;
    dispatch({ type: "get_blogposts", data });
  });
};

const addBlogPost = dispatch => async (title, content, callBack) => {
  const res = await jsonServer.post("api", { content, title });
  dispatch({ type: "add_blogpost", payload: res.data });
  if (callBack) callBack();
};

const editBlogPost = dispatch => (id, title, content, callBack) => {
  jsonServer.put(`api/${id}`, { title, content }).then(res => {
    dispatch({ type: "edit_blogpost", payload: { _id: id, title, content } });
    if (callBack) callBack();
  });
};

const deleteBlogPost = dispatch => async id => {
  await jsonServer.delete(`api/${id}`);
  dispatch({ type: "delete_blogpost", id });
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
    addBlogPost,
    editBlogPost,
    getBlogPosts
  },
  []
);
