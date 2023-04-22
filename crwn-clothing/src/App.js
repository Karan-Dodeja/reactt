const App = () => {

  const catrgories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    },
  ]


  return (

    <div className="categories-container">
      {catrgories.map(({ title }) => (
        <div className="category-container" key="id">
          <div className="background-image"  />
          <div className="category-body-container">
            {/* <img /> */}
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>

  );
}

export default App;