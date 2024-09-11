import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bc95292b69814c9daafb6483ffb84fda",
  },
});
