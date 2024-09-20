import "./App.css";
import { useState } from "react";

const App = () => {
  type Note = {
    id: number;
    title: string;
    content: string;
  };

  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "note title 1",
      content: "note content 1",
    },
    {
      id: 2,
      title: "note title 2",
      content: "note content 2",
    },
    {
      id: 3,
      title: "note title 3",
      content: "note content 3",
    },
    {
      id: 4,
      title: "note title 4",
      content: "note content 4",
    },
    {
      id: 5,
      title: "note title 5",
      content: "note content 5",
    },
    {
      id: 6,
      title: "note title 6",
      content: "note content 6",
    },
  ]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(`title: ${title}`);
    console.log(`content: ${content}`);

    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      content: content,
    };
    setNotes([newNote, ...notes]);
    console.log(notes);
    setTitle("");
    setContent("");
  }

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="app-container">
      <form className="note-form" onSubmit={(event) => handleSubmit(event)}>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="title"
          required
        ></input>
        <textarea
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
          placeholder="content"
          rows={10}
          required
        ></textarea>
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div className="note-item">
            <div className="notes-header">
              <button>x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
