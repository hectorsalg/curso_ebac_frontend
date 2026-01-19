const alunosMap = new Map();

alunosMap.set('João', 8);
alunosMap.set('Maria', 9);
alunosMap.set('Pedro', 7);
alunosMap.set('José', 6);
alunosMap.set('Mario', 4);
alunosMap.set('Mateus', 3);

const alunos = [...alunosMap].map(([nome, nota]) => ({ nome, nota }));

function alunosAprovados(alunos, media) {
    return alunos.filter(aluno => aluno.nota >= media);
}

console.log(alunosAprovados(alunos, 6));