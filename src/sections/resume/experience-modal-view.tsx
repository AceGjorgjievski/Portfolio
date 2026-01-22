import { Experience } from "@/types";
import { Modal, Box, IconButton, Container, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  modalOpen: boolean;
  handleClose: () => void;
  selectedExpecience: Experience | null;
};

export default function ExperienceModalView({
  modalOpen,
  handleClose,
  selectedExpecience,
}: Props) {
  const renderCloseIcon = (
    <IconButton
      onClick={handleClose}
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
        color: "white",
        zIndex: 1,
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          transform: "scale(1.2)",
          color: "#22c55e",
        },
      }}
    >
      <CloseIcon />
    </IconButton>
  );

  const renderExperienceInfo = (
    <>
      <Typography variant="h6" sx={{ color: "#22c55e" }}>
        {selectedExpecience?.company}
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Duration: {selectedExpecience?.duration}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          whiteSpace: "pre-line",
          maxHeight: "200px",
          overflowY: "auto",
          pr: 1,
        }}
      >
        {selectedExpecience?.responsibility || "No responsibility available."}
      </Typography>
    </>
  );

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          position: "relative",
          width: 2000,
          bgcolor: "#1e1e25",
          color: "white",
          borderRadius: "8px",
          p: 4,
          boxShadow: 24,
          maxWidth: {
            xs: "350px",
            sm: "500px",
            md: "700px",
          },
        }}
      >
        {renderCloseIcon}
        <Container>{renderExperienceInfo}</Container>
      </Box>
    </Modal>
  );
}
