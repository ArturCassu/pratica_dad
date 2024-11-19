
interface FormProps {
    addCandidate: (text: string) => void
}

export default function CandidateForm({addCandidate}: FormProps) {
    let nome = ""
    return (
        <div>
            <input placeholder={"Nome do Candidato"} onChange={(e)=>{nome = e.target.value}}/>
            <button onClick={
                ()=> {
                    if (nome.trim().length>0){
                        addCandidate(nome)
                    }
                }
            }>Adicionar</button>
        </div>
    )
}