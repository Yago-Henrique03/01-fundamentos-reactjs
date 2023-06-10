import {Post} from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';


import './global.css';
import styles from './App.module.css';


const posts = [
  {
      id: 2,
      author: {
          avatarUrl: "https://github.com/diego3g.png",
          name: "Diego Fernandes",
          role: 'CTO @Rocketseat'
      },
      content: [
          { type : 'paragraph', content: 'Fala galeraa 👋'},
          { type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          { type : 'link', content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2023-06-09 20:00:00')
  },
  {
      id: 1,
      author: {
          avatarUrl: "https://media.licdn.com/dms/image/D4D03AQFkZBGgaxHHaQ/profile-displayphoto-shrink_200_200/0/1679489116663?e=1691625600&v=beta&t=tUzJSdc1xfHg_PM1Tw2S9BMRcseR86OVwXyCulGV1gU",
          name: "Yago Henrique",
          role: 'Web @ Developer'
      },
      content: [
          { type : 'paragraph', content: 'Fala galeraa 👋'},
          { type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          { type : 'link', content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2023-06-05 20:00:00')
  }
]

export function App() {
  
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}> 
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

