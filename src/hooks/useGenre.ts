import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";
import { Games } from "./useGames";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenre = () => useData<Genre>("/genres");

export default useGenre;
