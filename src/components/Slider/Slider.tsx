import { Box, Typography } from "@mui/material";
import React from "react";
import car1 from "@/assets/images/car1.jpg";
import car2 from "@/assets/images/car2.png";
import wave1 from "@/assets/images/wave1.png";
import wave2 from "@/assets/images/wave2.png";
import PhoneIcon from "@mui/icons-material/Phone";
import ButtonComp from "../Button/Button";

const Slider = () => {
  return (
    <Box
      sx={{
        padding: ".5rem 3%",
        display: "flex",
        // width: "100%",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "300px",
          position: "relative",
          borderRadius: "13px",
          overflow: "hidden",
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          top: "0",
          left: 0,
        }}
      >
        <img
          src={`${wave1.src}`}
          alt="bg"
          style={{ height: "100%", width: "100%" }}
        />
        <img
          src={`${car1.src}`}
          alt="bg"
          style={{
            position: "absolute",
            bottom: "30px",
            right: "30px",
            width: "250px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "30px",
            left: "30px",
            color: "white",
            width: "50%",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textShadow: "1px 1px black", mb: "1rem", fontWeight: "bold" }}
          >
            Let's get you on the road!
          </Typography>
          <Typography mb={"1.5rem"}>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </Typography>
          <ButtonComp value="Find a car" />
        </Box>
      </Box>

      <Box
        sx={{
          width: "50%",
          height: "300px",
          borderRadius: "13px",
          overflow: "hidden",
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          top: "0",
          left: 0,
          position: "relative",
        }}
      >
        <img
          src={`${wave2.src}`}
          alt="bg"
          style={{ height: "100%", width: "100%" }}
        />
        <img
          src={`${car2.src}`}
          alt="bg"
          style={{
            position: "absolute",
            bottom: "30px",
            right: "30px",
            width: "250px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "30px",
            left: "30px",
            color: "white",
            width: "50%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "#fefefe37",
              display: "inline-block",
              padding: "3px 17px",
              fontWeight: "bold",
              borderRadius: "10px",
            }}
          >
            Call us now
          </Typography>
          <Typography
            variant="h4"
            sx={{ textShadow: "1px 1px black", mb: "1rem", fontWeight: "bold" }}
          >
            <PhoneIcon />1 200 333 800
          </Typography>
          <Typography mb={"1.5rem"}>
            Rentaly customer care is here to help you anytime.
          </Typography>
          <ButtonComp value="Contact us" />
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
