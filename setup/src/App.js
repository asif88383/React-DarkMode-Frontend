import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageTheme = () => { // getStorageTheme  is a function that returns a string
  let theme = 'light-theme' // theme is a string
  if (localStorage.getItem('theme')) {  // if localStorage.getItem('theme') is true then theme is set to the value of localStorage.getItem('theme')
    theme = localStorage.getItem('theme') // theme is set to the value of localStorage.getItem('theme')
  }
  return theme
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme()) // theme is set to the value of getStorageTheme();

  const toggleTheme = () => { // toggleTheme is a function
    if (theme === 'light-theme') { // if theme is equal to 'light-theme' then theme is set to 'dark-theme'
      setTheme('dark-theme') // theme is set to 'dark-theme'
    } else { // if theme is not equal to 'light-theme' then theme is set to 'light-theme'
      setTheme('light-theme') // theme is set to 'light-theme'
    }
  };

  useEffect(() => { // useEffect is a function
    document.documentElement.className = theme // document.documentElement.className is set to theme  (the value of theme)
    localStorage.setItem('theme', theme) // localStorage.setItem('theme', theme) is set to theme (the value of theme)
  }, [theme]) // useEffect is set to the value of theme


  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => { // data.map is a function that returns an array of JSX elements (Article components)
          return <Article key={item.id} {...item} />; // Article components are returned
        })} 
      </section>
    </main>
  )
}

export default App
