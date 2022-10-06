import React from "react";

export const Footer = () => {
  let footerStyle = {
    width: "100vw",
  };
  return (
    <footer style={footerStyle} className="bg-dark text-light py-2">
      <p className="text-center">Copyright &copy; Mytodos list</p>
    </footer>
  );
};
