import axios from "axios";
async function FetchAPI(userId) {
  const { data } = await axios.get(`https://api.github.com/users/${userId}`);
  console.log(data);
  return data;
}
export default FetchAPI;
