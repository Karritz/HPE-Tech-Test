import { useState } from "react"
import "./App.css"
import StickyNote from './componets/StickyNote/StickyNote'
import AddTeamMember from "./componets/AddTeamMember/AddTeamMember";
import { TeamMember } from "./componets/AddTeamMember/interface/teamMember";
import { Note } from "./componets/StickyNote/interface/note";


function App() {
  var clientNotes: Note[];
  var clientTeam: TeamMember[];
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
    clientTeam = [{
      name: "unassigned",
      color: "wheat"
    }];
  }
  const [notes, setNotes] = useState(clientNotes);
  // an assumption was made that you can un assign a note as well as the it being the default value
  const [team, setTeam] = useState(clientTeam);
  const [showAddMember, toggleShowAddMember] = useState(false);
  sessionStorage.setItem("notes", JSON.stringify(notes));
  sessionStorage.setItem("team", JSON.stringify(team));
  function addNote(_event: React.MouseEvent<HTMLElement>): void {
    setNotes([
      ...notes,
      {
        id: notes.length,
        x: _event.clientX,
        y: _event.clientY,
        // an assumption was made here that we shall assign the TeamMember and add the Task after the note has been created.
        // so here I poplulate the deafualt values
        teamMember: {
          name: "unassigned",
          color: "wheat"
        },
        priority: "low",
        task: "Please add Task Details",
        isComplete: undefined
      }
    ]);
    sessionStorage.setItem("notes", JSON.stringify(notes));
  }

  function showTeam(): void {
    alert(JSON.stringify(team))
  }

  function addTeamMember(data: TeamMember): void {
    setTeam([
      ...team,
      {
        name: data.name,
        color: data.color
      }
    ]);
    sessionStorage.setItem("team", JSON.stringify(team));
  }

  function editNote(note: Note) {
    var foundNote = notes.find((x) => x.id == note.id);
    console.log(note)
    if(foundNote) {
      foundNote.teamMember = note.teamMember;
      foundNote.priority = note.priority;
      foundNote.task =note.task;
      foundNote.isComplete = note.isComplete;
    }
    setNotes([...notes]);
    sessionStorage.setItem("notes", JSON.stringify(notes));
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
            {showAddMember ? "Close -" : "Add +"}
          </button>
        </div>
      </div>
      <AddTeamMember show={showAddMember} teamMember={addTeamMember}></AddTeamMember>
      <div className='noteGrid' onClick={addNote}>
        {notes.map((note) => (
          <StickyNote newNote={editNote} team={team} note={note}></StickyNote>
        ))}
      </div>
    </>
  )
}

export default App
