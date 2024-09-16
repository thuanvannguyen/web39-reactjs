export const getPokemon = async (id) => {
  const res = await fetch(`https://d1s1rehmg7ei44.cloudfront.net/api/v2/pokemon/${id}/`);

  if(!res.ok) {
    throw new Error("Failed Get Pokemon");
  }

  return await res.json();

}