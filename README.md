<h1 align="center"> Project: Marvel Store in React js </h1>

Welcome to the project of a small shop for Marvel Comics.

You can follow the operation through the link: marvelstore.sipione.tech. 

This readme contains how the project was built, as well as what the next improvements will be.

This project will be finished by the end of March.

## General Design concept (Our UI)

The minimalist and clean design aims to facilitate user navigation with a strong appeal to images and less appeal to colors and texts. The focus is to make the experience pleasant through a beautiful environment, easily navigable and with textual elements presented in a pleasant, rounded and floating way. the hover effects all with transition element so that no change is sudden.

## Folder and files estructures

in short: The project is structured with a main file that generates routes between pages, which are built from pre-structured elements. These elements can be fully styled within the component itself or they can inherit some characteristic from the general design folder called the UI

In the main project folder it is possible to check the main index.js and App.jsx files in addition to the public and src folders.

In the src folder, in addition to the images, you can also check the components, pages, UI, API and custom hooks folder.

In the pages folder, all files have the responsibility for rendering the page, being abstracted from other responsibilities for other documents, such as the more global styles in the UI and the more specific styles in the component folders. Each page has a folder with its own components. This facilitates code maintainability as well as creating custom hooks to contain information handling logic outside the render files.


## Componentization and variables

In the UI folder it is possible to check the variables file index.js and the global style file. Variables facilitate future updates, especially with regard to style, if you want to change all body text fonts at once, just go to variables and make the changes.

The variable creation system is very useful, even for building theme providers and related elements.

In addition, componentized creation is the raison d'être of the React lib, because having a structure with components that are placed in a more general structure makes maintainability easier, as well as updates can be done in a way that has no side effects unwanted elsewhere in the application


## Libraries used.
For individual styling of components and generation of a global style (with the intention of reset) the styled-components library is being used, thus facilitating componentized styling by avoiding duplication and overlapping of classes in css files.

To create routes efficiently, following SPA parameters, the react-router-dom lib is being used, so the components are transferred without page reloading, this allows scalability and performance of a site that uses a lot of visual elements from api . As requesting and rendering are expensive processes for the browser, so creating routes by creating and destroying elements is one way to help with performance.


## Side effects' control

API requests are costly for performance, as well as causing side effects in the program, so all requests will be encapsulated within the useEffect hook with listener rendering control on certain events, such as in the cart element the use effect in addition to at build time it also re-renders elements according to the custom hook function call called useCart which has a function called managecart.
```react
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
## custom hook

The useCart hook is a custom hook for global control of values ​​without needing to create a context and a provider, for now. As it is built I will analyze the need to use a context hook to avoid global variable as I used in the custom hook. Inside it, for now, they have two variables, an array and an object that counts according to the items added to the cart. Later I intend to use only the object with count to supply the data for the elements that use the hook.

Another custom hook was useCreators for isolating responsibilities, removing formulas from the Shop page and using them in an environment with functions with isolated responsibilities. So, the page is left only with rendering, when the function logic happens in a specialized hook and just returns the information for the page to use.

## Animations and Styles

The styles are isolated in the components, each page has its components created from the components folder, reserving the responsibility of styles there, and the inherited items are also isolated in the index.js file in the UI folder. As well as in the same folder are the global styles applied. Global styles were also used through styled components by the create Global Style method.

Unfortunately the animations are items that I intend to add to the project, mainly in the transitions between the pages, an external library that lends itself to the objective is the React Transition Group that can make complete transitions between the react router dom routes.

## Purchase page

The shopping page orders the items through the API file and renders the individual items. That is, each item was separated into a card with the image, title, description and buy button. The price unfortunately was not provided by the marvel API, which is why it is not on the site. Thus, items are stored in a specific hook and are rendered little by little, according to the maximum item on each page and the filters applied. For this project, for now the pages have a maximum of 6 items divided into up to two rows and three columns.

The mentioned filter belongs to the editors, as the editor is chosen, more than one can be chosen simultaneously, the corresponding items are rendered on the screen.

The pagination is done with a specific component that takes into account the number of items, the limit number per page, the amount that will be skipped and a setter to change the offset (which will be skipped). A maximum of 5 numbers appear in the pagination list. After the three and before the last two pages the current page is always in the center followed by the two predecessors and followed by the two following ones. The current page is indicated with a different background from the others.

Items are clickable and this takes you to the specific product page, presenting it in more detail.

## Product page

The product page consists of a card with zoomable product images, links to go back to the main page and to go straight to the cart, in addition to the header and footer navigation menus.

Just below the image it is possible to check the details of the product and send it to the cart as many times as you wish, and the quantity of products can be adjusted within the cart page.

## Cart page

The cart page has the list of products with title image, link to take back to the details and quantity of items that can be modified in real time. when the quantity reaches zero the item is automatically removed from the cart.

The empty cart page has a completely different design than when it has items, with a return to shopping button on the main page.

## Responsiveness

The entire site was built following the mobile first model, being later adapted for desktop.

## Things that will be implemented

Unfortunately Chronus is ruthless and merciless, making it impossible for us to do everything we want within a certain time. So, by the misfortune of fate, some of my plans for the project were left for the future. Here are some examples:

-refactoring containing tests and better organization of files

- Animations between pages

- Light and dark theme change plus themes following the infinity gems color palette

- My account page with Git HUb API and others

- Integration with Post Office API

- More filters
