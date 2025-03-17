import { useState } from "react"
import "./App.css"
import StickyNote from './componets/StickyNote'


function App() {
  var test: {x: number, y: number}[] =[]
  const [notes, setNotes] = useState(test);

  function addNote(_event: React.MouseEvent<HTMLElement>): void {
    setNotes([
      ...notes,
      {
        x: _event.clientX,
        y: _event.clientY
      }
    ]);
    console.log("added not at ", {
      x: _event.clientX,
      y: _event.clientY
    })
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
