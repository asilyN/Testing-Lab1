import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "warning"; // Removed "info"
}

const Notification: React.FC<NotificationProps> = ({ message, type = "success" }) => {
  const notify = () => {
    toast(message, { type });
  };

  return (
    <div>
      <button
        onClick={notify}
        className="bg-blue-500 text-white p-2 rounded shadow-md"
      >
        Show Notification
      </button>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Notification;
