import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src="https://media.licdn.com/dms/image/D4D03AQFkZBGgaxHHaQ/profile-displayphoto-shrink_200_200/0/1679489116663?e=1691625600&v=beta&t=tUzJSdc1xfHg_PM1Tw2S9BMRcseR86OVwXyCulGV1gU"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Yago Henrique</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="09 de julho às 14:02" dateTime="2023-09-06">Publicado há 1h.</time>

            </header>
                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>

                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>

                    <p>
                        <a href="#">#novoprojeto</a>{' '}
                        <a href="#">#nlw</a>{' '}
                        <a href="#">#rocketseat</a>
                    </p>
                </div>
                <form  className={styles.commentForm}>
                    <strong>Deixe seu feedBack</strong>
                    <textarea 
                        placeholder='Deixe um comentário'
                    />

                    <footer>
                        <button type="submit">Publicar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
        </article>
    )
}