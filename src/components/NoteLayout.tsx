import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { NoteType } from "../types";

type NoteLayoutProps = {
  notes: NoteType[];
};

const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note == null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useNote() {
  return useOutletContext<NoteType>();
}

export default NoteLayout;
