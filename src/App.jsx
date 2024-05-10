import { Header } from "./components/Header"
import WebFont from "webfontloader"
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import data from './data.json';

// author:{ url_avatar:"", name:"", role:""}
// publishedAt: Date
// content: String

 
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
            {data.posts.map((post) =>(
                <Post 
                   key={post.id}
                   author={post.author}
                   publishedAt={post.publishedAt}
                   content={post.content}
                />               
            ))}
        </main>
      </div>
    </div>
  )
}



