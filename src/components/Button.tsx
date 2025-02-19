
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "default" | "login" | "icons";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "default" }) => {
  const baseStyles = "px-4 py-2 font-semibold rounded-2xl transition-all duration-300";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    login: "w-auto py-2 mt-4 font-mono bg-[#C14600] text-white rounded-lg hover:bg-[#c13d00] focus:outline-none focus:ring-2 focus:ring-gray-300",
    icons: "border border-gray-600 text-gray-600 hover:bg-gray-100",
  };
  
  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;