/* eslint-disable react/prop-types */
const Menu = ({ progress, updateProgress }) => {
  let menuComponent = ["User Details", "Personal Details", "Confirm"];
  let currentLiStyle = "text-white cursor-ponter p-3 bg-cyan-500";
  let liStyle = "text-white cursor-ponter p-3 bg-transparent hover:bg-cyan-400";
  return (
    <>
      <ul className="w-fit bg-gray-400 h-screen">
        {menuComponent.map((e, i) => {
          return (
            <li
              className={progress == i + 1 ? currentLiStyle : liStyle}
              key={i}
              onClick={() => updateProgress(i + 1)}
            >
              {e}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Menu;
