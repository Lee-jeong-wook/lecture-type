import React, { useEffect, useState } from "react"
import Movie from './Movie'
import { IMovie } from './interface'

function Main() {

  const [loading, setLoading] = useState<boolean>(true)
  // const [movies, setMovies] = useState([])
  const [movies, setMovies] = useState<Array<IMovie> | null>(null) // Movie 인터페이스에 맞는 타입 또는 null로 초기화

  const getMovies = async () => {

    const json = await ( // API 조회
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json()

    // Argument of type 'IMovie' is not assignable to parameter of type 'SetStateAction<IMovie[] | null>'.
    // setMovies(json.data.movies as IMovie)
    setMovies(json.data.movies as IMovie[])
    setLoading(false) // API 조회 로직이 끝난 경우 loading 종료
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="Main">

      {
        loading ? ( // 영화 API fetch가 끝나기 전까진 로딩 화면 출력
          <p>loading...</p>
        ) : 
        <div>
          {movies && movies.map(movie => ( // 이후 배열 렌더링을 통해 화면 페인팅
            <Movie id={movie.id} title={movie.title} imgSrc={movie.medium_cover_image} />
            // <div>{movie.title}</div>
          ))}
        </div>
      }
   
    </div>
  );
}

export default Main;
