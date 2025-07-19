export default function Button({ children, onClick, variant = "default", className = "", ...props }) {
  const base =
    "inline-flex items-center px-4 py-2 rounded-xl font-medium transition-colors";
  const variants = {
    default: "bg-green-600 text-white hover:bg-green-700",
    ghost: "bg-transparent hover:bg-gray-200 text-green-700",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
