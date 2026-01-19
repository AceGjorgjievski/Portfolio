import { Event } from "@/types";
import { Grid } from "@mui/material";
import EventCard from "./event-card";

type Props = {
  events: Event[];
  handleCardClick: (event: Event) => void;
};

export default function DesktopEventsView({ events, handleCardClick }: Props) {
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        {events.map((event, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <EventCard event={event} onCardClick={handleCardClick} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
