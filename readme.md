# BIGLIETTO TRENO

## Traccia

```
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
 - va applicato uno sconto del 20% per i minorenni
 - va applicato uno sconto del 40% per gli over 65
```

## Svolgimento

- Chiedo all'utente i km che vuole vuole percorrere
- Chiedo all'utente qual è la sua età
- Calcolo il prezzo del viaggio in base alla tariffa

SE l'età dell'utente è minore di 18
 - Applico lo sconto del 20% sul totale
 - Stampo il prezzo

SE INVECE l'età dell'utente è maggiore di 65
 - Applico lo sconto del 40% sul totale
 - Stampo il prezzo

ALTRIMENTI  
- Non applico nessuno sconto
- Stampo il prezzo

 