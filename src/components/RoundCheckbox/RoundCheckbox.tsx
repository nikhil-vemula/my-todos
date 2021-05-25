import "./RoundCheckbox.css";

type Props = {
  id: string
  isChecked: boolean;
  onCompletePressed: Function;
};

const RoundCheckbox = (props: Props) => {
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
