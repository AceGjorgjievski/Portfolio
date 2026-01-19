import { Event } from "@/types";
import { Grid } from "@mui/material";
import EventCard from "./event-card";

type Props = {
  events: Event[];
  handleCardClick: (event: Event) => void;
};

export default function MobileEventsView({ events, handleCardClick }: Props) {
  return (
    <>
      <Grid container spacing={3}>
        {events.map((event, index) => (
          <Grid
            item
            xs={12}
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
