import PATH from "path";
export const config = {
  API_URL: "http://localhost:5000",
  MONGO_CONNECT_URL:
    "mongodb+srv://romariopmarinho:taXKLbdlHvtf9dI0@url-shortener-dio.b1nfe.mongodb.net/?retryWrites=true&w=majority",
  NOT_FOUND: PATH.join(__dirname, "..", "NotFound.html"),
};

export default config;
