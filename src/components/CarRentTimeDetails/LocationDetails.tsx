"use client";
import React, { useCallback } from "react";
import citiesData from "../../data/cities.json";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { TimePicker, DatePicker, Form, Cascader } from "antd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ButtonComp from "../Button/Button";

interface LocationDetailsProps {
  title: string;
  name: string;
}

const LocationDetailsForm: React.FC<LocationDetailsProps> = ({
  title,
  name,
}) => (
  <Box
    sx={{
      width: { xs: "90%", md: "50%" }, // Full width on small screens
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "15px 20px",
      marginBottom: { xs: "1rem", md: "0" }, // Space between items on small screens
    }}
  >
    <Typography
      variant="h5"
      sx={{ fontWeight: "bold", color: "#1A202C", my: "1rem" }}
    >
      <LocationOnIcon /> {title}
    </Typography>
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "0rem", md: "1rem" },
      }}
    >
      <Form.Item
        name={`${name}_location`}
        label={
          <span
            style={{ color: "#1A202C", fontSize: "16px", fontWeight: "bold" }}
          >
            Location
          </span>
        }
        rules={[{ required: true, message: `${title} location is required` }]}
        style={{ flex: "1 1 100%", maxWidth: "300px" }}
      >
        <Cascader
          size="large"
          options={citiesData}
          changeOnSelect
          placeholder="Select your city"
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item
        name={`${name}_date`}
        label={
          <span
            style={{ color: "#1A202C", fontSize: "16px", fontWeight: "bold" }}
          >
            Date
          </span>
        }
        rules={[{ required: true, message: `${title} date is required` }]}
        style={{ flex: "1 1 100%", maxWidth: "300px" }}
      >
        <DatePicker size="large" style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name={`${name}_time`}
        label={
          <span
            style={{ color: "#1A202C", fontSize: "16px", fontWeight: "bold" }}
          >
            Time
          </span>
        }
        rules={[{ required: true, message: `${title} time is required` }]}
        style={{ flex: "1 1 100%", maxWidth: "300px" }}
      >
        <TimePicker size="large" format={"HH:mm"} style={{ width: "100%" }} />
      </Form.Item>
    </Box>
  </Box>
);

const LocationDetails: React.FC = () => {
  const [form] = Form.useForm();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const onFinish = useCallback((values: any) => {
    console.log(values);
  }, []);

  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      layout={"vertical"}
      style={{
        maxWidth: "100%",
        width: "100%",
        padding: "1.5rem 3% 0.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <LocationDetailsForm title="Pick - Up" name="pickUp" />
        <LocationDetailsForm title="Drop - Off" name="dropOff" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Form.Item>
          <ButtonComp value={"Find a vehicle"} type={"submit"} />
        </Form.Item>
      </Box>
    </Form>
  );
};

export default LocationDetails;
