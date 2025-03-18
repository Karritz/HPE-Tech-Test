import './StickyNote.css'

function StickyNote(note: { note: Function,  x: number, y: number, teamMember: { name: string, color: string }, task: string, isComplete: boolean }) {
    return (
        <>
            <div onClick={(e) => e.stopPropagation()} className="note" style={{ backgroundColor: note.teamMember.color, top: note.y, left: note.x }}>
                <form>
                    <label>
                        Assignee: <input name='name'></input>
                    </label>
                    <label>
                        Priority: 
                        <select onChange={(e) => console.log(e)}>
                            <option value={"high"}>
                                High
                            </option>
                            <option value={"medium"}>
                                Medium
                            </option>
                        </select>
                    </label>
                </form>
            </div>
        </>
    )
}


export default StickyNote