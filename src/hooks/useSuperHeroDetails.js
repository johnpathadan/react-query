import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroDetail = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4019/superheroes/${heroId}`);
};

export const useSuperHeroDetails = (heroId) => {
  return useQuery(["superheroes", heroId], fetchSuperHeroDetail);
};
