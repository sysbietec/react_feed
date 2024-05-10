import { Header } from "./components/Header"
import WebFont from "webfontloader"
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";


WebFont.load({
  google: {
    families: ['Roboto:400,700']
  }
});

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
        author="alexsandro"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dignissimos harum nulla nostrum commodi id adipisci! Est itaque consectetur, fuga sequi unde ab? Ad iure ea non inventore officiis maxime!" 
      />

      <Post
      author="alex"
      content="Analista de sistemas"
      />
        </main>
      </div>
    </div>
  )
}



