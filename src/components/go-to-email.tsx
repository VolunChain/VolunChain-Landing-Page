import { useState } from "react";
import Alert from "./Alert";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault(); 
    setShowAlert(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <a
        href="mailto:volunchain@gmail.com"
        onClick={handleClick}
        className="hover:text-gray-400 transition font-[family-name:var(--font-fustat)] font-normal text-base md:text-base mt-3"
      >
        volunchain@gmail.com
      </a>

      {showAlert && (
        <Alert message="Copied" onClose={() => setShowAlert(false)} />
      )}
    </div>
  );
};

export default Contact;