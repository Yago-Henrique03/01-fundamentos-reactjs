/* eslint-disable react/prop-types */

import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }){

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://media.licdn.com/dms/image/D4D03AQFkZBGgaxHHaQ/profile-displayphoto-shrink_200_200/0/1679489116663?e=1691625600&v=beta&t=tUzJSdc1xfHg_PM1Tw2S9BMRcseR86OVwXyCulGV1gU"
                alt="" 
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Yago Henrique</strong>
                            <time 
                                title="09 de Julho às 14:55" dateTime="2023-09-06"
                            >
                                Cerca de 2h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    {content}
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir<span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}