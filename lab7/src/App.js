
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Sample skills data for the interactive skill list.
const skillsData = [
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "DevOps",
  "Data Analysis",
  "Mobile Development"
];

// Header component.
function Header() {
  return (
    <header className="mb-4">
      <h1 className="text-center">Web Dev Skills</h1>
      <hr />
    </header>
  );
}

// Footer component.
function Footer() {
  return (
    <footer className="mt-4 text-center">
      <hr />
      <p>&copy; {new Date().getFullYear()} Efe Ivagba</p>
    </footer>
  );
}

// Component for toggling themes.
function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="text-center">
      <button className="btn btn-secondary mb-3" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

// Component to filter and display a list of skills.
// The skills list remains hidden until the user starts typing.
function SkillList() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredSkills = skillsData.filter(skill =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="mb-4">
      <h3>Skills</h3>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Search skills..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm ? (
        filteredSkills.length > 0 ? (
          <ul className="list-group">
            {filteredSkills.map((skill, index) => (
              <li key={index} className="list-group-item">
                {skill}
              </li>
            ))}
          </ul>
        ) : (
          <p>No matching skills found.</p>
        )
      ) : (
        <p className="text-muted">Start typing to search for skills...</p>
      )}
    </section>
  );
}

// Component to fetch and display project data from the backend.
function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/projects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched projects:', data);
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="mb-4">
      <h3>Projects</h3>
      {projects.length === 0 ? (
        <p>No projects available</p>
      ) : (
        projects.map((project, index) => (
          <div key={index} className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Author: {project.author}
              </h6>
              <p className="card-text">
                <strong>Languages:</strong> {project.languages.join(', ')}
              </p>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

// Component to fetch and display weather info from the backend.
function Weather() {
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [errorWeather, setErrorWeather] = useState(null);

  useEffect(() => {
    fetch('/api/weather')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch weather');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched weather:', data);
        setWeather(data);
        setLoadingWeather(false);
      })
      .catch(err => {
        console.error('Error fetching weather:', err);
        setErrorWeather(err.message);
        setLoadingWeather(false);
      });
  }, []);

  if (loadingWeather) return <p>Loading weather...</p>;
  if (errorWeather) return <p>Error: {errorWeather}</p>;

  return (
    <section className="mb-4">
      <h3>Weather Information</h3>
      <p>
        <strong>City:</strong> {weather.city}, {weather.country}
      </p>
      <p>
        <strong>Temperature:</strong> {weather.temperature.current}°C (Feels like {weather.temperature.feels_like}°C)
      </p>
      <p>
        <strong>Humidity:</strong> {weather.humidity}%
      </p>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'} style={{ minHeight: '100vh' }}>
      <div className="container py-4">
        <Header />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Weather />
        <SkillList />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
