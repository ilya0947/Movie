export default function Movie({title, year, id, type, poster}) {
    return <div id={id} className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                       poster === 'N/A' ?
                        <img className="activator" src={`https://via.placeholder.com/260x365.png?text=${title}`} alt="img"/> :
                        <img className="activator" src={poster} alt="img"/>
                    }
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right"></i></span>
                    <p>{year}<span className="right">{type}</span></p>
                </div>
            </div>    
}