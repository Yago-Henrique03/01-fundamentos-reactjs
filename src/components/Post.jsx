import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar'


// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date 
// content: ""

export function Post({author, content, publishedAt}) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        {author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="09 de julho às 14:02" dateTime="2023-09-06">{}</time>

            </header>
                <div className={styles.content}>
                    {content.map(paragraph => {
                        <p>{paragraph.content.content}</p>
                    })}
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