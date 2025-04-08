import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { Post } from "./components/Post.jsx";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rhodrigo081.png",
      name: "Rhodrigo Rodrigues",
      role: "Studant Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Olá! Meu nome é Rhodrigo e sou estudante do 2º período do tecnólogo em Análise e Desenvolvimento de Sistemas na FICR. ",
      },
      {
        type: "paragraph",
        content:
          "Tenho paixão por tecnologia e desenvolvimento de software.Tenho conhecimento em Spring Boot, SQL e React, além de estar em constante aprendizado para me tornar um desenvolvedor mais completo. Atualmente, estou participando de trilhas de conhecimento e bootcamps para aprofundar minhas habilidades em desenvolvimento web e backend. Estou em busca de oportunidades para aplicar meus conhecimentos em projetos desafiadores e contribuir para soluções inovadoras.",
      },
      { type: "link", content: "rhodrigo081.developer/FICR" },
    ],
    publishedAt: new Date("2025-03-30 21:40:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/thxxx11.png",
      name: "João Lucas",
      role: "Studant Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-03-29 21:40:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
