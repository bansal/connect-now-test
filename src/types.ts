import type { OrderBy } from "@/enums";

interface VideoGameType {
  id: number;
  first_release_date: number;
  name: string;
  rating: number;
  summary: string;
}

interface FilterType {
  name: string;
  rating: number | null;
  order: OrderBy;
  asc: boolean;
}

export type { VideoGameType, FilterType };
