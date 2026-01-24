import { Container, Link } from "@mui/material";
import { pages } from "./pages";
import { usePathname } from "next/navigation";

export default function HeaderDesktopView() {
  const pathName = usePathname();

  return (
    <Container
      sx={{
        display: "flex",
        gap: 3,
        justifyContent: "center",
        padding: "20px 10px",
        marginTop: "25px",
      }}
    >
      {pages.map((page, index) => {
        return (
          <Link
            href={page.url}
            key={index}
            sx={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
              transition: "color 0.3s ease, border-color 0.3s ease",
              ...((page.url === pathName ||
                (pathName === "/" && page.url === "/home")) && {
                color: "#22c55e",
                borderBottom: "2px solid #22c55e",
              }),
              "&:hover": {
                color: "#22c55e",
                boxShadow: "0 0 35px -10px rgba(34,197,94,0.45)",
                borderColor: "rgba(34,197,94,0.6)",
              },
            }}
          >
            {page.name}
          </Link>
        );
      })}
    </Container>
  );
}
