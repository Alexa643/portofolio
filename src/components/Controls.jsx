import "./Controls.css"

export default function Controls({ setView }) {
  return (
    <div className="controls">
      <input type="text" placeholder="Caută proiecte..." />
      <select>
        <option>Toate</option>
        <option>React</option>
        <option>JavaScript</option>
      </select>
      <select>
        <option>Sortare: Nou</option>
        <option>Sortare: Vechi</option>
      </select>
      <button onClick={() => setView("grid")}>🔲</button>
      <button onClick={() => setView("list")}>📄</button>
    </div>
  )
}
