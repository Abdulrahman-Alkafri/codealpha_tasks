function Button({
  onClick,
  children,
  type = "primary",
  additionclass = "",
  disabled = false,
  functionality = "submit",
}) {
  const variations = {
    primary:
      "cursor-pointer tracking-wider text-yellow-100 font-bold shadow-md hover:bg-yellow-700 bg-yellow-600 rounded-md px-4 py-2 m-1",
    outlinePrimary:
      "cursor-pointer tracking-wider text-yellow-700 font-bold shadow-md hover:bg-yellow-700 bg-yellow-100 hover:text-yellow-100 duration-300 border-2 border-solid border-yellow-700 rounded-md px-4 py-2 m-1",
    danger:
      "cursor-pointer tracking-wider text-pink-100 font-bold shadow-md hover:bg-pink-700 bg-pink-600 rounded-md px-4 py-2 m-1",
    outlineDanger:
      "cursor-pointer tracking-wider text-pink-700 font-bold shadow-md hover:bg-pink-700 bg-pink-50 hover:text-pink-50 duration-300 border-2 border-solid border-pink-700 rounded-md px-4 py-2 m-1",
    secondary:
      "cursor-pointer tracking-wider text-stone-100 font-bold shadow-md hover:bg-stone-700 bg-stone-600 rounded-md px-4 py-2 m-1",
    outlineSecondary:
      "cursor-pointer tracking-wider text-stone-700 font-bold shadow-md hover:bg-stone-700 bg-stone-100 hover:text-stone-100 duration-300 border-2 border-solid border-stone-700 rounded-md px-4 py-2 m-1",
  };
  return (
    <button
      type={functionality}
      disabled={disabled}
      onClick={onClick}
      className={`w-full md:w-auto ${variations[type]} ${additionclass}`}
    >
      {children}
    </button>
  );
}

export default Button;
