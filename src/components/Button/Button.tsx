import React from "react";
import Button from "@mui/material/Button";
interface btn {
  value: string | any;
  type?: any;
  onClick?: any;
}
const ButtonComp: React.FC<btn> = ({ value, type, onClick }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      sx={{
        backgroundColor: "#3563E9",
        cursor: "pointer",
        textTransform: "none",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#3664ef",
        },
      }}
      variant="contained"
    >
      {value}
    </Button>
  );
};

export default ButtonComp;
