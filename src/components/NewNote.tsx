import { NoteDataType, TagType } from "../types";
import NoteForm from "./NoteForm";

type NewNoteProps = {
  onSubmit: (data: NoteDataType) => void;
  onAddTag: (tag: TagType) => void;
  availableTags: TagType[];
};

const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default NewNote;
