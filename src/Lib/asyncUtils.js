export const reducerUtils = {
  initial: (data = null) => ({
    loading: false,
    data,
    error: null,
  }),

  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),

  success: (data) => ({
    data,
    loading: false,
    error: null,
  }),

  error: (error) => ({
    loading: false,
    data: null,
    error,
  }),
};
