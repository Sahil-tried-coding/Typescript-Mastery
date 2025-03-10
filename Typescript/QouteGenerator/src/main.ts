import './style.css'
import typescriptLogo from './typescript.svg'


let qoute = document.getElementById("qoute") as HTMLElement
let author = document.getElementById("author") as HTMLElement
const generateButton = document.querySelector("button") as HTMLButtonElement

const api:string ="https://quotes-api-self.vercel.app/quote"

async function generateQoute(){

  const data = await fetch(api)
  const respones = await data.json()
console.log(respones)
  if(respones){
    qoute.textContent = respones.quote
    author.textContent = respones.author
  }

}


// const setterFunc = (resp) =>{

  
// }

generateButton.addEventListener("click",()=>{generateQoute()})

