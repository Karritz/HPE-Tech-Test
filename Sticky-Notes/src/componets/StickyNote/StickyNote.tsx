import './StickyNote.css'

function StickyNote(prop: { x: number, y: number, teamMember: {name: string, color: string}, task: string, isComplete: boolean}) {
    return (
        <>
            <div className="note" style={{backgroundColor: prop.teamMember.color, position: 'absolute', top: prop.y, left: prop.x}}>
                <div>
                    Assignee: {prop.teamMember.name}
                </div>
            </div>
        </>
    )
}


export default StickyNote