/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';
import { Avatar } from './Avatar'

import styles from './Post.module.css';
import { useState } from 'react';

// IMPORTS ACIMA
  

export function Post({author, content, publishedAt}) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?'
    ])

    const [ newCommentText, setNewCommentText ] = useState('')

    const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })


    function handleCreateNewComment() {
        event.preventDefault();
        if(comments.includes(newCommentText)) {
            return alert('ESTE COMENTÁRIO JÁ EXISTE')
        }
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>

            </header>
                <div className={styles.content}>
                    {content.map( line => {
                        if ( line.type === 'paragraph'){
                            return <p key={line.content}>{line.content}</p>;
                        } else if ( line.type === 'link'){
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    })}
                </div>
                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedBack</strong>
                    <textarea
                        name="comment"
                        value={newCommentText} 
                        placeholder='Deixe um comentário'
                        onChange={handleNewCommentChange}
                    />

                    <footer>
                        <button type="submit">Publicar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                   {comments.map( comment => {
                        return <Comment key={comment} content={comment}/> 
                   })}
                </div>
        </article>
    )
}