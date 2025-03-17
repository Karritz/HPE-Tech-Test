import './StickyNote.css'

function StickyNote(prop: { x: number, y: number }) {
    return (
        <>
            <div className="note" style={{ position: 'absolute', top: prop.y, left: prop.x }}>
                StickNote Works
            </div>
        </>
    )
}


export default StickyNote