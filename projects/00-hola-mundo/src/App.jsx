import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Duran',
    isFollowing: true
  },
  {
    userName: 'vegadev',
    name: 'Kevin Jesús Vega Torres',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export const App = () => {
  // const [name, setName] = useState('Elon Musk')
  // const midudev = {userName: 'midudev'}
  // const pheralb = {userName: 'pheralb' }
  // const [isFollowing, setIsFollowing] = useState(false);
  // console.log('[App] render with isFollowing', isFollowing)
  return (
    <section className='App'>
      {users.map(user => {
        const { userName, name, isFollowing } = user
        return (
          <TwitterFollowCard
            userName={userName}
            initialIsFollowing={isFollowing}
            key={userName}
          >
            {name}
          </TwitterFollowCard>
        )
      })}
      {/* <TwitterFollowCard {...midudev}>
        Miguel Agel Duran
      </TwitterFollowCard>
      <TwitterFollowCard {...pheralb}>
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard userName={name}>
        Elon Musk
      </TwitterFollowCard> */}
      {/* <button onClick={() => setName('pedromichel')}>
        Cambio Nombre
      </button> */}
      {/* <button onClick={() => setIsFollowing(!isFollowing)}>
        Cambiar estado de App
      </button> */}
    </section>
  )
}
