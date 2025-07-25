import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Event } from "@/types";

type Props = {
  event: Event;
  onCardClick: (event: Event) => void;
};

export default function EventCard({ event, onCardClick }: Props) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#1e1e25", color: "white" }}>
      <Box
        sx={{
          overflow: "hidden",
          height: "240px",
          "&:hover img": {
            transform: "scale(1.1)",
          },
          cursor: "pointer",
        }}
        onClick={() => onCardClick(event)}
      >
        <CardMedia
          component="img"
          image={event?.images[0]}
          alt={event.name}
          sx={{
            height: "100%",
            width: "100%",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </Box>

      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: "#22c55e" }}
        >
          {event.name}
        </Typography>
        <Typography variant="body2" color="cyan">
          {event.place} • {event.time}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onCardClick(event);
          }}
          sx={{
            marginBottom: "1rem",
            color: "cyan",
            "&:hover": {
              backgroundColor: "rgba(0, 255, 255, 0.1)",
              color: "#00ffff",
            },
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
