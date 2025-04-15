// Designed and developed by:
// - Mukesh Yadav

const Container = ({ children, className = "", style = {} }) => {
  return (
    <div
      className={`w-full flex justify-center ${className}`}
      style={style}
    >
      <div className="max-w-6xl flex-1">{children}</div>
    </div>
  );
};

export default Container;
