import axios from "axios";
import { PlaceData } from "../types";

const api = axios.create({ baseURL: "http://localhost:4001" });

export type Params = {
  location: string;
  title: string;
  order: string;
};

// Konaklama yerleri
export const getPlaces = (params: Params) =>
  api.get("/api/places", { params }).then((res) => res.data.places);

// Konaklama yerini getir
export const getPlace = (id: string) =>
  api.get(`/api/place/${id}`).then((res) => res.data.place);

// Konaklama yerini sil
export const deletePlace = (id: number) => api.delete(`/api/place/${id}`);

// Konaklama yerini oluştur
export const createPlace = (body: PlaceData) =>
  api.post(`/api/places`, body);
