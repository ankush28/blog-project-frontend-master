const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://blog-cms2.herokuapp.com/api"
    : "http://localhost:5000/api"

export default baseUrl
