import { useOutletContext } from "react-router-dom";
export function useBounty() {
  return useOutletContext(); // { bounty }
}
