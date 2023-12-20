import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4019/superheroes");
};

const RqSuperHeroes = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    { cacheTime: 5000 }
  );

  console.log(isLoading, isFetching);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React query super heroes page...</h2>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};

export default RqSuperHeroes;
