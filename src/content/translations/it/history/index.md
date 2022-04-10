---
title: Storia e diramazioni di Ethereum
description: Storia della blockchain Ethereum che include le principali pietre miliari, versioni e diramazioni.
lang: it
sidebar: true
sidebarDepth: 1
---

# La storia di Ethereum {#the-history-of-ethereum}

Un viaggio nel tempo per illustrare tutte le principali pietre miliari, diramazioni e gli aggiornamenti della blockchain di Ethereum.

<ExpandableCard title="Cosa sono le diramazioni?" contentPreview="Changes to the rules of the Ethereum protocol which often include planned technical upgrades.">

Le diramazioni si verificano quando è necessario apportare aggiornamenti o modifiche tecniche importanti nella rete. Tipicamente derivano da [proposte di miglioramento di Ethereum (EIP)](/eips/) e cambiano le "regole" del protocollo.

Quando sono necessari aggiornamenti in software tradizionali controllati centralmente, l'azienda pubblica una nuova versione per l'utente finale. Le blockchain funzionano diversamente perché non esiste una proprietà centrale. I [client Ethereum](/developers/docs/nodes-and-clients/) devono aggiornare il proprio software per implementare le nuove regole di diramazione. Inoltre i creatori dei blocchi (miner in contesto Proof of Work e validatori in contesto Proof of Stake) e i nodi devono creare blocchi e convalidarli in base alle nuove regole. [Maggiori informazioni sui meccanismi di consenso](/developers/docs/consensus-mechanisms/)

Queste modifiche delle regole potrebbero creare una divisione temporanea nella rete. I nuovi blocchi potrebbero essere creati in base alle nuove regole o a quelle vecchie. Le diramazioni di solito sono concordate in anticipo in modo che i client adottino le modifiche all'unisono e la diramazione legata agli upgrade diventi la catena principale. Tuttavia, in rari casi, disaccordi sulle diramazioni possono causare una divisione permanente della rete, come è successo con la creazione di Ethereum Classic con la [diramazione OAD](#dao-fork).

</ExpandableCard>

Cerchi i prossimi aggiornamenti di protocollo? [Maggiori informazioni sui prossimi aggiornamenti a Ethereum](/upgrades/).

<Divider />

## 2021 {#2021}

### Arrow Glacier {#arrow-glacier}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /><code>Dec-09-2021 07:55:23 PM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} />Numero blocco: <a href="https://etherscan.io/block/13773000">13,773,000</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} />Prezzo ETH: $4111 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20211207064430/https://ethereum.org/en/">ethereum.org on waybackmachine</a>

#### Riepilogo {#arrow-glacier-summary}

L'aggiornamento di rete Arrow Glacier ha ritardato la [bomba di difficoltà](/glossary/#difficulty-bomb) di diversi mesi.?? Questo è l'unico cambiamento introdotto in questo aggiornamento, ed è simile nella sostanza all'aggiornamento [Muir Glacier](#muir-glacier). Modifiche simili sono state effettuate sugli aggiornamenti di rete [Byzantium](#byzantium), [Constantinople](#constantinople) e [London](#london).

- [EF Blog - Annuncio dell'Aggiornamento Arrow Glacier](https://blog.ethereum.org/2021/11/10/arrow-glacier-announcement/)
- [Ethereum Cat Herders - Aggiornamento Ethereum Arrow Glacier](https://medium.com/ethereum-cat-herders/ethereum-arrow-glacier-upgrade-e8d20fa4c002)

<ExpandableCard title="EIP Arrow Glacier" contentPreview="Official improvements included in this upgrade.">

- [EIP-4345](https://eips.ethereum.org/EIPS/eip-4345) – _ritarda la bomba di difficoltà fino a giugno 2022_

</ExpandableCard>

#### <emoji text=":police_car_light:" size={1} mr="0.5rem" />Operatori del nodo {#arrow-glacier-node-operators}

Assicurati di aggiornare il tuo software client all'ultima versione prima del 5 dicembre 2021 per tenere account dei tempi di blocco variabili. Questo contribuirà ad evitare che il tuo client si sincronizzi con una chain pre-fork, con conseguente impossibilità di inviare fondi o verificare correttamente le transazioni.

---

### Altair {#altair}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /><code>Oct-27-2021 10:56:23 AM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} />Epoch number: 74,240<br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} />Prezzo ETH: $4024 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20211026174951/https://ethereum.org/en/">ethereum.org on waybackmachine</a>

#### Riepilogo {#altair-summary}

L'aggiornamento Altair è stato il primo aggiornamento pianificato per la [Beacon Chain](/upgrades/beacon-chain). Ha aggiunto il supporto per le "commissioni sincronizzate", abilitando i client leggeri e portando le penalità per inattività e slashing del validatore ai loro valori pieni.

- [Leggi le specifiche sull'aggiornamento Altair](https://github.com/ethereum/consensus-specs/tree/dev/specs/altair)

#### <emoji text=":tada:" size={1} mr="0.5rem" />Curiosità! {#altair-fun-fact}

Altair è stato il primo importante aggiornamento di rete che ha avuto un tempo di rollout esatto. Tutti gli aggiornamenti precedenti erano basati su un numero di blocco dichiarato su una catena proof of work, dove i tempi dei blocco variavano. La beacon chain non richiede la risoluzione del proof of work e funziona invece su un sistema di epoche basato sul tempo che consiste in 32 "slot" di dodici secondi in cui i validatori possono proporre blocchi. Questo è il motivo per cui sapevamo esattamente quando avremmo raggiunto l'epoca 74.240 e Altair sarebbe diventato operativo!

- [Glossario Beaconcha.In - Slot](https://kb.beaconcha.in/glossary#slots)

---

### London {#london}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Aug-05-2021 12:33:42 PM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Numero blocco: <a href="https://etherscan.io/block/12965000">12,965,000</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: $2621 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20210805124609/https://ethereum.org/en/">ethereum.org on waybackmachine</a>

#### Riepilogo {#london-summary}

L'aggiornamento London ha introdotto l'[EIP-1559](https://eips.ethereum.org/EIPS/eip-1559), che ha riformato il mercato delle commissioni di transazione, oltre a modificare le modalità di gestione dei rimborsi di carburante e la pianificazione dell'[Ice Age](/glossary/#ice-age).

- [Sei uno sviluppatore di dApp? Assicurati di aggiornare le tue librerie e strumentazioni.](https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/ecosystem-readiness.md)
- [Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2021/07/15/london-mainnet-announcement/)
- [Leggi la spiegazione del Cat Herder di Ethereum](https://medium.com/ethereum-cat-herders/london-upgrade-overview-8eccb0041b41)

<ExpandableCard title="EIP Londra" contentPreview="Official improvements included in this upgrade.">

- [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) – _migliora il mercato delle commissioni di transazione_
- [EIP-3198](https://eips.ethereum.org/EIPS/eip-3198) – _restituisce `BASEFEE` da un blocco_
- [EIP-3529](https://eips.ethereum.org/EIPS/eip-3529) - _riduce i rimborsi di gas per le operazioni EVM_
- [EIP-3541](https://eips.ethereum.org/EIPS/eip-3541) - _impedisce la distribuzione di contratti che iniziano per `0xEF`_
- [EIP-3554](https://eips.ethereum.org/EIPS/eip-3554) – _ritarda l'Ice Age fino a dicembre 2021_

</ExpandableCard>

---

### Berlino {#berlin}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Apr-15-2021 10:07:03 AM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Numero blocco: <a href="https://etherscan.io/block/12244000">12,244,000</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: $2454 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20210415093618/https://ethereum.org/">ethereum.org on waybackmachine</a>

#### Riepilogo {#berlin-summary}

L'aggiornamento Berlino ha ottimizzato i costi del carburante per certe azioni dell'EVM e ha aumentato il supporto per vari tipi di transazioni.

- [Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2021/03/08/ethereum-berlin-upgrade-announcement/)
- [Leggi la spiegazione del Cat Herder di Ethereum](https://medium.com/ethereum-cat-herders/the-berlin-upgrade-overview-2f7ad710eb80)

<ExpandableCard title="EIP Berlino" contentPreview="Official improvements included in this upgrade.">

- [EIP-2565](https://eips.ethereum.org/EIPS/eip-2565) – _riduce i costi del carburante di ModExp_
- [EIP-2718](https://eips.ethereum.org/EIPS/eip-2718) – _consente un più facile supporto per più tipi di transazione_
- [EIP-2929](https://eips.ethereum.org/EIPS/eip-2929) – _aumento del costo del carburante per i codici operativi d'accesso di stato_
- [EIP-2930](https://eips.ethereum.org/EIPS/eip-2930) – _aggiunge elenchi d'accesso opzionali_

</ExpandableCard>

<Divider />

## 2020 {#2020}

### Genesi della beacon chain {#beacon-chain-genesis}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Dec-01-2020 12:00:35 PM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Beacon Chain block number: <a href="https://beaconscan.com/slot/1">1</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: $586.23 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20201207184633/https://www.ethereum.org/en/">ethereum.org on waybackmachine</a>

#### Riepilogo {#beacon-chain-genesis-summary}

La [Beacon Chain](/upgrades/beacon-chain/) necessita di 16384 depositi da 32 ETH di staking per poter essere spedita in sicurezza. Questo è successo il 27 novembre, quindi la beacon chain ha iniziato a produrre blocchi il 1 dicembre 2020. Questa è una prima fase importante nel percorso per raggiungere la [visione di Ethereum](/upgrades/vision/).

[Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2020/11/27/eth2-quick-update-no-21/)

<DocLink to="/upgrades/beacon-chain/">
  La beacon chain
</DocLink>

---

### Distribuzione del contratto di deposito in staking {#staking-deposit-contract}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Oct-14-2020 09:22:52 AM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Numero blocco: <a href="https://etherscan.io/block/11052984">11,052,984</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: $379.04 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20201104235727/https://ethereum.org/en/">ethereum.org on waybackmachine</a>

#### Riepilogo {#deposit-contract-summary}

Il contratto di deposito in staking ha introdotto lo [staking](/glossary/#staking) nell'ecosistema di Ethereum. Nonostante fosse un contratto della [Rete principale](/glossary/#mainnet), ha avuto un impatto diretto sulla linea temporale per il lancio della [Beacon Chain](/upgrades/beacon-chain/), un importante [aggiornamento di Ethereum](/upgrades/).

[Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2020/11/04/eth2-quick-update-no-19/)

<DocLink to="/staking/">
  Staking
</DocLink>

---

### Muir Glacier {#muir-glacier}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Jan-02-2020 08:30:49 AM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Numero blocco: <a href="https://etherscan.io/block/9200000">9,200,000</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: $127.18 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20200103093618/https://ethereum.org/">ethereum.org on waybackmachine</a>

#### Riepilogo {#muir-glacier-summary}

La diramazione Muir Glacier ha introdotto un ritardo nella [bomba di difficoltà??](/glossary/#difficulty-bomb). Aumenta la difficoltà del blocco del meccanismo di consenso [Proof of Work](/developers/docs/consensus-mechanisms/pow/), che rischiava di peggiorare l'utilizzabilità di Ethereum, aumentando i tempi d'attesa per l'invio delle transazioni e l'uso delle dapp.

- [Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2019/12/23/ethereum-muir-glacier-upgrade-announcement/)
- [Leggi la spiegazione del Cat Herder di Ethereum](https://medium.com/ethereum-cat-herders/ethereum-muir-glacier-upgrade-89b8cea5a210)

<ExpandableCard title="EIP Muir Glacier" contentPreview="Official improvements included in this fork.">

- [EIP-2384](https://eips.ethereum.org/EIPS/eip-2384) – _ritarda la bomba di difficoltà di altri 4.000.000 blocchi, o ~611 giorni._

</ExpandableCard>

<Divider />

## 2019 {#2019}

### Istanbul {#istanbul}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Dec-08-2019 12:25:09 AM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Numero blocco: <a href="https://etherscan.io/block/9069000">9,069,000</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: $151.06 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20191216101254if*/https://ethereum.org/">ethereum.org on waybackmachine</a>

#### Riepilogo {#istanbul-summary}

La diramazione Instanbul:

- Ha ottimizzato i costi del [carburante](/glossary/#gas) di certe azioni nell'[EVM](/developers/docs/ethereum-stack/#ethereum-virtual-machine).
- Ha migliorato la resilienza agli attacchi denial-of-service.
- Ha reso più performanti le soluzioni di [scalabilità del Livello 2](/developers/docs/scaling/layer-2-rollups/) basate su SNARK e STARK.
- Ha reso possibile l'interazione tra Ethereum e Zcash.
- Ha consentito ai contratti di introdurre funzioni più creative.

[Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2019/11/20/ethereum-istanbul-upgrade-announcement/)

<ExpandableCard title="EIP Istanbul" contentPreview="Official improvements included in this fork.">

- [EIP-152](https://eips.ethereum.org/EIPS/eip-152) – _consente a Ethereum di operare con valute che preservano la privacy, come Zcash._
- [EIP-1108](https://eips.ethereum.org/EIPS/eip-1108) – _crittografia più economica per migliorare i costi del [gas](/glossary/#gas)._
- [EIP-1344](https://eips.ethereum.org/EIPS/eip-1344) – _protegge Ethereum dagli attacchi di riproduzione aggiungendo "CHAINID" [opcode](/developers/docs/ethereum-stack/#ethereum-virtual-machine)._
- [EIP-1884](https://eips.ethereum.org/EIPS/eip-1884) – _ottimizzazione dei prezzi del gas dei codici operativi in base al consumo._
- [EIP-2028](https://eips.ethereum.org/EIPS/eip-2028) – _riduce il costo di CallData per consentire più dati nei blocchi, il che è positivo per la [scalabilità del Livello 2](/developers/docs/scaling/layer-2-rollups/)._
- [EIP-2200](https://eips.ethereum.org/EIPS/eip-2200) – _altre alterazioni del prezzo del carburante dei codici operativi._

</ExpandableCard>

---

### Constantinople {#constantinople}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Feb-28-2019 07:52:04 PM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Numero blocco: <a href="https://etherscan.io/block/7280000">7,280,000</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: $136.29 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20190415163751/https://www.ethereum.org/">ethereum.org on waybackmachine</a>

#### Riepilogo {#constantinople-summary}

La diramazione Costantinopoli:

- Ha assicurato che la blockchain non si bloccasse prima dell'[implementazione del Proof of Stake](#beacon-chain-genesis).
- Ha ottimizzato i costi del [carburante](/glossary/#gas) di certe azioni nell'[EVM](/developers/docs/ethereum-stack/#ethereum-virtual-machine).
- Ha aggiunto la capacità di interagire con gli indirizzi non ancora creati.

[Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2019/02/22/ethereum-constantinople-st-petersburg-upgrade-announcement/)

<ExpandableCard title="EIP Constantinople" contentPreview="Official improvements included in this fork.">

- [EIP-145](https://eips.ethereum.org/EIPS/eip-145) – _ottimizza il costo di certe azioni sulla catena_
- [EIP-1014](https://eips.ethereum.org/EIPS/eip-1014) – _consente di interagire con gli indirizzi che devono ancora essere creati._
- [EIP-1052](https://eips.ethereum.org/EIPS/eip-1052) – _ottimizza il costo di certe azioni sulla catena._
- [EIP-1234](https://eips.ethereum.org/EIPS/eip-1234) – _fa in modo che la blockchain non si blocchi prima del Proof of Stake._

</ExpandableCard>

<Divider />

## 2017 {#2017}

### Byzantium {#byzantium}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Oct-16-2017 05:22:11 AM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Numero blocco: <a href="https://etherscan.io/block/4370000">4,370,000</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: $334.23 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20171017201143/https://www.ethereum.org/">ethereum.org on waybackmachine</a>

#### Riepilogo {#byzantium-summary}

La diramazione Byzantium:

- Ha ridotto le ricompense del [mining](/developers/docs/consensus-mechanisms/pow/mining/) dei blocchi da 5 a 3 ETH.
- Ha ritardato di un anno la [bomba di difficoltà](/glossary/#difficulty-bomb).
- Ha aggiunto la capacità di effettuare chiamate che non modificano lo stato ad altri contratti.
- Ha aggiunto certi metodi crittografici per consentire la [scalabilità del livello 2](/developers/docs/scaling/layer-2-rollups/).

[Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2017/10/12/byzantium-hf-announcement/)

<ExpandableCard title="EIP Byzantium" contentPreview="Official improvements included in this fork.">

- [EIP-140](https://eips.ethereum.org/EIPS/eip-140) – _aggiunge il codice operativo "REVERT"._
- [EIP-658](https://eips.ethereum.org/EIPS/eip-658) – _campo di stato aggiunto alle ricevute di transazione per indicare successo o fallimento._
- [EIP-196](https://eips.ethereum.org/EIPS/eip-196) – _aggiunge la curva ellittica e la moltiplicazione scalare per consentire gli [ZK-Snarks](/developers/docs/scaling/layer-2-rollups/#zk-rollups)._
- [EIP-197](https://eips.ethereum.org/EIPS/eip-197) – _aggiunge la curva ellittica e la moltiplicazione per consentire gli [ZK-Snarks](/developers/docs/scaling/layer-2-rollups/#zk-rollups)._
- [EIP-198](https://eips.ethereum.org/EIPS/eip-198) – _consente la verifica della firma RSA._
- [EIP-211](https://eips.ethereum.org/EIPS/eip-211) – _aggiunge supporto per i valori di restituzione di lunghezza variabile._
- [EIP-214](https://eips.ethereum.org/EIPS/eip-214) – _aggiunge il codice operativo "STATICCALL", consentendo chiamate che non cambiano lo stato ad altri contratti._
- [EIP-100](https://eips.ethereum.org/EIPS/eip-100) – _cambia la formula di regolazione della difficoltà._
- [EIP-649](https://eips.ethereum.org/EIPS/eip-649) – ritarda la [bomba di difficoltà](/glossary/#difficulty-bomb) di 1 anno e riduce la ricompensa del blocco da 5 a 3 ETH.\_

</ExpandableCard>

<Divider />

## 2016 {#2016}

### Spurious Dragon {#spurious-dragon}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Nov-22-2016 04:15:44 PM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Numero blocco: <a href="https://etherscan.io/block/2675000">2,675,000</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: $9.84 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20161127154654/https://www.ethereum.org/">ethereum.org on waybackmachine</a>

#### Riepilogo {#spurious-dragon-summary}

La diramazione Spurious Dragon è stata la seconda risposta agli attacchi denial of service (DoS) sulla rete (settembre/ottobre 2016) e ha reso possibile, tra l'altro:

- ottimizzazione dei prezzi dell'opcode per impedire attacchi futuri alla rete.
- abilitazione di "debloat" dello stato della blockchain.
- aggiunta della protezione contro gli attacchi replay.

[Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2016/11/18/hard-fork-no-4-spurious-dragon/)

<ExpandableCard title="EIP Spurious Dragon" contentPreview="Official improvements included in this fork.">

- [EIP-155](https://eips.ethereum.org/EIPS/eip-155) – _impedisce che le transazioni in una catena di Ethereum vengano ritrasmesse su una catena alternativa, per esempio una transazione della rete di prova replicata sulla catena principale di Ethereum._
- [EIP-160](https://eips.ethereum.org/EIPS/eip-160) – _regola i prezzi del codice operativo "EXP", rendendo più difficile rallentare la rete tramite operazioni di contratto dispendiose a livello di calcolo._
- [EIP-161](https://eips.ethereum.org/EIPS/eip-161) – _consente la rimozione dei conti vuoti aggiunti tramite attacchi DOS._
- [EIP-170](https://eips.ethereum.org/EIPS/eip-170) – _modifica la dimensione massima del codice che un contratto sulla blockchain può avere: fino a 24.576 byte._

</ExpandableCard>

---

### Tangerine Whistle {#tangerine-whistle}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Oct-18-2016 01:19:31 PM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Numero blocco: <a href="https://etherscan.io/block/2463000">2,463,000</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: $12.50 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20161030043727/https://www.ethereum.org/">ethereum.org on waybackmachine</a>

#### Riepilogo {#tangerine-whistle-summary}

La diramazione Tangerine Whistle è stata la prima risposta agli attacchi denial of service (DoS) sulla rete (settembre/ottobre 2016) e ha reso possibile tra l'altro:

- gestire problemi urgenti di salute della rete relativi ai codici delle operazioni con prezzi troppo bassi.

[Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2016/10/18/faq-upcoming-ethereum-hard-fork/)

<ExpandableCard title="EIP Tangerine Whistle" contentPreview="Official improvements included in this fork.">

- [EIP-150](https://eips.ethereum.org/EIPS/eip-150) – _aumenta i costi del carburante dei codici operativi utilizzabili negli attacchi di spam._
- [EIP-158](https://eips.ethereum.org/EIPS/eip-158) – _riduce la dimensione dello stato rimuovendo un gran numero di account vuoti messi nello stato a costo molto basso a causa di bug nelle versioni precedenti del protocollo Ethereum._

</ExpandableCard>

---

### Diramazione OAD {#dao-fork}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Jul-20-2016 01:20:40 PM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Numero blocco: <a href="https://etherscan.io/block/1920000">1,920,000</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: $12.54 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20160803215306/https://ethereum.org/">ethereum.org on waybackmachine</a>

#### Riepilogo {#dao-fork-summary}

La diramazione OAD era una risposta all'[attacco OAD del 2016](https://www.coindesk.com/markets/2016/06/25/understanding-the-dao-attack/) in cui da un [OAD](/glossary/#dao) contratto non sicuro sono stati sottratti oltre 3,6 milioni di ETH in un attacco. La diramazione ha spostato i fondi dal contratto difettoso a un [nuovo contratto](https://etherscan.io/address/0xbf4ed7b27f1d666546e30d74d50d173d20bca754) con una sola funzione: il prelievo. Chi aveva perso fondi potette prelevare 1 ETH per ogni 100 token OAD nei propri portafogli.

Questa iniziativa è stata votato dalla community di Ethereum. Ogni titolare di ETH ha potuto votare tramite una transazione su [una piattaforma di voto](http://v1.carbonvote.com/). La decisione di creare la diramazione ha ottenuto oltre l'85% dei voti.

Alcuni miner si sono rifiutati di creare la diramazione perché l'incidente OAD non era un difetto nel protocollo. Si sono riuniti per creare [Ethereum Classic](https://ethereumclassic.org/).

[Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2016/07/20/hard-fork-completed/)

---

### Homestead {#homestead}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Mar-14-2016 06:49:53 PM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Numero blocco: <a href="https://etherscan.io/block/1150000">1,150,000</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: $12.50 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20160313203843/https://www.ethereum.org/">ethereum.org on waybackmachine</a>

#### Riepilogo {#homestead-summary}

La diramazione Homestead guardava al futuro. Comprendeva diverse modifiche al protocollo e una modifica della rete che ha dato a Ethereum la possibilità di eseguire ulteriori aggiornamenti della rete.

[Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2016/02/29/homestead-release/)

<ExpandableCard title="EIP Homestead" contentPreview="Official improvements included in this fork.">

- [EIP-2](https://eips.ethereum.org/EIPS/eip-2) – _apporta modifiche al processo di creazione dei contratti._
- [EIP-7](https://eips.ethereum.org/EIPS/eip-7) – _aggiunge il nuovo opcode: "DELEGATECALL"_
- [EIP-8](https://eips.ethereum.org/EIPS/eip-8) – _introduce i requisiti di compatibilità devp2p_

</ExpandableCard>

<Divider />

## 2015 {#2015}

### Frontier thawing {#frontier-thawing}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Sep-07-2015 09:33:09 PM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Numero blocco: <a href="https://etherscan.io/block/200000">200,000</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: $1.24 USD<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20150912193811/https://www.ethereum.org/">ethereum.org on waybackmachine</a>

#### Riepilogo {#frontier-thawing-summary}

La diramazione frontier thawing ha introdotto il limite di 5000 unità di [carburante](/glossary/#gas) per [blocco](/glossary/#block) e ha impostato il prezzo predefinito del carburante a 51 [gwei](/glossary/#gwei). In questo sono state rese possibili le transazioni. Le transazioni richiedono 21.000 unità di carburante.

[Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2015/08/04/the-thawing-frontier/)

---

### Frontier {#frontier}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <code>Jul-30-2015 03:26:13 PM +UTC</code><br /> <Emoji text=":bricks:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Numero blocco: <a href="https://etherscan.io/block/0">0</a><br /> <Emoji text=":money_bag:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> Prezzo ETH: N/A<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20150802035735/https://www.ethereum.org/">ethereum.org on waybackmachine</a>

#### Riepilogo {#frontier-summary}

Frontier era un'implementazione attiva ma a livello base del progetto di Ethereum. È seguita poi la positiva fase di test Olympic. Era destinata agli utenti tecnici, in particolare agli sviluppatori. I [blocchi](/glossary/#block) avevano un limite di 5.000 unità di [carburante](/glossary/#gas). Questo periodo di "disgelo" (dall'inglese thawing) ha consentito ai miner di iniziare la propria operatività e ai primi utilizzatori di installare i client senza fretta.

[Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2015/07/22/frontier-is-coming-what-to-expect-and-how-to-prepare/)

<Divider />

## 2014 {#2014}

### Vendita di ether {#ether-sale}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> 22 luglio - 02 settembre 2014<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20140804235628/https://www.ethereum.org/">ethereum.org on waybackmachine</a>

Ether è stato ufficialmente messo in vendita per 42 giorni. Era acquistabile con BTC.

[Leggi l'annuncio della Ethereum Foundation](https://blog.ethereum.org/2014/07/22/launching-the-ether-sale/)

---

### Rilascio dello Yellowpaper {#yellowpaper}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> 01 aprile 2014<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20140509173418/https://www.ethereum.org/">ethereum.org on waybackmachine</a>

Lo Yellow Paper, redatto dal dott. Gavin Wood, è una definizione tecnica del protocollo Ethereum.

[Leggi il documento](https://github.com/ethereum/yellowpaper)

<Divider />

## 2013 {#2013}

### Rilascio del Whitepaper {#whitepaper}

<emoji text=":calendar:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> 27 novembre 2013<br /> <Emoji text=":desktop_computer:" size={1} mr={"0.5rem"} mb={"0.5rem"} /> <a href="https://web.archive.org/web/20140208030136/http://www.ethereum.org/">ethereum.org on waybackmachine</a>

Documento introduttivo, pubblicato nel 2013 da Vitalik Buterin, il fondatore di Ethereum, prima del lancio del progetto nel 2015.

<DocLink to="/whitepaper/">
  Whitepaper
</DocLink>
