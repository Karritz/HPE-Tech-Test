import './AddTeamMember.css'

function AddTeamMember({ teamMember, show }: any) {

    function handleSubmit(event: any): void {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        teamMember(formJson);

    }

    if (show) {
        return (
            <>
                <div className='formPositon'>
                    <form className="formLayout" onSubmit={handleSubmit}>
                        <div>
                            Add New Team Member
                        </div>
                        <label>
                            Name: <input name="name"></input>
                        </label>
                        <label>
                            Color: <input name="color"></input>
                        </label>
                        <button type="submit">
                            Add Member
                        </button>
                    </form>
                </div>
            </>
        )
    } else {
        return (<></>)
    }

}

export default AddTeamMember