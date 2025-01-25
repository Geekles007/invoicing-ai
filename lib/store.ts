import { createWithEqualityFn } from "zustand/traditional";
import { AppSlice, createAppSlice } from "@/lib/slices/createAppSlice";

type StoreState = AppSlice;

export const useAppStore = createWithEqualityFn<StoreState>(
  (...a) => ({
    ...createAppSlice(...a),
  }),
  Object.is,
);
