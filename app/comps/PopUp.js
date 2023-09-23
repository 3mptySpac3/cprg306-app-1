

export default function PopUp({ href, children }) {
  const openPopup = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(href, 'Popup Window', 'width=600,height=600,scrollbars=yes,resizable=yes');
  };

  return (
    <span onClick={openPopup} className="cursor-pointer p-2 my-2 bg-black hover:bg-gray-500 transition-colors duration-200 rounded">
      {children}
    </span>
  );
}
