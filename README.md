<h1 align="center"> Projeto: Marvel Store em React js </h1>

Primeiramente, após uma infecção de COVID-19 que me deixou acamado até o dia 31 de janeiro pude começar o projeto dia 01 de fevereiro de 2022, isso mesmo com as 3 doses, cuidem-se! E espero que gostem da minha sequência de três deploys conforme solicitado.

Mesmo com um prazo muito encurtado consegui desenvolver um projeto que pode ser conferido no link https://marvelStore.sipione.tech

A minha primeira loja criada em React, muitas features ainda podem e serão implementadas. Foi bem desafiador essa criação em tempo record, ao mesmo tempo foi muito enriquecedor e uma experiência fantástica. 

O projeto consiste em uma criação de uma loja de HQ da Marvel com utilização de uma API para recebimento de informações. Consiste em um projeto com extensão pequena de três elementos, de modo geral. A parte de loja onde serão exibidos os produtos, a parte de carrinho com os pedidos e uma página de exibição do produto em específico. 

Com o prazo curto estou priorizando as funcionalidades para que tudo funcione para depois fazer os ajustes de design. A construção está seguindo a técnica de mobile first para facilidade em ajustes de responsividade.

## UI

O design minimalista e clean visa facilitar a navegabilidade do usuário com forte apelo às imagens e menos apelo às cores e textos. O foco é tornar a experiência agradável através de um ambiente bonito, facilmente navegável e com elementos textuais apresentados de maneira agradável, arredondada e flutuante. os efeitos de hover todos com elemento de transition para que nenhuma mudança seja brusca. 

## Organização dos documentos

Na pasta principal do projeto é possível verificar os arquivos principais de index.js e App.jsx além das pastas de public e src.

Na pasta de src além das imagens também é possível conferir a pasta dos components, das páginas, de UI, de API e de hooks personalizados.

Na pasta de páginas todos os arquivos possuem a responsabilidade de renderização da página, sendo abstraídas outras responsabilidades para outros documentos, como da parte de estilos mais globais em UI e os estilos mais específicos nas pastas de componentes. Cada página possui uma pasta com seus componentes próprios. Isso facilita a manutenibilidade do código assim como a criação de hooks personalizados para conter lógicas de manuseio das informações fora dos arquivos de renderização.


## Componentização e variáveis

Na pasta de UI é possível verificar o arquivo de variáveis o index.js e o arquivo de global style. As variáveis facilita futuras atualizações, principalmente no que diz respeito aos estilo, se quiser mudar todas as fontes de corpo de texto de uma vez basta ir nas variáveis e realizar as alterações. 


## Bibliotecas utilizadas.
Para estilização individual de componentes e geração de um estilo global (com intuito de reset) está sendo utilizada a biblioteca do styled-components, assim facilita a estilização componentizada evitando duplicação e sobreposição de classes em arquivos css.

Para criação de rotas de maneira eficaz, seguindo parâmetros de SPA está sendo usada a lib do react-router-dom, assim os componentes são transferidos sem recarregamento de páginas, isso permite escalabilidade e desempenho de um site que utiliza bastantes elementos visuais advindos de api. Como requisição e renderização são processos custosos para o browser, então criar rotas através de criação e destruição de elementos é uma maneira de ajudar com o desempenho.

## Controle de efeitos colaterais

As requisições de API são custosas para desempenho, bem como podem gerar efeitos colaterais no programa, por isso todas as requisições serão encapsuladas dentro do hook de useEffect com contro0le de renderização com escutador em certos eventos, como no elemento de carrinho o use effect além de no momento de construção ele também rerenderiza elementos de acordo com o chamamento da função do hook customizado chamado useCart que tem um função chamada managecart.
```javascript
const Cart = ()=>{
    const [cart, counter, manageCart] = useCart();
    const [jsonItems, setJsonItems] = useState([])

    useEffect(()=>{
        let items = [];
        ApiHqRequest().map(item=>{
            if(cart.find(e=> e == item.id)){
                items.push(item)
            }
        })
        setJsonItems([...items]);
    },[manageCart])
    
    [restante do código]
}
```
## Hook customizado

O hook useCart é hook customizado para controle global de valores sem precisar criar um contexto e um provider, por enquanto. Conforme for construído vou analisar a necessidade de utilização de um hook de contexto para evitar variável global como utilizei no hook customizado. Dentro dele, por enquanto possuem duas variáveis um array e um objeto que faz a contagem de acordo com os itens adicionados no carrinho. Mais adiante pretendo utilizar apenas o objeto com contagem para fornecimento dos dados parta os elementos que utilizam o hook.

Outro hook customizado foi o useCreators para isolamento de responsabilidades, retirando as fórmulas da página Shop e utilizando em um ambiente com funções com responsabilidades isoladas. Sendo assim, a página resta apenas com a renderização, quanto as lógicas de funções acontecem em um hook especializado e apenas retorna as informações para que a página use.

## Animações e Estilos

Os estilos encontram-se isolados nos componentes, cada página possuem seus componentes criados a partir da pasta de componentes, reservando ali a responsabilidade de estilos, sendo que os itens que foram herdados estão também isolados no arquivo index.js na pasta de UI. Assim como na mesma pasta encontram-se os estilos globais aplicados. Os estilos globais também foram utilizados através da styled components pelo método create Global Style. 

Infelizmente as animações são itens que pretendo adicionar ao prohjeto, principalmente nas transições entre as páginas, uma biblioteca externa que se presta ao objetivo é a React Transition Group que da para fazer transições completas entre as rotas do react router dom. 

## Página de compra

A página de compras faz a requisição dos itens através do arquivo de API e renderiza os itens individuais. Ou seja, cada item foi separado em um card com a imagem, título, descrição e botão comprar. O preço infelizmente não foi fornecido pela API da marvel, motivo pelo qual não consta no site. Assim, os itens são armazenados em um hook específico e são renderizados pouco a pouco, de acordo com o item máximo de cada página e os filtros aplicados. Para esse projeto, por enquanto as páginas possuem no máximo 6 itens divididos em até duas linhas e três colunas. 

O filtro mencionado é dos editores, conforme o editor é escolhido, podendo ser escolhido simultaneamente mais de um, os itens correspondentes são renderizados na tela.

A paginação é feita com componente específico que leva em consideração o número de itens, o número limite por página, a quantidade que será pulada e um setter para mudar o offset(o que será pulado). Na lista de paginação aparecem no máximo 5 números. Após o três e antes das duas últimas página a página atual sempre fica no centro seguindo anteriormente pelas duas antecessoras e seguido pelas duas posteriores. A página atua é indicada com um background diferente dos demais.

Os itens são clicáveis e isso leva à página do produto em específico, o apresentando em maiores detalhes.

## Página do produto

A página do produto consiste em um card com imagens do produto que podem ser ampliadas, links para voltar à página principal e para ir direto para o carrinho além dos menus de navegação do cabeçalho e do rodapé. 

Logo abaixo da imagem é possível conferir os detalhes do produto e enviá-lo para o carrinho quantas vezes desejar, podendo o a quantidade de produtos ser ajustada dentro da página do carrinho.

## Página do carrinho

A página do carrinho conta com a lista de produtos com imagem título, link para levar de volta aos detalhes e quantidade de itens que pode ser modificada em empo real. quando a quantidade chega a zero o item é retirado automaticamente do carrinho.

A página do carrinho vazia possui um design completamente diferente de quando possui itens, contando com um botão para retorno às compras na página principal. 

## Responsividade

Todo o site foi construindo seguindo o modelo de mobile first, sendo posteriormente adequado para desktop.

## Coisas que gostaria de implementar

Infelizmente Chronus é implacável e impiedoso, fazendo com que seja impossível fazermos tudo que desejamos dentro de certo tempo. Por isso, por infortúnio do destino, alguns dos meus planos para o projeto ficaram para o futuro. São alguns exemplos: 

- Animações entre as páginas

- Mudança de tema claro e escuro além de temas seguindo a paleta de cores das joias do infinito

- Página my account com API do Git HUb e outras

- Integração com API dos correios

- Mais filtros
