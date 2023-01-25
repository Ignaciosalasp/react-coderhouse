
const Sections = () => {
    return (
        <>
            <li className="nav-item">
          <a className="nav-link active" href="#"><button className="btn btn-white">Home</button>
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><button className="btn btn-white">Calcomanías</button></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><button className="btn btn-white">Carteles de recibida</button></a>
        </li>
        </>
    );
}

export default Sections;
