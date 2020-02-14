import React, { useState } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";
function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/31110945?s=460&v=4"
                alt="rifam"
              />
              <div className="user-info">
                <strong>Vinicius Rifam</strong>
                <span>HTML, CSS, JavaScript, ReactJS</span>
              </div>
            </header>
            <p>Loreipsum tops radioactive 1000 grau</p>
            <a href="https://github.com/rifam">Acessar perfil no Github</a>  
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/31110945?s=460&v=4"
                alt="rifam"
              />
              <div className="user-info">
                <strong>Vinicius Rifam</strong>
                <span>HTML, CSS, JavaScript, ReactJS</span>
              </div>
            </header>
            <p>Loreipsum tops radioactive 1000 grau</p>
            <a href="https://github.com/rifam">Acessar perfil no Github</a>  
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/31110945?s=460&v=4"
                alt="rifam"
              />
              <div className="user-info">
                <strong>Vinicius Rifam</strong>
                <span>HTML, CSS, JavaScript, ReactJS</span>
              </div>
            </header>
            <p>Loreipsum tops radioactive 1000 grau</p>
            <a href="https://github.com/rifam">Acessar perfil no Github</a>  
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/31110945?s=460&v=4"
                alt="rifam"
              />
              <div className="user-info">
                <strong>Vinicius Rifam</strong>
                <span>HTML, CSS, JavaScript, ReactJS</span>
              </div>
            </header>
            <p>Loreipsum tops radioactive 1000 grau</p>
            <a href="https://github.com/rifam">Acessar perfil no Github</a>  
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/31110945?s=460&v=4"
                alt="rifam"
              />
              <div className="user-info">
                <strong>Vinicius Rifam</strong>
                <span>HTML, CSS, JavaScript, ReactJS</span>
              </div>
            </header>
            <p>Loreipsum tops radioactive 1000 grau</p>
            <a href="https://github.com/rifam">Acessar perfil no Github</a>  
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
