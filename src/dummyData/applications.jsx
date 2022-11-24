import kent from "../assets/images/kent.svg";
import zart from "../assets/images/zart.svg";

export const applications = [
  {
    id: "app1",
    name: "Kent University",
    logo: kent,
    status: "pending",
    date: new Date(2021, 5, 5),
  },
  {
    id: "app2",
    name: "Zort University",
    logo: zart,
    status: "declined",
    date: new Date(2022, 4, 12),
  },
  {
    id: "app3",
    name: "Tally University",
    logo: kent,
    status: "accepted",
    date: new Date(2022, 3, 25),
  },
];
