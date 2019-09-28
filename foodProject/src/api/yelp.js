import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer gAApzDztJe-5qR2FIzWwSjlid8nCz9zTBz2ep4EKSJGJ1JKYdB1EpeJwvgDkocy5bo4wBnCDAssh2z-XFSgfq0g8VBi253NUDr83fBcQyduEVAPcDdMZf2TVxQSGXXYx"
  }
});
