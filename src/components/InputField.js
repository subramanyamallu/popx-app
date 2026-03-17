function InputField({ label, type = "text", onChange }) {
  return (
    <div className="input-group">
      <label className="label">{label}</label>
      <input type={type} onChange={onChange} />
    </div>
  );
}

export default InputField;