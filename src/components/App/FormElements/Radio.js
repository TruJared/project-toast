export default function Radio({ label, name = null, value, checked, onChange }) {

	return (
		<label htmlFor={label}>
      <input id={label} key={label} type="radio" name={name || label} value={value} checked={checked} onChange={onChange } />
			{label}
		</label>
	);
}
