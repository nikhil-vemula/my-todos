import "./RoundCheckbox.css";

const RoundCheckbox = (props) => {
  let checked = props.isChecked;
  return (
    <div className="round">
      <input
        type="checkbox"
        id={"checkbox-" + props.id}
        checked={checked}
        onChange={(e) => {
          let updateObject = {};
          updateObject.id = props.id;
          updateObject.isComplete = e.target.checked;
          props.onCompletePressed(updateObject);
        }}
      />
      <label htmlFor={"checkbox-" + props.id}></label>
    </div>
  );
};

export default RoundCheckbox;
