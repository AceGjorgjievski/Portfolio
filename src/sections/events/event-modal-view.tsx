import { Box, CardMedia, Container, Modal, Typography } from "@mui/material";
import { Event } from "@/types";

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
          width: 1000,
          bgcolor: "#1e1e25",
          color: "white",
          borderRadius: "8px",
          p: 4,
          boxShadow: 24,
        }}
      >
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
