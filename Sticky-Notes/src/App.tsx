import { useState } from "react"
import "./App.css"
import StickyNote from './componets/StickyNote/StickyNote'


function App() {
  var clientNotes: {x: number, y: number, teamMember: {name: string, color: string}, task: string, isComplete: boolean}[];
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
        y: _event.clientY,
        // an assumption was made here that we shall assign the TeamMember and add the Task after the note has been created.
        // so here I poplulate the deafualt values
        teamMember: {
          name: "unassigned",
          color: "wheat"
        },
        task: "Please add Task Details",
        isComplete: false
      }
    ]);
    sessionStorage.setItem("notes", JSON.stringify(notes));
  }

  return (
    <>
      <div className='noteGrid' onClick={addNote}>
        {notes.map((note) => (
          <StickyNote x={note.x} y={note.y} teamMember={note.teamMember} task={note.task} isComplete={note.isComplete}></StickyNote>
        ))}
      </div>
    </>
  )
}

export default App
