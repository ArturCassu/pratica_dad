import {Candidate} from "../VotingApp";

interface SummaryProps{
    candidates: Candidate[]
}

export default function VotesSummary({candidates}:SummaryProps){
    let total = 0
    let maisVotos: Candidate = candidates[0]
    candidates.forEach(candidate => {
        total += candidate.votes
        if (candidate.votes > maisVotos.votes){
            maisVotos = candidate
        }
    })


    return (
        <div>
            <p>Total:{total}</p>
            <p>Candidato vencedor:{maisVotos.name} com {maisVotos.votes}</p>
        </div>
    )
}