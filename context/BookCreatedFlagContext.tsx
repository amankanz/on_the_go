/*
import { createContext } from "react";

export const BookCreatedFlagContext = createContext(null);
*/

import { createContext, Dispatch, SetStateAction } from "react";

interface BookCreatedFlagContextType {
  showToastMsg: string | null;
  setShowToastMsg: Dispatch<SetStateAction<string | null>>;
}

export const BookCreatedFlagContext =
  createContext<BookCreatedFlagContextType | null>(null);
