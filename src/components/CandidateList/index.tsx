import {Candidate} from "../VotingApp";

interface ListProps{
    candidates: Candidate[]
    vote: (id:number) => void
    remove: (id: number) => void
}

export default function CandidateList({candidates, remove, vote}:ListProps){
    return (
        <div>
            <h2>Candidatos</h2>
            {
                candidates.map((c:Candidate, i) =>{
                    return (<div key={i}>
                        <p>{c.name}</p>
                        <p>{c.votes}</p>
                        <button onClick={
                            ()=>{vote(c.id)}
                        }>Vote</button>
                        <button onClick={
                            ()=>{remove(c.id)}
                        }>X</button>
                    </div>)
                })
            }
        </div>
    )
}