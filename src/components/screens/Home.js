import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>Nelson Guardado</h5>
        <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <div className="card-content">
          <i className="material-icons" style={{ color: 'red' }}>
            favorite
          </i>
          <h6>Title</h6>
          <p>This is amazing</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>

      <div className="card home-card">
        <h5>Nelson Guardado</h5>
        <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <div className="card-content">
          <h6>Title</h6>
          <i className="material-icons" style={{ color: 'red' }}>
            favorite
          </i>
          <p>This is amazing</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>

      <div className="card home-card">
        <h5>Nelson Guardado</h5>
        <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <div className="card-content">
          <i className="material-icons" style={{ color: 'red' }}>
            favorite
          </i>
          <h6>Title</h6>
          <p>This is amazing</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
    </div>
  )
}

export default Home
