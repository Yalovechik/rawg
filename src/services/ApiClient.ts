import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fded9c8f2bbe46c98ac94828d879e2be",
  },
});
