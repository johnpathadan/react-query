import { useSuperHeroData } from "../hooks/useSuperheroData";

const RqSuperHeroes = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect after encountering an error", error);
  };

  const { data, isLoading, isError, error, isFetching, refetch } =
    useSuperHeroData(onSuccess, onError);

  console.log(isLoading, isFetching);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React query super heroes page...</h2>
      <button type="button" onClick={refetch}>
        Fetch Heroes
      </button>
      {/* {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })} */}
      {data.map((hero) => {
        return <p key={hero.id}>{hero.name}</p>;
      })}
    </>
  );
};

export default RqSuperHeroes;
