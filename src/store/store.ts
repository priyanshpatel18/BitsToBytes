import localFont from "next/font/local";
import { create } from "zustand";

interface Store {
  creamCakeFont: string;
  calSans: string;
  poppins: string;
}

const creamCake = localFont({
  src: "../fonts/Cream-Cake.otf",
});
const poppins = localFont({
  src: "../fonts/Poppins.ttf",
});
const calSans = localFont({
  src: "../fonts/Cal-Sans.ttf",
});

const store = create<Store>((set) => ({
  creamCakeFont: creamCake.className,
  calSans: calSans.className,
  poppins: poppins.className,
}));

export default store;
