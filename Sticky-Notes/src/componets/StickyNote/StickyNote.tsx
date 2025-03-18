import { useState } from 'react';
import './StickyNote.css'
import { Note } from './interface/note';

function StickyNote({ note, team, newNote }: { note: Note,  team: { name: string, color: string }[], newNote: Function }) {

    const [showButton, toggleShowButton] = useState(false);

    function saveChanges(event: any): void {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson.isComplete);
        newNote({ id: note.id, teamMember: JSON.parse(formJson.teamMember.toString()), x: note.x, y: note.y, priority: formJson.priority, task: formJson.task, isComplete: formJson.isComplete });
        toggleShowButton(false);
    }

    return (
        <>
            <div onClick={(e) => e.stopPropagation()} className={(note.priority == 'high') ? 'note priorityNote': 'note'} style={{ backgroundColor: note.teamMember.color, top: note.y, left: note.x, opacity: (!!note.isComplete)? '0.5': '1' }}>
                <form className="formLayout" onChange={() => toggleShowButton(true)} onSubmit={saveChanges}>
                    <label className='labelLayout'>
                        Assignee: <select name='teamMember' defaultValue={JSON.stringify(note.teamMember)}>
                            {team.map((member) => (<>
                                <option value={JSON.stringify(member)}>
                                    {member.name}
                                </option>
                            </>))}
                        </select>
                    </label>
                    <label className='labelLayout'>
                        Priority:
                        <select name='priority' defaultValue={note.priority}>
                            <option value={"high"}>
                                High
                            </option>
                            <option value={"medium"}>
                                Medium
                            </option>
                            <option value={"low"}>
                                Low
                            </option>
                        </select>
                    </label>
                    <label className='labelLayout'>
                        Task: <textarea className='textArea' name='task' defaultValue={note.task}></textarea>
                    </label>
                    <label className='labelLayout'>
                        Complete: <input name='isComplete' type='checkbox' defaultChecked={!!note.isComplete}></input>
                    </label>
                    <button style={{ visibility: showButton ? 'visible' : 'hidden' }} type='submit'>
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}


export default StickyNote;