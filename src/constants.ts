import { OrderBy } from "./enums";

const defaultFilter = {
  name: "",
  rating: null,
  order: OrderBy.Date,
  asc: true,
};

const options = [
  {
    key: "first_release_date",
    value: "Release Date",
  },
  {
    key: "rating",
    value: "Score",
  },
  {
    key: "name",
    value: "Name",
  },
];

export { defaultFilter, options };
