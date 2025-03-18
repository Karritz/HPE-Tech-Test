import './StickyNote.css'

function StickyNote(note: { x: number, y: number, teamMember: { name: string, color: string }, task: string, isComplete: boolean }) {
    return (
        <>
            <div className="note" style={{ backgroundColor: note.teamMember.color, position: 'absolute', top: note.y, left: note.x }}>
                <div>
                    Assignee: {note.teamMember.name}
                </div>
                <div>
                    Prioraty:
                </div>
                <div>
                    Task:
                </div>
                <div>
                    Complete:
                </div>
            </div>
        </>
    )
}


export default StickyNote