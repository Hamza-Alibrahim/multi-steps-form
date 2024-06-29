/* eslint-disable react/prop-types */
import { List, ListItem, ListItemText } from "@mui/material";

const Confirm = ({ details, increase, decrease }) => {
  function handleClick(e) {
    e.target.textContent == "Confirm" ? increase() : decrease();
  }
  return (
    <div className="text-center w-64 m-auto">
      <List>
        {Object.keys(details).map((e, i) => {
          return (
            <ListItem key={i}>
              <ListItemText primary={e} secondary={details[e]} />
            </ListItem>
          );
        })}
      </List>
      <div className="flex justify-around">
        <button
          className="my-5 bg-cyan-500 hover:bg-cyan-600 py-1 px-3 text-white"
          onClick={handleClick}
        >
          Confirm
        </button>
        <button
          className="my-5 bg-gray-500 hover:bg-gray-600 py-1 px-3 text-white"
          onClick={handleClick}
        >
          Back
        </button>
      </div>
    </div>
  );
};
export default Confirm;
