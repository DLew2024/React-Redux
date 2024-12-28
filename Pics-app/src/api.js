import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID iqDNNERa-3XldzQJ-NmvrpgaIm3Zr2DwIr4mLjEnvmI",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
