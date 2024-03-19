import Foot from "./Foot";
import Head from "./Head"

   
function App() {
  
    
   
  function activate(chosen){
    document.querySelector('.headtext1').classList.contains("htextactive")?document.querySelector('.headtext1').classList.remove("htextactive"):false;
    document.querySelector('.headtext2').classList.contains("htextactive")?document.querySelector('.headtext2').classList.remove("htextactive"):false;
     document.querySelector('.headtext2').innerText=chosen.lastChild.innerText;
     document.querySelector('.headtext2').classList.contains("htextactive")? false:document.querySelector('.headtext2').classList.add("htextactive");
}
function deactivate(){
     document.querySelector('.headtext2').classList.contains("htextactive")? document.querySelector('.headtext2').classList.remove("htextactive"):false;
     document.querySelector('.headtext1').classList.contains("htextactive")?false:document.querySelector('.headtext1').classList.add("htextactive");
}
  return (
    <>
     <Head activate={activate} deactivate={deactivate}/>
      <Foot/>

      </>
  )
}

export default App
