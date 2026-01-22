import { Timestamp } from "firebase/firestore";

export type Experience = {
  id: string;
  company: string;
  duration: string;
  startDate: Timestamp;
  endDate: Timestamp;
  position: string;
  responsibility: string;
};
