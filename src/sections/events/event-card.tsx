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

  const renderEventImage = (
    <Box
      sx={{
        overflow: "hidden",
        height: "170px",
        flexShrink: 0,
        "&:hover img": {
          transform: "scale(1.1)",
        },
        cursor: "pointer",
      }}
      onClick={() => onCardClick(event)}
    >
      <CardMedia
        component="img"
        image={event?.pictures[0]}
        alt={event.name}
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          transition: "transform 0.3s ease-in-out",
        }}
      />
    </Box>
  );

  const renderEventInfo = (
    <CardContent
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        padding: "12px 16px",
        "&:last-child": {
          paddingBottom: "12px",
        },
      }}
    >
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{
          color: "#22c55e",
          marginBottom: "8px",
          fontSize: "1rem",
          fontWeight: 600,
          lineHeight: 1.2,
          minHeight: "24px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {event.name}
      </Typography>

      <Typography
        variant="body2"
        color="cyan"
        sx={{
          marginBottom: "8px",
          fontSize: "0.875rem",
          lineHeight: 1.3,
          minHeight: "18px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "wrap",
        }}
      >
        {event.place} • {event.time}
      </Typography>
    </CardContent>
  );

  const renderEventButton = (
    <CardActions
      sx={{
        padding: "0 16px 12px",
        flexShrink: 0,
      }}
    >
      <Button
        size="small"
        onClick={(e) => {
          e.stopPropagation();
          onCardClick(event);
        }}
        sx={{
          color: "cyan",
          padding: "4px 8px",
          fontSize: "0.875rem",
          minWidth: "auto",
          "&:hover": {
            backgroundColor: "rgba(0, 255, 255, 0.1)",
            color: "#00ffff",
          },
        }}
      >
        Read More
      </Button>
    </CardActions>
  );

  return (
    <Card
      sx={{
        width: "285px",
        backgroundColor: "#1e1e25",
        color: "white",
        height: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {renderEventImage}

      {renderEventInfo}

      {renderEventButton}
    </Card>
  );
}
