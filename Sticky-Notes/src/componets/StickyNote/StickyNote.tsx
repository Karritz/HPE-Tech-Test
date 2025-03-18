import { useState } from 'react';
import './StickyNote.css'

function StickyNote({ x, y, id, priority, teamMember, task, isComplete, team, note }: { x: number, y: number, id: number, priority: string, teamMember: { name: string, color: string }, task: string, isComplete: string | undefined, team: { name: string, color: string }[], note: Function }) {

    const [showButton, toggleShowButton] = useState(false);

    function saveChanges(event: any): void {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson.isComplete);
        note({ id: id, teamMember: JSON.parse(formJson.teamMember.toString()), x: x, y: y, priority: formJson.priority, task: formJson.task, isComplete: formJson.isComplete });
        toggleShowButton(false);
    }

    return (
        <>
            <div onClick={(e) => e.stopPropagation()} className={(priority == 'high') ? 'note priorityNote': 'note'} style={{ backgroundColor: teamMember.color, top: y, left: x, opacity: (!!isComplete)? '0.5': '1' }}>
                <form className="formLayout" onChange={() => toggleShowButton(true)} onSubmit={saveChanges}>
                    <label className='labelLayout'>
                        Assignee: <select name='teamMember' defaultValue={JSON.stringify(teamMember)}>
                            {team.map((member) => (<>
                                <option value={JSON.stringify(member)}>
                                    {member.name}
                                </option>
                            </>))}
                        </select>
                    </label>
                    <label className='labelLayout'>
                        Priority:
                        <select name='priority' defaultValue={priority}>
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
                        Task: <textarea className='textArea' name='task' defaultValue={task}></textarea>
                    </label>
                    <label className='labelLayout'>
                        Complete: <input name='isComplete' type='checkbox' defaultChecked={!!isComplete}></input>
                    </label>
                    <button style={{ visibility: showButton ? 'visible' : 'hidden' }} type='submit'>
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}


export default StickyNote