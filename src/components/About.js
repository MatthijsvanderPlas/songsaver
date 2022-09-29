export default function About() {
  return (
    <div style={{ maxWidth: '60rem', margin: '0 auto' }} className="card ">
      <div className="card-header">
        <h3 className="card-header-title title is-4">About the Playlist App</h3>
      </div>
      <div className="card-content">
        <p className="subtitle">Techstack:</p>
        <div className="content columns">
          <ul className="column">
            <li>React</li>
            <li>React-router-dom v6.4</li>
            <li>React-redux Toolkit</li>
          </ul>
          <ul className="column">
            <li>Bulma css framework</li>
            <li>EsLint</li>
            <li>Prettier</li>
          </ul>
        </div>
      </div>
      <div className="card-content">
        <p className="subtitle">Description:</p>
        <div className="content">
          I am following a Full-Stack Developer course at WINC Academy trying to switch careers into
          the field of Software Development. This has been one of the hand in assignments (not a
          tutorial) in the course and has been my first real React App.
          <br />
          <br />
          Even tough I still have a long way to go I feel I have shown off a good amount of skill in
          learning new technologies and tried to combine a few, to me new, libraries. Safe to say
          there is certainly room for improvement.
          <br />
          <br />A few of the hurdles to overcome were:
          <ul>
            <li>
              Working with react-router-dom for the first time and using the children paths together
              with the &lt;Outlet /&gt;
            </li>
            <li>Working with Redux Toolkit and multiple slices</li>
            <li>Basic styling with Bulma for the first time</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
