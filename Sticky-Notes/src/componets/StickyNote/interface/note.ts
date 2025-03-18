import { TeamMember } from "../../AddTeamMember/interface/teamMember";

export interface Note {
    x: number, 
    y: number, id: number, 
    priority: string, 
    teamMember: TeamMember, 
    task: string, 
    isComplete: string | undefined
}