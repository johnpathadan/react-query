import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4019/superheroes");
};

export const useSuperHeroData = (onSuccess, onError) => {
  return useQuery("superheroes", fetchSuperHeroes, {
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => {
      const superHeroNames = data.data.map((hero) => {
        return { name: hero.name, id: hero.id };
      });
      return superHeroNames;
    },
  });
};
