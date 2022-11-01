const LanguageOnScroll = ({ value, children, isOpen, setIsOpen }: any) => {
  return (
    <fieldset>
      <span onClick={() => setIsOpen(!isOpen)}>{value}</span>

      {isOpen && <ul>{children}</ul>}
    </fieldset>
  );
};

export default LanguageOnScroll;
