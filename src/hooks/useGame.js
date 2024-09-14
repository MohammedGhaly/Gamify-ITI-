import { useState } from "react";
import useData from "./useData";

function useGame(id) {
  const [price] = useState(Math.ceil(20 + Math.random() * 60));
  const res = useData(`/games/${id}`, undefined, [id]);
  res.data.price = price;
  return res;
}

export default useGame;
