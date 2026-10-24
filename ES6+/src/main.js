const alunos = [
    { nome: 'João', nota: 5 },
    { nome: 'Maria', nota: 8 },
    { nome: 'Pedro', nota: 6 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Tiago', nota: 10 }
];

function aprovados() {
    return alunos.filter(aluno => aluno.nota >= 6);
}

console.log(aprovados());