import { Badge, Box } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box sx={{ width: "100%", backgroundColor: "#150681", height: "15vh" }}>
        <Badge
          component="h2"
          sx={{
            display: "flex",
            width: "100%",
            color: "white",
            justifyContent: "center",
            padding: 2,
          }}
        >
          Todos los derechos Reservados
        </Badge>
      </Box>
    </>
  );
};

export default Footer;
