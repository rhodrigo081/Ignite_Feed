import styles from "./Sidebar.module.css";
import fotoDePerfil from "../assets/Foto_Perfil.jpeg";
import EditorPen from "../assets/Editor_Pen.svg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://www.michaelpage.com.au/sites/michaelpage.com.au/files/styles/advice_node_desktop/public/2022-01/Software%20Developer.jpg.webp?itok=FMZ_gBBG"
        className={styles.cover}
      />

      <div className={styles.profile}>
      <img src={fotoDePerfil} className={styles.profilePic}/>
        <strong>Rhodrigo Rodrigues</strong>
        <span>Studant Developer</span>
      </div>

      <footer>
        <a href="#">
          <img src={EditorPen} alt="" /> Editar Perfil
        </a>
      </footer>
    </aside>
  );
}
