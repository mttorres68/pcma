export const Info = () => {
    return (
        <div className="flex py-4 lg:py-4 justify-start mt-10">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl opacity-90 bg-opacity-90">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-72" src="src/assets/monitor.jpg" alt="Monitorias acadêmicas" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Monitorias Academias
                        </div>              
                        <p className="mt-2 text-slate-500 text-justify ">
                            O foco da monitoria acadêmica é melhorar e apoiar o ensino. E, ter um monitor acadêmico durante o semestre da disciplina terá muito valor ao aluno que faz a atividade. Mas tanto o professor da disciplina como os estudantes do curso serão beneficiados, já que o objetivo da monitoria é apoiar o ensino e a aprendizagem
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
