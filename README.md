# desafio-pitagoras
Desafio do processo seletivo de estagio, onde era necessário utilizar o Teorema de Pitágoras. 
A proposta era "demonstre ao Pitágoras a importância e impacto de seu teorema". 
Logo, aqui criei uma situação em que podemos utilizar o Teorema de Pitágoras na vida real: 
  Um carro de bombeiros para apagar o incêndio em um prédio. 
  
  PS: para fins didáticos foi desconsiderado o tamanho do prédio ou andares e altura do caminhão. 

### Tecnologias Utilizadas:
![JavaScript](https://img.shields.io/badge/-JavaScript-0D1117?style=for-the-badge&logo=javascript&labelColor=0D1117&textColor=0D1117)&nbsp; ![React.js](https://img.shields.io/badge/-React.js-0D1117?style=for-the-badge&logo=react&labelColor=0D1117)&nbsp; ![CSS](https://img.shields.io/badge/-CSS-0D1117?style=for-the-badge&logo=CSS3&logoColor=1572B6&labelColor=0D1117)&nbsp;![Node.JS](https://img.shields.io/badge/-Node.JS-0D1117?style=for-the-badge&logo=node.js&labelColor=0D1117&textColor=0D1117)&nbsp;![Vercel](https://img.shields.io/badge/-Vercel-0D1117?style=for-the-badge&logo=vercel&labelColor=0D1117&textColor=0D1117)&nbsp;

### Deploy: 
https://desafio-pitagoras.vercel.app/

## Desenvolvimento

### Lógica: 
  A lógica desenvolvida iniciou na ideia de querer demonstrar o teorema na prática. 
  Para uso do teorema é necessário 2 das variáveis (lados do triângulo). Quis então demonstrar na resposta a distância necessária e deixar essa como a variável de resposta. 
  Para facilitar os cálculos (e demonstrar tecnicas diferentes no desenvolvimento do código), coloquei os tamanhos da escada (hipotenusa) com 3 opções fixas de valores e os andares do prédio podendo variar de 1 a 20. 
  
### Programação: 
  Iniciando pela parte funcional, principal. O React permite configurar todo o HTML via javascript e fazer a logica e a página no mesmo arquivo. 
  Coloquei os inputs de número e outro de select, com as opções que eu desejei. 
  Configurei o javascript para chamar funções nesses inputs quando fossem alterados.
  No de número coloquei um alerta para valores inválidos e fiz uma função com if para validação, não permitindo valores negativos, 0 ou acima de 20, aparecendo um alerta e setndo em 1 o valor. 
  A função para cálculo da distancia é chamada nos 2 inputs quando alterados. 
  
  Para dar maior dinâmica e diferencial à página, coloquei a distância sendo visualmente alterada na imagem conforme os valores inseridos. 
  Configurado através de manipulação de DOM. 
  
### Estilização: 
  A estilização foi simples, não utilizando framework ou lib. Feito tudo através de arquivo CSS. 
  Manipulando flexbox criadas por divs no javascript. 
  As alterações nas imagens possuem uma transição de slow, para deixar mais fluida as mudanças dos desenhos, o que traz uma satisfação melhor para o usuário. 
  
  
