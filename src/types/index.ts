export type NoteType = {
  id: string;
} & NoteDataType;

export type NoteDataType = {
  title: string;
  markdown: string;
  tags: TagType[];
};

export type TagType = {
  id: string;
  label: string;
};

export type RawNoteType = {
  id: string;
} & RawNoteDataType;

export type RawNoteDataType = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type NoteCardType = {
  tags: TagType[],
  title: string;
  id: string;
}
