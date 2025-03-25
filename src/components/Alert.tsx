import { XCircle } from "lucide-react";

interface AlertProps {
    message: string,
    onClose: any
}

const Alert = ({ message, onClose }: AlertProps) => {
  return (
    <div className="bg-[#060A1F] text-[#72B8EA] p-4 rounded-lg flex items-center justify-between shadow-lg">
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="text-[#72B8EA] hover:text-white">
        <XCircle size={20} />
      </button>
    </div>
  );
};

export default Alert;