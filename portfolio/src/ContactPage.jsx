import portrait from './assets/portrait-small.jpg';
import { contact } from './sections/Details.js';
import { vCardFileName } from './vcard.js';

function ContactPage() {
    const rows = [
        { name: "Email", label: contact.email, url: `mailto:${contact.email}` },
        ...(contact.phone ? [{ name: "Phone", label: contact.phone, url: `tel:${contact.phone}` }] : []),
        ...contact.links,
    ];

    return (
        <>
            <header>
                <a href="/"><h1 className="var-background">DK</h1></a>
            </header>
            <main className="contact-page">
                <div className="card contact-card">
                    <img src={portrait} alt="Portrait of David Kennedy" className="contact-portrait" />
                    <h2>{contact.firstName} {contact.lastName}</h2>
                    <h5 className="contact-title">{contact.title}, {contact.organization}</h5>
                    <p>{contact.synopsis}</p>
                    <ul className="contact-list">
                        {rows.map((row) => (
                            <li key={row.name}>
                                <a
                                    className="contact-row"
                                    href={row.url}
                                    {...(row.url.startsWith('http') && { target: "_blank", rel: "noreferrer" })}
                                >
                                    <span className="contact-label">{row.name}</span>
                                    <span className="contact-value">{row.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* No `download` attribute: iOS would save it to Files instead of opening Contacts */}
                    <a className="contact-download" href={vCardFileName(contact)}>
                        Save Contact
                    </a>
                </div>
            </main>
        </>
    );
}

export default ContactPage;
