import { useState } from "react"
import "./App.css"
import StickyNote from './componets/StickyNote/StickyNote'
import AddTeamMember from "./componets/AddTeamMember/addTeamMember";


function App() {
  var clientNotes: { x: number, y: number, teamMember: { name: string, color: string }, task: string, isComplete: boolean }[];
  var clientTeam: { name: string, color: string }[];
  var storedNotes: string | null = sessionStorage.getItem("notes");
  var storedTeam: string | null = sessionStorage.getItem("team");
  if (storedNotes) {
    clientNotes = JSON.parse(storedNotes);
  } else {
    clientNotes = [];
  }
  if (storedTeam) {
    clientTeam = JSON.parse(storedTeam);
  } else {
    clientTeam = [];
  }
  const [notes, setNotes] = useState(clientNotes);
  const [team, setTeam] = useState(clientTeam);
  const [showAddMember, toggleShowAddMember] = useState(false);
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

  function showTeam(): void {
    alert(JSON.stringify(team))
  }

  function addTeamMember(data: any): void {
    setTeam([
      ...team,
      {
        name: data.name,
        color: data.color
      }
    ])
  }

  return (
    <>
      <div className="headerLayout">
        Sticky Schedule
        <div className="buttonLayout">
          <button onClick={showTeam}>
            All Team Members
          </button>
          <button onClick={() => toggleShowAddMember(!showAddMember)}>
            Add +
          </button>
        </div>
      </div>
      <AddTeamMember show={showAddMember} teamMember={addTeamMember}></AddTeamMember>
      <div className='noteGrid' onClick={addNote}>
        {notes.map((note) => (
          <StickyNote x={note.x} y={note.y} teamMember={note.teamMember} task={note.task} isComplete={note.isComplete}></StickyNote>
        ))}
      </div>
    </>
  )
}

export default App
