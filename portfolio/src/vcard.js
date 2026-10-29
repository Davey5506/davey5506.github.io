// Builds the downloadable contact card. Imported by vite.config.js, which emits it as a
// static .vcf file so mobile browsers open it straight into the "Add to Contacts" screen.

// Escapes text values per the vCard 3.0 spec (RFC 2426).
function escapeVCard(value) {
    return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/([,;])/g, '\\$1');
}

export function vCardFileName(contact) {
    return `${contact.firstName}-${contact.lastName}.vcf`;
}

export function buildVCard(contact) {
    const lines = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N:${escapeVCard(contact.lastName)};${escapeVCard(contact.firstName)};;;`,
        `FN:${escapeVCard(`${contact.firstName} ${contact.lastName}`)}`,
        `ORG:${escapeVCard(contact.organization)}`,
        `TITLE:${escapeVCard(contact.title)}`,
        `EMAIL;TYPE=INTERNET:${contact.email}`,
        ...(contact.phone ? [`TEL;TYPE=CELL:${contact.phone}`] : []),
        ...contact.links.map((link) => `URL:${link.url}`),
        'END:VCARD',
    ];
    return lines.join('\r\n') + '\r\n';
}
