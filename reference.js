window.alert()

window.confirm()

window.prompt()

Number()

String()

var n1 = null

var n2 = 12

n2.toString()

parseFloat()

parseInt()

'A camisa do falcão é numero' + n2 // Usando concatenação.

`A camisa do falcão é numero ${n2}` // Template string - Melhor forma de inserir variaveis nas strings.

var nome = 'tiago'
nome.toUpperCase() // Mudando a string para letras maiusculas.
nome.toLowerCase() // Mudando a string para letras minusculas.
nome.length // Retorna a quantidade de caracteres que a string tem.

document.write()

document.writeln()

// Cria variavel n3 e atribui um numero real. Muda a exibição do numero para duas casas decimais e manda trocar ponto por virgula.
var n3 = 1545.5
n3.toFixed(2).replace('.', ',')

n3.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // Exibe o numero formatado para moeda brasileira.


// Iniciou a variavel 'count' com o valor 0. Fez um incremento de +1.
var count = 0
count++