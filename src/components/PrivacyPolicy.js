import React from 'react';
import { Helmet } from 'react-helmet-async';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        {/* Titolo e descrizione per SEO, se vuoi */}
        <title>Privacy Policy - Osteria Caorlotta</title>
        <meta name="description" content="Privacy Policy di Osteria Caorlotta" />

        {/* Preconnect per Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload dei fogli di stile dei font */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />

        {/* Fallback nel caso JS sia disabilitato */}
        <noscript>
          {`
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap">
          `}
        </noscript>
      </Helmet>

      <div className="privacy-policy">
        <h1>Politica sulla Privacy / Privacy Policy</h1>

        {/* Titolare del trattamento */}
        <h2>1. Titolare del trattamento / Data Controller</h2>
        <p>
          Titolare del trattamento: Osteria Caorlotta, Lungarno Amerigo Vespucci, 34r - 50123 Firenze, email: info@osteria.com. <br />
          Data Controller: Osteria Caorlotta, Lungarno Amerigo Vespucci, 34r - 50123 Florence, email: info@osteria.com.
        </p>

        {/* Introduzione */}
        <h2>2. Introduzione / Introduction</h2>
        <p>
          Questo sito utilizza cookie per migliorare l'esperienza utente. Qui trovi i dettagli su come gestiamo i tuoi dati personali. <br />
          This website uses cookies to enhance user experience. Here you will find details on how we handle your personal data.
        </p>

        {/* Cookie */}
        <h2>3. Cookie / Cookies</h2>
        <p>
          Utilizziamo cookie essenziali per il funzionamento del sito, nonché cookie di terze parti (Google Maps e, se previsti, quelli utilizzati dal servizio di contatto Formspree) che richiedono il tuo consenso. Prima del consenso, tali servizi non saranno attivi (la mappa non verrà visualizzata e il modulo di prenotazione non potrà essere inviato). <br />
          We use essential cookies for the website’s functionality, as well as third-party cookies (Google Maps and, if applicable, those used by the Formspree contact service) that require your consent. Before consent is given, these services will remain inactive (the map will not be displayed, and the reservation form cannot be submitted).
        </p>

        <h3>3.1 Dettaglio dei Cookie Utilizzati / Detailed List of Cookies</h3>
        <p>
          Di seguito sono riportati i cookie utilizzati dal sito. Poiché le integrazioni di terze parti (in particolare Google Maps) potrebbero cambiare nel tempo e variare in base allo stato di login dell'utente a Google, la lista potrebbe essere periodicamente aggiornata. <br />
          Below is a list of the cookies used by the website. Since third-party integrations (especially Google Maps) may change over time and vary depending on the user's Google login state, this list may be periodically updated.
        </p>
        <table>
          <thead>
            <tr>
              <th>Nome Cookie / Cookie Name</th>
              <th>Fornitore / Provider</th>
              <th>Finalità / Purpose</th>
              <th>Durata / Duration</th>
              <th>Tipologia / Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NID (e possibili altri cookie come SID, HSID, SSID, APISID, SAPISID se l’utente è loggato a Google)</td>
              <td>Google Maps (Google LLC)</td>
              <td>
                Utilizzati per memorizzare preferenze utente (es. zoom), garantire la sicurezza, 
                e se l'utente è loggato con un account Google, associare l’attività di navigazione 
                all’account stesso. Le tipologie e il numero di cookie possono variare a seconda 
                dello stato di login dell’utente. Per maggiori dettagli, consulta la 
                <a href="https://policies.google.com/privacy">Privacy Policy di Google</a> e la 
                <a href="https://policies.google.com/technologies/cookies">Cookie Policy di Google</a>.<br />
                Used to store user preferences (e.g., zoom), ensure security, and if the user is logged in 
                to a Google account, associate browsing activity with that account. The types and number 
                of cookies may vary depending on the user’s login state. For more details, see
                <a href="https://policies.google.com/privacy">Google’s Privacy Policy</a> and 
                <a href="https://policies.google.com/technologies/cookies">Google’s Cookie Policy</a>.
              </td>
              <td>Da alcuni mesi a oltre un anno, variabile in base alle politiche di Google. <br /> From a few months to over a year, variable according to Google’s policies.</td>
              <td>Cookie di terze parti / tecnico-funzionale <br /> Third-party / technical-functional cookie</td>
            </tr>
            <tr>
              <td>Cookie di sessione del form / Form session cookie</td>
              <td>Formspree (Formspree Inc.)</td>
              <td>
                Necessario per la funzionalità del modulo di contatto/prenotazione, prevenzione dello spam 
                e corretto inoltro dei dati. <br />
                Necessary for the functionality of the contact/reservation form, spam prevention, and correct data submission.
              </td>
              <td>Sessione browser / Browser session</td>
              <td>Cookie essenziale / Essential cookie</td>
            </tr>
          </tbody>
        </table>
        <p>
          Nota: I nomi, la durata e la tipologia dei cookie di terze parti (come Google Maps) possono variare nel tempo. 
          È possibile verificare i cookie effettivi tramite le impostazioni del browser o strumenti di sviluppo. 
          In caso di aggiornamenti, questa tabella sarà modificata di conseguenza. <br />
          Note: The names, duration, and types of third-party cookies (such as those from Google Maps) may change over time. 
          You can check the actual cookies via your browser settings or developer tools. If there are updates, this table will be amended accordingly.
        </p>

        <h3>3.2 Revoca o Modifica del Consenso / Withdrawing or Changing Consent</h3>
        <p>
          In qualsiasi momento, l'utente può revocare o modificare il proprio consenso all'uso dei cookie non essenziali. <br />
          At any time, users can withdraw or modify their consent to the use of non-essential cookies.
        </p>
        <ul>
          <li>
            <strong>Pannello Preferenze Cookie:</strong> Se disponibile, puoi utilizzare un link o un pulsante sul sito (ad es. nel footer) per riaprire il banner dei cookie e modificare le tue scelte. <br />
            <strong>Cookie Preferences Panel:</strong> If available, you may use a link or a button on the site (e.g., in the footer) to reopen the cookie banner and change your choices.
          </li>
          <li>
            <strong>Impostazioni del Browser:</strong> È possibile eliminare o bloccare i cookie tramite le impostazioni del browser. Consultare la sezione "Aiuto" del proprio browser per maggiori informazioni. <br />
            <strong>Browser Settings:</strong> You can delete or block cookies through your browser settings. Refer to your browser’s “Help” section for more information.
          </li>
        </ul>
        <p>
          Dopo la revoca del consenso, i servizi non essenziali (come Google Maps) non saranno più disponibili finché non verrà nuovamente fornito il consenso. <br />
          After withdrawing consent, non-essential services (such as Google Maps) will no longer be available until consent is provided again.
        </p>

        {/* Google Maps */}
        <h2>4. Google Maps</h2>
        <p>
          Questo sito utilizza Google Maps per mostrare la posizione del ristorante. Google potrebbe raccogliere dati come l'indirizzo IP e installare cookie di terze parti. La mappa viene mostrata solo dopo l'accettazione dei cookie non essenziali da parte dell'utente. In caso di rifiuto, la mappa non verrà visualizzata. <br />
          This website uses Google Maps to show the restaurant’s location. Google may collect data such as your IP address and set third-party cookies. The map is displayed only after the user accepts non-essential cookies. If you refuse, the map will not be displayed.
        </p>

        {/* Finalità del trattamento */}
        <h2>5. Finalità del trattamento / Purpose of Data Processing</h2>
        <p>
          I dati personali raccolti vengono utilizzati per gestire prenotazioni, rispondere a richieste di contatto e mostrare la posizione tramite Google Maps. <br />
          Personal data collected is used to manage reservations, respond to contact requests, and display the location via Google Maps.
        </p>

        {/* Base giuridica del trattamento */}
        <h2>6. Base giuridica del trattamento / Legal Basis for Data Processing</h2>
        <p>
          La base giuridica per il trattamento dei dati personali è: <br />
          - Il consenso dell’utente per l’uso di cookie non essenziali (es. Google Maps) <br />
          - L’esecuzione di un contratto per le prenotazioni (dati forniti nel modulo di contatto/prenotazione) <br />
          - L’interesse legittimo del Titolare per il funzionamento del sito (cookie essenziali)
        </p>
        <p>
          The legal basis for processing personal data is: <br />
          - User consent for non-essential cookies (e.g., Google Maps) <br />
          - Contract execution for reservations (data provided in the contact/reservation form) <br />
          - The Controller’s legitimate interest for website functionality (essential cookies)
        </p>

        {/* Conservazione dei dati */}
        <h2>7. Conservazione dei dati / Data Retention</h2>
        <p>
          I dati personali saranno conservati per il tempo strettamente necessario a fornire il servizio richiesto. I dati relativi alle prenotazioni saranno eliminati entro 30 giorni dal completamento del servizio. <br />
          Personal data will be retained for the time strictly necessary to provide the requested service. Reservation data will be deleted within 30 days after service completion.
        </p>

        {/* Condivisione dei dati */}
        <h2>8. Condivisione dei dati / Data Sharing</h2>
        <p>
          I dati personali potrebbero essere condivisi con: <br />
          - Google LLC, per l'uso di Google Maps, solo previo consenso dell’utente. <br />
          - Formspree Inc., per la gestione del modulo di contatto/prenotazione.
        </p>
        <p>
          Personal data may be shared with: <br />
          - Google LLC for Google Maps usage, subject to user consent. <br />
          - Formspree Inc. for managing the contact/reservation form.
        </p>

        {/* Diritti degli utenti */}
        <h2>9. Diritti degli utenti / User Rights</h2>
        <p>
          Gli utenti hanno il diritto di accedere, correggere, eliminare i propri dati, opporsi al trattamento e richiedere la limitazione del trattamento. Possono anche presentare un reclamo al Garante per la Protezione dei Dati Personali. <br />
          Users have the right to access, correct, delete their data, object to processing, and request the restriction of processing. They can also file a complaint with the Italian Data Protection Authority.
        </p>

        {/* Modifiche alla Privacy Policy */}
        <h2>10. Modifiche alla Privacy Policy / Changes to the Privacy Policy</h2>
        <p>
          Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. Gli utenti saranno informati tramite il sito web. <br />
          We reserve the right to modify this Privacy Policy at any time. Users will be informed through the website.
        </p>

        {/* Riferimenti Normativi */}
        <h2>11. Riferimenti Normativi / Regulatory References</h2>
        <p>
          Questa Privacy Policy è redatta nel rispetto delle normative vigenti, tra cui: <br />
          - Regolamento (UE) 2016/679 (GDPR) <br />
          - Codice in materia di protezione dei dati personali (D.lgs. 196/2003), come modificato dal D.lgs. 101/2018 <br />
          - Linee guida del Garante per la Protezione dei Dati Personali in materia di cookie e altri strumenti di tracciamento
        </p>
        <p>
          This Privacy Policy is drafted in accordance with the current legislation, including: <br />
          - Regulation (EU) 2016/679 (GDPR) <br />
          - Italian Data Protection Code (Legislative Decree no. 196/2003), as amended by Legislative Decree no. 101/2018 <br />
          - Guidelines of the Italian Data Protection Authority regarding cookies and other tracking tools
        </p>

        {/* Contatti */}
        <h2>12. Contatti / Contact Us</h2>
        <p>
          Per domande, contattaci a info@osteria.com. <br />
          For any questions, contact us at info@osteria.com.
        </p>
      </div>
    </>
  );
}

export default PrivacyPolicy;
