# stopwatch
Desenvolvimento de um cronômetro feito com: JavaScript, HTML e CSS.

pt-br
  
**PRIMEIRA ETAPA**

A etapa básica, inicialmente, é fazer o _index.html_. Nesse caso, apenas as tags _button_ já bastam para fazer toda a parte do
  html. Vale destacar que, para pensar no futuro do cronômetro, criei um _id="timer"_ no contador do relógio, para que, mais a
  frente, eu possa utilizá-lo no **JavaScript** com o _getElementById_. Obviamente, para a organização do código durante a 
  estilização, a _div class="stopwatch"_ é essencial, além das _class_ de todos os _button_.
  
**SEGUNDA ETAPA**

Criando o arquivo style.css e fazendo o _link_ ao html, começaremos as estilizações. Inicialmente, deixando todo o fundo do 
stopwatch preto, ou seja, _body { background: black; }_, além de mudar a fonte para ficar mais elegante. ;)
Como o fundo está todo preto, temos que deixar o _timer_ destacado, no caso, utilizei a _color: white;_
Para deixar o stopwatch mais centralizado, utizilei uma _margin-top_ de _15em_.
Já nos button, apenas estilizei à gosto, dei um espaço para o conteúdo do botão, alterei a cor para branco e deixei arredondado 
os cantos com o _border-radius_, deixei um _margin_ também entre eles.
Para ficar mais dinâmico, o _:hover_ nos button é essencial para o contato com o usuário, usando o _cursor: pointer_ para o
destaque do ponteiro do mouse.
De resto, apenas mudei as cores de cada button.

**TERCEIRA ETAPA**

Com o html e css definidos, iremos dar a vida para o stopwatch com o JavaScript.
Como estamos pensando no desenvolvimento de um relógio, precisaremos guardar algumas informações do contador, ou seja, as horas,
segundos e minutos, inicialmente ambas _lets_ com 0 de valor, e, como vamos mexer com o timer, vamos primeiramente "puxá-los" 
ao JavaScript com o _document.getElementById('timer')_.
A questão agora é, como um relógio atualiza as informações a casa segundo (vale destacar que por enquanto, nesse relógio, não 
existe os milissegundos), é preciso usar o setInterval atualizando uma função a casa 1 segundo (1000), mas que função é essa?
É uma função que recebe aquela var segundos que criamos, adicionando +1 de valor nessa var, toda vez que essa função for chamada
no setInterval, a nossa var segundos ganhará +1 de valor. Nessa mesma função, usaremos o timer, que já estava guardado naquela 
var, e aplicaremos a propriedade _.innerText_, para mudar o texto lá no html. A partir disso, é só lógica utilizando _if_ e 
_clearInterval_ para fazer todo o programa.
