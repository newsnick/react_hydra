import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './app/hooks'
import { fetchVRNews } from './features/vrnews/vrnewsSlice'

function VRNews() {
  const dispatch = useAppDispatch()
  const articles = useAppSelector((state) => state.vrnews.articles)
  const loading = useAppSelector((state) => state.vrnews.loading)
  const error = useAppSelector((state) => state.vrnews.error)

  useEffect(() => {
    dispatch(fetchVRNews())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <img src={article.image} alt={article.title} />
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  )
}

export default VRNews
