const LanguageScrollOption = ({
  children,
  setIsOpen,
  setValue,
  value,
  label,
  setLabelLanguage,
}: any) => {
  const selectOption = () => {
    setValue(value);
    setLabelLanguage(label);
    setIsOpen(false);
  };

  return <li onClick={() => selectOption()}>{children}</li>;
};

export default LanguageScrollOption;
