const TextInput = ({
  className = '',
  name = '',
  label = '',
  placeholder = '',
  value = '',
  onChange = () => {},
  autoComplete = 'off',
  onBlur = () => {},
  error = false
}) => (
  <div className={`relative flex w-full flex-col gap-2 focus-within:border-white ${className}`}>
    <label htmlFor={name} className="block">
      {label}
    </label>
    <input
      id={name}
      name={name}
      placeholder={placeholder || label}
      value={value ?? ''}
      onChange={onChange}
      autoComplete={autoComplete}
      onBlur={onBlur}
      className={`h-10 w-full rounded-lg border border-gray-500 bg-white px-2 outline-none focus:border-white ${
        error ? 'border-red-500' : ''
      }`}
    />
  </div>
);

export default TextInput;
