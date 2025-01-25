import { StateCreator } from "zustand";
import { ProformaData } from "@/types/ProformaData";

export type AppSlice = {
  formData: Partial<ProformaData>;
  setFormData: (formData: Partial<ProformaData>) => void;
};

export const createAppSlice: StateCreator<AppSlice> = (set, _) => ({
  formData: {},
  setFormData: (formData) => set({ formData }),
});
