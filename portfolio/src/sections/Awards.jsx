import { awards } from './Details.js';

function Awards() {
    const awardElements = awards.map((award) => (
        <div key={award.name} className="card">
            <h3>{award.name}</h3>
            <h5 style={{textAlign: "center"}}>{award.issuer}<br />{award.date}</h5>
            {award.details && <p>{award.details}</p>}
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
