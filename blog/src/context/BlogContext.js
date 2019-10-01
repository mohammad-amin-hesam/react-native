import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.data;

    case "edit_blogpost":
      return state.map(blogPost =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      );

    case "delete_blogpost":
      return state.filter(blogPost => blogPost.id !== action.id);

    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];

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

const addBlogPost = dispatch => (title, content, callBack) => {
  dispatch({ type: "add_blogpost", payload: { title, content } });
  if (callBack) callBack();
};

const editBlogPost = dispatch => (id, title, content, callBack) => {
  dispatch({ type: "edit_blogpost", payload: { id, title, content } });
  if (callBack) callBack();
};

const deleteBlogPost = dispatch => id =>
  dispatch({ type: "delete_blogpost", id });

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
