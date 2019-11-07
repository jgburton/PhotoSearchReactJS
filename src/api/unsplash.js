import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f71badaf1f9bddc17869e5252c6d576b364dcdd56bb02de11e38c84a07ea03c3"
  }
});
