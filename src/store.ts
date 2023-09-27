import create from "zustand";
import { Status } from "./__generated__/types";

type FilterState = {
  rating?: number;
  status?: Status;
  setRating: (rating: number | undefined) => void;
  setStatus: (status: Status | undefined) => void;
};

const useStore = create<FilterState>((set) => ({
  rating: undefined,
  status: undefined,
  setRating: (rating: number | undefined) => set({ rating }),
  setStatus: (status: Status | undefined) => set({ status }),
}));

export default useStore;
