import {
  Box,
  CardMedia,
  Container,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { Event } from "@/types";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  selectedEvent: Event | null;
  modalOpen: boolean;
  handleClose: () => void;
};

export default function EventModalView({
  selectedEvent,
  modalOpen,
  handleClose,
}: Props) {
  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          position: "relative",
          width: 1000,
          bgcolor: "#1e1e25",
          color: "white",
          borderRadius: "8px",
          p: 4,
          boxShadow: 24,
        }}
      >
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
        {selectedEvent && (
          <>
            <Container>
              <Typography variant="h6" sx={{ color: "#22c55e" }}>
                {selectedEvent.name}
              </Typography>
              <Typography sx={{ mb: 2 }}>
                {selectedEvent.place} • {selectedEvent.time}
              </Typography>
              <CardMedia
                component="img"
                image={selectedEvent.images[0]}
                alt={selectedEvent.name}
                sx={{
                  width: "100%",
                  maxHeight: 500,
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: 1,
                  mb: 2,
                }}
              />
              <Typography variant="body2">
                {selectedEvent.description || "No description available."}
              </Typography>
            </Container>
          </>
        )}
      </Box>
    </Modal>
  );
}
