import { Earnings } from './Details.js';

function Awards() {
    const awardElements = Earnings.map((earning) => (
        <div key={earning.name} className="card">
            <h3 title={earning.name}>{earning.name}</h3>
            <h5 style={{textAlign: "center"}}>{earning.issuer}<br />{earning.date}</h5>
            <p>{earning.details}</p>
        </div>
    ));

    return (
        <section id="Awards">
            <h2 style={{marginLeft: "2rem"}}>Awards</h2>
            <div className="card-grid">
                {awardElements}
            </div>
        </section>
    )
}
export default Awards;
