import Header from "../components/Header";
import styles from './page.module.css'
import PockemonsList from '../components/PockemonsList'
import axios from "axios";

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});
async function getData(endpoint){
  try {
    const response = await instance.get(endpoint)

    return response.data.results

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

const Home = async () => {
  let pocks = await getData()
  pocks = pocks.slice(0, 10)

  console.log(pocks)

  return (
    <div>
      <Header/>
      <PockemonsList pocks={pocks}/>
    </div>
  );
};

export default Home;