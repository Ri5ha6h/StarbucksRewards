function SimpleLinks({ children, className }) {
  return (
    <a href="/" className={' underline hover:no-underline ' + className}>
      {children}
    </a>
  );
}

export default SimpleLinks;
