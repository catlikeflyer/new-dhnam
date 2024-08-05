// divider with width 1/10 of the screen, takes color hex code as prop
export const Divider = ({ color = "gray" }) => {
  <div className={`h-1 w-1/6 bg-${color}-400 m-4 shadow-md`}></div>;
};
