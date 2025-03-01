import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
/* import EditorPen from "../assets/Editor_Pen.svg"; */

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://www.michaelpage.com.au/sites/michaelpage.com.au/files/styles/advice_node_desktop/public/2022-01/Software%20Developer.jpg.webp?itok=FMZ_gBBG"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img
          src="https://avatars.githubusercontent.com/u/116917401?v=4"
          className={styles.avatar}
        />
        <strong>Rhodrigo Rodrigues</strong>
        <span>Studant Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} weight="bold"/> Editar Perfil
        </a>
      </footer>
    </aside>
  );
}
