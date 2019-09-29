import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
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

const addBlogPost = dispatch => (title, content, callBack) => {
  dispatch({ type: "add_blogpost", payload: { title, content } });
  callBack();
};

const deleteBlogPost = dispatch => id =>
  dispatch({ type: "delete_blogpost", id });

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
    addBlogPost
  },
  [{ title: "Test Post", content: "test content", id: 29834719231273192 }]
);
