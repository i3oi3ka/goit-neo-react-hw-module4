import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getPhotos = async (searchQuery, page = 1) => {
  const data = await axios("/search/photos", {
    params: {
      client_id: "YC6vM8rTbOQ5ThIGUjLKuLx9XKoCNv9Dtloitu66zxU",
      query: searchQuery,
      per_page: 12,
      page,
    },
  });
  return data;
};
