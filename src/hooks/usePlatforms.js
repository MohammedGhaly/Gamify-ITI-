import useData from "./useData";

function usePlatforms() {
  return useData("/platforms/lists/parents");
}

export default usePlatforms;
