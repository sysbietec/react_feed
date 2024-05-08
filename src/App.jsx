import { Post } from "./Post"
import { Header } from "./components/Header"
import WebFont from "webfontloader"


WebFont.load({
  google:{
    families:['Roboto:400,700']
  }
});

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="alexsandro"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dignissimos harum nulla nostrum commodi id adipisci! Est itaque consectetur, fuga sequi unde ab? Ad iure ea non inventore officiis maxime!" 
      />

      <Post
      author="alex"
      content="Analista de sistemas"
      />

    </div>
  )
}



