import React from 'react';
import { Helmet } from 'react-helmet-async';
import './PrivacyPolicy.css';

/**
 * Privacy & Cookie Policy – Osteria Caorlotta
 * Last update: May 2025
 */

function PrivacyPolicy() {
  return (
    <>
      {/* SEO + performance */}
      <Helmet>
        <title>Privacy & Cookie Policy – Osteria Caorlotta</title>
        <meta
          name="description"
          content="Informativa Privacy e Cookie Policy – Osteria Caorlotta: versione italiana e inglese conforme al GDPR."
        />
        {/* Pre-connect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />

        {/* Pre-load Montserrat */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          crossorigin="anonymous"
        />

        {/* Pre-load Cormorant Garamond */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap"
          crossorigin="anonymous"
        />

        <noscript>{`
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap"/>
        `}</noscript>
      </Helmet>

      <div className="privacy-policy container">
        {/* =============== ITALIANO =============== */}
        <section lang="it">
          <h1>Privacy &amp; Cookie Policy</h1>

          <h2>1. Titolare del trattamento</h2>
          <p>
            <strong>Osteria Caorlotta</strong> – Lungarno Amerigo Vespucci, 34r – 50123 Firenze (Italia)
            – e-mail: <a href="mailto:osteriacaorlotta@gmail.com">osteriacaorlotta@gmail.com</a>
          </p>

          <h2>2. Destinatari del trattamento</h2>
          <p>
            Fornitori nominati Responsabili ex art. 28 GDPR: hosting Vercel Inc., e-mail Google Workspace,
            consulenti IT, Formspree Inc. (modulo contatto) e, previo consenso, Google LLC (Google Maps).
          </p>

          <h2>3. Dati personali trattati</h2>
          <ul>
            <li>Dati tecnici (IP anonimizzato, browser, log);</li>
            <li>Dati forniti volontariamente via modulo o e-mail;</li>
            <li>Cookie tecnici e, previo consenso, cookie di terze parti (Google Maps, Formspree).</li>
          </ul>

          <h2>4. Finalità, basi giuridiche e conservazione</h2>
          <table>
            <thead>
              <tr>
                <th>Finalità</th>
                <th>Base giuridica</th>
                <th>Conservazione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Finalità">Navigazione sicura (cookie tecnici)</td>
                <td data-label="Base giuridica">Legittimo interesse (art. 6 §1 f)</td>
                <td data-label="Conservazione">12 mesi</td>
              </tr>
              <tr>
                <td data-label="Finalità">Gestione richieste / prenotazioni</td>
                <td data-label="Base giuridica">Misure pre-contrattuali (art. 6 §1 b)</td>
                <td data-label="Conservazione">Fino a 12 mesi dopo evasione</td>
              </tr>
              <tr>
                <td data-label="Finalità">Visualizzazione Google Maps</td>
                <td data-label="Base giuridica">Consenso (art. 6 §1 a)</td>
                <td data-label="Conservazione">Fino a revoca / 6 mesi</td>
              </tr>
            </tbody>
          </table>

          <h2>5. Cookie e servizi di terze parti</h2>
          <p>
            Il banner blocca i cookie non essenziali finché non esprimi consenso. Google LLC può trasferire
            dati negli USA (EU-US DPF o SCC). Formspree usa un cookie di sessione (<code>fs_csrftoken</code>)
            per protezione CSRF.
          </p>
          <p>
            Inoltre, utilizziamo <strong>Google Fonts</strong> per visualizzare i caratteri; Google potrebbe
            trasferire dati negli Stati&nbsp;Uniti. Per dettagli consulta la&nbsp;
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy di Google
            </a>.
          </p>

          <h3>Elenco cookie</h3>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Fornitore</th>
                <th>Finalità</th>
                <th>Durata</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Nome">NID (e simili)</td>
                <td data-label="Fornitore">Google Maps</td>
                <td data-label="Finalità">Preferenze mappa / sicurezza</td>
                <td data-label="Durata">6-12 mesi</td>
                <td data-label="Tipo">Terze parti</td>
              </tr>
              <tr>
                <td data-label="Nome">fs_csrftoken</td>
                <td data-label="Fornitore">Formspree</td>
                <td data-label="Finalità">Protezione CSRF</td>
                <td data-label="Durata">Sessione</td>
                <td data-label="Tipo">Essenziale</td>
              </tr>
            </tbody>
          </table>

          <h3>Come gestire i cookie</h3>
          <p>
            Puoi accettare o rifiutare i cookie al primo accesso tramite il banner. In qualsiasi momento puoi
            revocare o modificare il tuo consenso cliccando su <strong>“Gestisci cookie”</strong> nel footer del sito.
          </p>

          <p>I Google Fonts vengono caricati da fonti sicure (HTTPS), ma non utilizzano l’integrità delle risorse (SRI). Nessun cookie viene installato da Google Fonts.</p>

          <h2>6. Trasferimenti verso Paesi extra-UE</h2>
          <p>
            Possibili verso USA con garanzie adeguate (EU-US DPF o SCC). Copia disponibile su richiesta.
          </p>

          <h2>7. Conferimento dei dati</h2>
          <p>
            Obbligatorio per i dati tecnici; facoltativo per cookie di terze parti. Il rifiuto del consenso
            impedirà il caricamento di Google Maps.
          </p>

          <h2>8. Profilazione</h2>
          <p>Nessuna decisione automatizzata o profilazione viene effettuata.</p>

          <h2>9. Misure di sicurezza</h2>
          <p>TLS 1.3, backup cifrati, firewall, principio del minimo privilegio.</p>

          <h2>10. Diritti dell’utente</h2>
          <p>
            Accesso, rettifica, cancellazione, limitazione, opposizione, portabilità (artt. 15-22 GDPR)
            e reclamo al <a href="https://www.gpdp.it">Garante Privacy</a>. Scrivi a&nbsp;
            <a href="mailto:osteriacaorlotta@gmail.com">osteriacaorlotta@gmail.com</a>.
          </p>

          <p className="last-update">Ultimo aggiornamento: Maggio 2025</p>
        </section>

        {/* =============== ENGLISH =============== */}
        <section lang="en">
          <h1>Privacy &amp; Cookie Policy (English)</h1>

          <h2>1. Data Controller</h2>
          <p>
            <strong>Osteria Caorlotta</strong> – Lungarno Amerigo Vespucci, 34r – 50123 Florence (Italy) – e-mail: 
            <a href="mailto:osteriacaorlotta@gmail.com">osteriacaorlotta@gmail.com</a>
          </p>

          <h2>2. Data Recipients</h2>
          <p>
            External processors (Art. 28 GDPR): hosting (Vercel Inc.), e-mail (Google Workspace),
            IT consultants, Formspree Inc. (contact form) and, upon consent, Google LLC (Google Maps).
          </p>

          <h2>3. Personal Data Processed</h2>
          <ul>
            <li>Technical data (anonymised IP, browser, logs);</li>
            <li>Data voluntarily provided via form or e-mail;</li>
            <li>Essential cookies and, with consent, third-party cookies (Google Maps, Formspree).</li>
          </ul>

          <h2>4. Purposes, Legal Bases &amp; Retention</h2>
          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Legal basis</th>
                <th>Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Purpose">Secure browsing (technical cookies)</td>
                <td data-label="Legal basis">Legitimate interest (Art. 6 §1 f)</td>
                <td data-label="Retention">12 months</td>
              </tr>
              <tr>
                <td data-label="Purpose">Handling enquiries / bookings</td>
                <td data-label="Legal basis">Pre-contractual measures (Art. 6 §1 b)</td>
                <td data-label="Retention">Up to 12 months after closure</td>
              </tr>
              <tr>
                <td data-label="Purpose">Google Maps display</td>
                <td data-label="Legal basis">Consent (Art. 6 §1 a)</td>
                <td data-label="Retention">Until withdrawal / 6 months</td>
              </tr>
            </tbody>
          </table>

          <h2>5. Cookies &amp; Third-party Tools</h2>
          <p>
            The cookie banner blocks all non-essential cookies until consent. Google LLC may transfer
            data to the USA (EU-US DPF or SCC). Formspree sets a session cookie (<code>fs_csrftoken</code>)
            for CSRF protection.
          </p>
          <p>
            We also use <strong>Google Fonts</strong> to display typography; Google may transfer data to
            the United States. See the&nbsp;
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
            &nbsp;for more information.
          </p>

          <h3>Cookie List</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Duration</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Name">NID (and similar)</td>
                <td data-label="Provider">Google Maps</td>
                <td data-label="Purpose">Map preferences / security</td>
                <td data-label="Duration">6-12 months</td>
                <td data-label="Type">Third-party</td>
              </tr>
              <tr>
                <td data-label="Name">fs_csrftoken</td>
                <td data-label="Provider">Formspree</td>
                <td data-label="Purpose">CSRF protection</td>
                <td data-label="Duration">Session</td>
                <td data-label="Type">Essential</td>
              </tr>
            </tbody>
          </table>

          <h3>How to manage cookies</h3>
          <p>
            You can accept or reject cookies upon first visit using the banner. At any time, you can revoke
            or update your preferences by clicking on <strong>“Manage cookies”</strong> in the footer of the website.
          </p>

          <p>Google Fonts are loaded from secure sources (HTTPS) but do not use Subresource Integrity (SRI). No cookies are set by Google Fonts.</p>

          <h2>6. International Transfers</h2>
          <p>
            Data may be transferred to the USA with appropriate safeguards (EU-US DPF or SCC). A copy is
            available on request.
          </p>

          <h2>7. Data Provision</h2>
          <p>
            Technical data are mandatory; third-party cookies are optional. Refusing consent prevents
            Google Maps from loading.
          </p>

          <h2>8. Profiling</h2>
          <p>No automated decision-making or profiling is carried out.</p>

          <h2>9. Security Measures</h2>
          <p>TLS 1.3, encrypted backups, firewall, least-privilege access.</p>

          <h2>10. User Rights</h2>
          <p>
            Access, rectification, erasure, restriction, portability, objection (Art. 15-22 GDPR) and
            complaint to the Italian Supervisory Authority (<a href="https://www.gpdp.it">gpdp.it</a>). Requests:&nbsp;
            <a href="mailto:osteriacaorlotta@gmail.com">osteriacaorlotta@gmail.com</a>.
          </p>

          <p className="last-update">Last update: May 2025</p>
        </section>
      </div>
    </>
  );
}

export default PrivacyPolicy;
