import VotesSummary from "../VotesSummary";
import CandidateList from "../CandidateList";
import CandidateForm from "../CandidateForm";
import {useState} from "react";

interface Candidate {
    id: number;
    name: string;
    votes: number;
}

export type {Candidate}

export default function VotingApp() {
    const [candidates, setCandidates] = useState<Candidate[]>([])
    
    
    const addCandidate = (name: string)=>{
        if (name.trim().length>0){
            const newCandidate = {
                id: Date.now(),
                name,
                votes: 0
            }
            setCandidates([...candidates,newCandidate])
        }
    }

    const removeCandidate = (id: number) => {
        setCandidates(candidates.filter(
            (candidate) => candidate.id != id
        ))
    }

    const editCandidate = (id: number) => {
        setCandidates(candidates.map((candidate) =>
            candidate.id === id ? {...candidate, votes: candidate.votes+1} : candidate
        ))
    }



    return (
        <>
            <h1>App Votos</h1>
            <CandidateForm addCandidate={addCandidate}/>
            <CandidateList candidates={candidates} remove={removeCandidate} vote={editCandidate}/>
            <VotesSummary candidates={candidates}/>
        </>
    )
}