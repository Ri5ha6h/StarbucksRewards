function ButtonLinks({ children, className }) {
  return (
    <a
      href="/"
      className={
        ' border rounded-3xl focus:outline-none px-4 py-1.7 font-medium ' +
        className
      }
    >
      {children}
    </a>
  );
}

export default ButtonLinks;
