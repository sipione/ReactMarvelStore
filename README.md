# Projeto Marvel Store em React js

Primeiramente, após uma ifecção de COVID-19 que me deixou acamado até o dia 31 de janeiro pude começar o projeto dia 01 de fevereiro de 2022, isso mesmo com as 3 doses, cuidem-se!

O projeto consiste em uma criação de uma loja de HQ da Marvel com utilização de uma API para recebimento de infromações. Consiste em um projeto com extensão pequena de três elementos, de modo geral. A parte de loja onde serão exibidos os produtos, a parte de carrinho com os pedidos e uma página de exibição do produto em específico. 

Com o prazo curto estou preiorizando as funcionalidades para que tudop funcione para depois fazer os ajustes de design. A construção está seguindo a tecnica de mobile first para facilidade em ajustes de responsividade.

## Bibliotecas utilizadas.
Para estilização individual de componentes e geração de um estilo global (com intuito de reset) está sendo utilizada a biblioteca do styled-components, assim facilita a estilização componentizada evitando duplicaçºão e sobreposição de classes em arquivos css.

Para criação de rotas de maneira eficaz, seguindo parâmetros de SPA está sendo usada a lib do react-router-dom, assim os componentes são tranferidos sem recarregamento de páginas, isso permite escalabilidade e desempenho de um site que utilikza bastantes elmeentos visuais advindos de api. Como requisição e renderização são processos custosos para o browser, então criar rotas atgravés de criação e destruição de elmentos é uma maneira de ajudar com o desempenho.

## Controle de efeitos colaterais

As requisições de API são custosas para desempenho, bem como podem gerar efeiotos colaterais no programa, por isso todas as requisições serão encapsuladas dentro do hook de useEffect com contro0le de renderização com escutador em certos eventos, como no elemento de carrinho o use effect além de no momento de construção elee tambem rerenderiza elementos de acordo com o chamamento da função do hook customizado chamado useCart que tem um função chamada managecart.
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

O hook useCart é hook customizado para controle global de valores sem precisar criar um contextol e um provider, por enquanto. Conforme for construído vou analisar a necessidade de utilização de um hook de contexto para evitar variável global como utilizei no hook customizado. Dentro dele, por enquanto possuem duas variáveis um array e um objeto que faz a contagem de acordo com os itens adicioonados no carrinho. Mais adiante pretendo urilizar apenas o objerto com contagem p+ara fornecimento dos dados parta os eklmeentos que utilizam o hook.

## Animações e Estilos

## Página de compra

## Página do carrinho

## Página do produto
