const somar = function(a: number, b:number): number {
    return a * b;
}

let soma1 = somar(12, 20);

console.log(`O resultado da soma é ${soma1}`);

const ola = (a:string, b:string): string => {
    return (`Olá, ${a} ${b}`) 
}

let pessoa1 = ola("Tiago", "Duarte");

console.log(pessoa1);
