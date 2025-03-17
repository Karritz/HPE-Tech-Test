import { useState } from "react"
import "./App.css"
import StickyNote from './componets/StickyNote/StickyNote'


function App() {
  var clientNotes: {x: number, y: number}[];
  var storedNotes:string | null = sessionStorage.getItem("notes")
  if(storedNotes) {
    clientNotes = JSON.parse(storedNotes)
  } else {
    clientNotes = []
  }
  const [notes, setNotes] = useState(clientNotes);
  sessionStorage.setItem("notes", JSON.stringify(notes));

  function addNote(_event: React.MouseEvent<HTMLElement>): void {
    setNotes([
      ...notes,
      {
        x: _event.clientX,
        y: _event.clientY
      }
    ]);
    sessionStorage.setItem("notes", JSON.stringify(notes));
  }

  return (
    <>
      <div className='noteGrid' onClick={addNote}>
        {notes.map((note) => (
          <StickyNote x={note.x} y={note.y}></StickyNote>
        ))}
      </div>
    </>
  )
}

export default App
