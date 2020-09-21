import React, { useState, useEffect } from 'react'

const Home = () => {
  //eact hook
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('/allpost', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.posts)
        setData(result.posts)
      })
  }, [])

  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div className="card home-card" key={item._id}>
            <h5>{item.postedBy.name}</h5>
            <img
              src={item.photo}
              width="500px"
              height="333px"
              className="imagenCover"
            />
            <div className="card-content">
              <i className="material-icons" style={{ color: 'red' }}>
                favorite
              </i>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              <input type="text" placeholder="add a comment" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
