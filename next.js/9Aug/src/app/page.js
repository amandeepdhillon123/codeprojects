import "./style.css"
import Shyam from '@/../style/ram.module.css'
import ram from "./page.module.css"
export default function Home() {
  return (
    <main>
      <h1 className={ram.main}>hello ji</h1>
      <h2 className={Shyam.main}>hii name</h2>
    </main>
  );
}
