"use client";

import {
  Container,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Event } from "@/types";
import { getAllDocs } from "@/services/firestore";
import EventCard from "./event-card";
import EventModalView from "./event-modal-view";


export default function EventsView() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };


  const monthMap: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  useEffect(() => {
    const fetchEventsData = async () => {
      const res = await getAllDocs("events");

      if (res) {

        const sortedEvents = (res as Event[]).sort((a, b) => {
          const [monthA, yearA] = a.time.toLowerCase().split(", ");
          const [monthB, yearB] = b.time.toLowerCase().split(", ");

          const dateA = new Date(Number(yearA), monthMap[monthA]);
          const dateB = new Date(Number(yearB), monthMap[monthB]);

          return dateA.getTime() - dateB.getTime();
        });

        const withImages = sortedEvents.map((event) => {
          console.log(event.time);
          const safeId = event.id.toLowerCase();
          const imageVariants: string[] = [];

          if (safeId === "junior achievement") {
            for (let i = 1; i <= 3; i++) {
              imageVariants.push(`/events/${safeId}_${i}.jpg`);
            }
          } else {
            imageVariants.push(`/events/${safeId}.jpg`);
          }

          return {
            ...event,
            images: imageVariants,
          };
        });

      
        setEvents(withImages);
      }
    };

    fetchEventsData();
  }, []);

  return (
    <Container sx={{ padding: '3rem' }}>
      <Grid container spacing={3} justifyContent="center">
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <EventCard event={event} onCardClick={handleCardClick}/>
          </Grid>
        ))}
      </Grid>
      <EventModalView
        selectedEvent={selectedEvent}
        modalOpen={modalOpen}
        handleClose={handleCloseModal}
      />
    </Container>
  );
}
