let nome = "Pedro"
let idade = 15
let cidade = "Londrina"
let jogo1 = "Minecraft"
let trabalho = "Programação"
console.log("Oi, eu sou " + nome + " e tenho " + idade + " anos de idade, moro em " + cidade + " e gosto de jogar " + jogo1 + ", tenho vontade de trabalhar com " + trabalho)
console.log("Oi, meu nome é " + nome)
console.log("Minha idade " + idade + " anos.")
console.log("Moro em " + cidade)
console.log("Gosto de jogar " + jogo1 + " com os amigos")
console.log("Tenho vontade de estudar/trabalho com " + trabalho)

const ValorMinimo = 50;
const Subtotal = 25;
const TemDesconto = Subtotal > ValorMinimo
console.log(TemDesconto)

let idade2 = 15
if (idade2 >= 18)
{console.log("Você é maior de idade")}
else
{console.log("Você não é maior de idade")}
let idade3 = 50
if (idade3 >= 60)
{console.log("Você é aposentado")}
else
{console.log("Você não é aposentado")}

let pontos = 500
let anos_cliente = 1
if (pontos <= 99){
    console.log("Você é cliente BRONZE!!!")
} else if (pontos >= 100 && 499){
    console.log("Você é cliente PRATA!!!")
} else if (pontos >= 500 && 999){
    console.log("Você é cliente OURO!!!")
} else if (pontos >= 1000 ){
    console.log("Você é cliente DIAMANTE!!!")
} 

for (let i = 1; i <= 5; i++){
    console.log(i)
}

let tentativas = 3
while(tentativas > 0) {
    console.log(`Restam ${tentativas}`);
    tentativas--;
}

for (let ii = 1; ii <= 10; ii++){
    if(ii === 7)break
    console.log(ii)
}