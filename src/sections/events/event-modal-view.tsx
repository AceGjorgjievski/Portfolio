import {
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Event } from "@/types";
import CloseIcon from "@mui/icons-material/Close";

import { PictureSlider } from "@/components/picture-slider";

import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { JSX, useState } from "react";

type Props = {
  selectedEvent: Event | null;
  modalOpen: boolean;
  handleClose: () => void;
};

const linkIcons: Record<string, JSX.Element> = {
  chrome: <ChromeReaderModeIcon />,
  web: <LanguageIcon />,
  instagram: <InstagramIcon />,
  facebook: <FacebookIcon />,
  youtube: <YouTubeIcon />,
  linkedIn: <LinkedInIcon />,
};

export default function EventModalView({
  selectedEvent,
  modalOpen,
  handleClose,
}: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeLinks, setActiveLinks] = useState<string[]>([]);

  const open = Boolean(anchorEl);

  const hasLinks =
    selectedEvent?.links && Object.keys(selectedEvent.links).length > 0;

  const handleLinkClick = (
    event: React.MouseEvent<HTMLElement>,
    links: string[],
  ) => {
    if (links.length === 1) {
      window.open(links[0], "_blank", "noopener,noreferrer");
    } else {
      setAnchorEl(event.currentTarget);
      setActiveLinks(links);
    }
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setActiveLinks([]);
  };

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

  const renderEventInfo = (selectedEvent: Event) => (
    <>
      <Typography variant="h6" sx={{ color: "#22c55e" }}>
        {selectedEvent.name}
      </Typography>
      <Typography sx={{ mb: 2 }}>
        {selectedEvent.place} • {selectedEvent.time}
      </Typography>
      <PictureSlider pictures={selectedEvent.pictures} />
      <Typography
        variant="body2"
        sx={{
          whiteSpace: "pre-line",
          maxHeight: "200px",
          overflowY: "auto",
          pr: 1,
        }}
      >
        {selectedEvent.description || "No description available."}
      </Typography>
    </>
  );

  const renderEventLinks = (hasLinks: boolean | undefined) => (
    <>
      {hasLinks && (
        <Stack direction="row" spacing={2} mt={2}>
          {Object.entries(selectedEvent!.links!).map(([key, links]) => {
            if (!links || links.length === 0) return null;

            return (
              <IconButton
                key={key}
                onClick={(e) => handleLinkClick(e, links)}
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#22c55e",
                    transform: "scale(1.2)",
                  },
                }}
              >
                {linkIcons[key]}
              </IconButton>
            );
          })}
        </Stack>
      )}
      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        {activeLinks.map((link, index) => (
          <MenuItem
            key={index}
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCloseMenu}
          >
            Link {index + 1}
          </MenuItem>
        ))}
      </Menu>
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
        {selectedEvent && (
          <>
            <Container>
              {renderEventInfo(selectedEvent)}
              {renderEventLinks(hasLinks)}
            </Container>
          </>
        )}
      </Box>
    </Modal>
  );
}
