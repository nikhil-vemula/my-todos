import "./RoundCheckbox.css";


const RoundCheckbox = (props) => {
  let checked = props.isChecked;
  return (
    <div className="round">
      <input 
        type="checkbox" 
        id={'checkbox-' + props.id}
        checked={checked}
        onChange={(e) => props.onCompletePressed(props.id, e.target.checked)}
      />
      <label htmlFor={'checkbox-' + props.id}></label>
    </div>
  );
};

export default RoundCheckbox;
