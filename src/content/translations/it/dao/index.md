---
title: Organizzazioni autonome decentralizzate (DAO)
description: Una panoramica dei DAO su Ethereum
lang: it
template: use-cases
emoji: ":handshake:"
sidebar: true
sidebarDepth: 2
image: ../../../../assets/use-cases/dao-2.png
alt: Rappresentazione di una votazione DAO su proposta.
summaryPoint1: Comunità di proprietà dei membri senza leadership centralizzata.
summaryPoint2: Un modo sicuro per collaborare con sconosciuti su Internet.
summaryPoint3: Un luogo sicuro per impegnare fondi in una causa specifica.
---

## Cosa sono le DAO? {#what-are-daos}

Le DAO sono un modo efficace e sicuro per lavorare con persone che hanno la stessa visione in tutto il mondo.

Pensate a loro come a società native di internet, di proprietà e gestite collettivamente dai membri. Contengono al loro interno un patrimonio a cui nessuno ha l'autorità di accedere senza l'approvazione del gruppo. Le decisioni sono regolate da proposte e votazioni per far sì che tutti nell'organizzazione abbiano voce in capitolo.

Non ci sono CEO che possano autorizzare le spese in base ai propri capricci e non ci sono possibilità che un CFO manipoli i registri. Tutto è trasparente e visibile e le regole relative alle spese sono integrate nella DAO tramite il suo codice.

## Perché abbiamo bisogno delle DAO? {#why-dao}

Per avviare un'organizzazione con altre persone quando sono in ballo finanziamenti e denaro occorre riporre molta fiducia nei propri compagni di avventura. Ma è difficile fidarsi di qualcuno con cui hai interagito solo tramite Internet. Con le DAO non occorre fidarsi di nessun altro nel gruppo, bensì solamente del codice DAO, che è al 100% trasparente e verificabile da chiunque.

Ciò apre molte opportunità di cooperazione e coordinamento a livello globale.

### Un confronto {#dao-comparison}

| DAO                                                                                                                         | Organizzazione tradizionale                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Di solito orizzontale e completamente democratizzata.                                                                       | Di solito gerarchica.                                                                                                         |
| Votazione richiesta dai membri per l'implementazione di eventuali modifiche.                                                | A seconda della struttura, le modifiche possono essere richieste da una sola parte oppure sottoposte a votazione.             |
| Conteggio dei voti e implementazione automatica del risultato senza intermediari.                                           | Se la votazione è consentita, i voti sono conteggiati internamente e l'esito della votazione deve essere gestito manualmente. |
| I servizi offerti vengono gestiti automaticamente in modo decentralizzato (ad esempio distribuzione di fondi filantropici). | Richiede manipolazione umana o automazione controllata centralmente, suscettibile di manipolazione.                           |
| Tutte le attività sono trasparenti e completamente pubbliche.                                                               | L'attività è tipicamente privata e limitata al pubblico.                                                                      |

### Esempi di DAO {#dao-examples}

Per aiutarti a comprendere meglio, ecco alcuni esempi di come potresti utilizzare una DAO:

- Beneficenza – puoi accettare soci e donazioni da chiunque nel mondo e il gruppo può decidere come spendere le donazioni.
- Rete di freelancer – è possibile creare una rete di professionisti che mettono in comune i loro fondi per uffici e abbonamenti software.
- Iniziative e sovvenzioni – potresti creare un fondo di rischio che riunisce capitale di investimento e vota sulle iniziative da finanziare. Il denaro rimborsato potrebbe essere successivamente ridistribuito tra i membri del DAO.

## Aderire a una DAO {#dao-membership}

Ci sono diversi modelli per l'adesione a una DAO. L'adesione può determinare come funziona il voto e altri aspetti chiave della DAO.

### Adesione basata su token {#token-based-membership}

In genere è completamente senza permessi, a seconda del token utilizzato. Questi token di governance possono essere per lo più scambiati senza permessi su uno scambio decentralizzato. Altri devono essere guadagnati fornendo liquidità o altri tipi di "proof of work". In entrambi i casi, la semplice detenzione del token garantisce l'accesso al voto.

_Di solito usato per governare ampi protocolli decentralizzati e/o i token stessi._

#### Un celebre esempio {#token-example}

[MakerDAO](https://makerdao.com) – Il token MKR di MakerDAO è ampiamente disponibile su scambi decentralizzati. Quindi chiunque può comprare potere di voto sul futuro del protocollo Maker.

### Adesione basata su azioni {#share-based-membership}

I DAO basati su azioni sono maggiormente soggetti a permessi, ma comunque abbastanza aperti. Tutti i potenziali membri possono presentare una proposta di adesione al DAO, di solito offrendo un tributo di qualche valore sotto forma di token o di lavoro. Le azioni rappresentano il potere di voto diretto e di proprietà. I membri possono uscire in qualsiasi momento con la loro quota proporzionale del patrimonio.

_In genere usato per organizzazioni più fitte e incentrate sul fattore umano, come enti di beneficenza, collettivi di lavoratori e club di investimento. Può anche governare protocolli e token._

#### Un celebre esempio {#share-example}

[MolochDAO](http://molochdao.com/) – MolochDAO si concentra sul finanziamento di progetti Ethereum. Richiede una proposta di adesione in modo che il gruppo possa valutare se il richiedente ha la competenza e il capitale necessari per formulare giudizi informati sui potenziali contributori. Non si può semplicemente acquistare l'accesso al DAO sul mercato.

## Come funziona la DAO? {#how-daos-work}

La spina dorsale di una DAO è il suo smart contract. Il contratto definisce le regole dell'organizzazione e detiene il patrimonio del gruppo. Una volta che il contratto è attivo su Ethereum, nessuno può modificare le regole se non tramite voto. Se qualcuno cerca di fare qualcosa che non è coperto dalle regole e dalla logica nel codice, fallirà. E dal momento che il patrimonio è definito anche dallo smart contract, nessuno può spendere il denaro senza l'approvazione del gruppo. Ciò significa che le DAO non hanno bisogno di un'autorità centrale. Il gruppo decide collettivamente e i pagamenti sono autorizzati automaticamente quando il voto passa.

Ciò è possibile perché gli smart contract sono a prova di manomissione una volta che sono attivi su Ethereum. Non puoi modificare il codice (le regole della DAO) senza che gli altri lo notino, perché tutto è pubblico.

<DocLink to="/developers/docs/smart-contracts/">
  Maggiori informazioni sugli Smart Contract
</DocLink>

## Ethereum e DAO {#ethereum-and-daos}

Ethereum è la base perfetta per le DAO per una serie di motivi:

- Il consenso di Ethereum è sufficientemente distribuito e affermato affinché le organizzazioni possano fidarsi della rete.
- Il codice dello smart contract non può essere modificato una volta attivato, nemmeno dai suoi proprietari. Ciò permette alla DAO di funzionare secondo le regole con cui è stata programmata.
- Gli smart contract possono inviare/ricevere fondi. In caso contrario occorrerebbe un intermediario fidato per gestire i fondi del gruppo.
- La community di Ethereum si è dimostrata più collaborativa che competitiva, consentendo l'emergere rapido di migliori pratiche e sistemi di supporto.

## Partecipa a / Lancia una DAO {#join-start-a-dao}

### Partecipa a una DAO {#join-a-dao}

- [Community di Ethereum](/community/get-involved/#decentralized-autonomous-organizations-daos)
- [Lista delle DAO di DAOHaus](https://app.daohaus.club/explore)

### Lancia una DAO {#start-a-dao}

- [Evoca una DAO con DAOHaus](https://app.daohaus.club/summon)
- [Crea una DAO alimentata da Aragon](https://aragon.org/product)
- [Avvia una colonia](https://colony.io/)
- [Costruisci una DAO con DAOstack](https://daostack.io/)

## Lettura consigliate {#further-reading}

### Articoli sulla DAO {#dao-articles}

- [Che cos'è una DAO?](https://aragon.org/dao) – [Aragon](https://aragon.org/)
- [House of DAOs](https://wiki.metagame.wtf/docs/great-houses/house-of-daos) – [Metagame](https://wiki.metagame.wtf/)
- [Che cos'è una DAO e a cosa serve?](https://daohaus.substack.com/p/-what-is-a-dao-and-what-is-it-for) – [DAOhaus](https://daohaus.club/)
- [Come avviare una comunità digitale basata su DAO](https://daohaus.substack.com/p/four-and-a-half-steps-to-start-a) – [DAOhaus](https://daohaus.club/)
- [Cos'è una DAO?](https://coinmarketcap.com/alexandria/article/what-is-a-dao) – [Coinmarketcap](https://coinmarketcap.com)

### Video {#videos}

- [Che cos'è una DAO nel mondo delle criptovalute?](https://youtu.be/KHm0uUPqmVE)
