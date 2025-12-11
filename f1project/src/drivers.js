import verstappen from './assets/drivers/verstappen.jpg'
import tsunoda from './assets/drivers/tsunoda.jpg'
import norris from './assets/drivers/norris.jpg'
import piastri from './assets/drivers/piastri.jpg'
import russell from './assets/drivers/russell.jpg'
import antonelli from './assets/drivers/antonelli.jpg'
import albon from './assets/drivers/albon.jpg'
import sainz from './assets/drivers/sainz.jpg'
import bortoleto from './assets/drivers/bortoleto.jpg'
import hulkenberg from './assets/drivers/hulkenberg.jpg'
import ocon from './assets/drivers/ocon.jpg'
import bearman from './assets/drivers/bearman.jpg'
import gasly from './assets/drivers/gasly.jpg'
import colapinto from './assets/drivers/colapinto.jpg'
import leclerc from './assets/drivers/leclerc.jpg'
import hamilton from './assets/drivers/hamilton.jpg'
import alonso from './assets/drivers/alonso.jpg'
import stroll from './assets/drivers/stroll.jpg'
import hadjar from './assets/drivers/hadjar.jpg'
import lawson from './assets/drivers/lawson.jpg'

// DRIVERS_DATA egy objektum, amiben tömbök vannak ("redbull", "mclaren"), amiben  2db objektum van (amiben felsoroljuk az adatokat {között})
export const DRIVERS_DATA = {
 "redbull": [{
    name: 'Max Verstappen',
    image: verstappen,
    car_number: 1,
    entries: 229,
    carrer_points: 3344.5,
    podiums: 123,
    wins: 68,
    fact: 'He achieved 10 consecutive race wins (Longest winning streak) from Miami to Monza in 2023'
  },
  {
    name: 'Yuki Tsunoda',
    image: tsunoda,
    car_number: 22,
    entries: 110,
    carrer_points: 119,
    podiums: 0,
    wins: 0,
    fact: 'The youngest japanese F1 driver'
  }],
  "mclaren" : [{
    name: 'Lando Norris',
    image: norris,
    car_number: 4,
    entries: 148,
    carrer_points: 1364,
    podiums: 42,
    wins: 10,
    fact: 'Most F1 podiums without a race win'
  },
  {
    name: 'Oscar Piastri',
    image: piastri,
    car_number: 81,
    entries: 66,
    carrer_points: 745,
    podiums: 24,
    wins: 9,
    fact: 'Before joining Formula 1, Piastri won three consecutive championship titles — Formula Renault Eurocup (2019), FIA Formula 3 (2020), and FIA Formula 2 (2021)'
  }],
  "mercedes" :  [{
    name: 'George Russell',
    image: russell,
    car_number: 63,
    entries: 148,
    carrer_points: 972,
    podiums: 23,
    wins: 5,
    fact: 'Achieved a stunning P2 finish at Spa-Francorchamps with Williams in 2021 after an incredible qualifying performance in the wet — earning the team’s first podium in four years.'
  },
  {
    name: 'Kimi Antonelli',
    image: antonelli,
    car_number: 12,
    entries: 20,
    carrer_points: 97,
    podiums: 1,
    wins: 0,
    fact: 'Skipped the FIA Formula 3 level entirely, moving straight from junior single-seaters into FIA Formula 2, showing the team’s belief in his raw talent.'
  }],
  "ferrari" : [{
    name: 'Charles Leclerc',
    image: leclerc,
    car_number: 16,
    entries: 169,
    carrer_points: 1640,
    podiums: 50,
    wins: 8,
    fact: 'Leclerc made history at the 2019 Belgian Grand Prix, becoming the first driver from Monaco ever to win a Formula 1 race.'
  },
  {
    name: 'Lewis Hamilton',
    image: hamilton,
    car_number: 44,
    entries: 376,
    carrer_points: 5008.5,
    podiums: 202,
    wins: 105,
    fact: 'Hamilton is joint record holder with Michael Schumacher, having won seven world titles (2008, 2014, 2015, 2017–2020).'
  }],
  "williams" : [{
    name: 'Alexander Albon',
    image: albon,
    car_number: 23,
    entries: 126,
    carrer_points: 313,
    podiums: 2,
    wins: 0,
    fact: 'He achieved his first podium at the 2020 Tuscan Grand Prix, finishing P3, and became the first Thai driver ever to reach the podium in Formula 1.'
  },
  {
    name: 'Carlos Sainz Jr.',
    image: sainz,
    car_number: 55,
    entries: 229,
    carrer_points: 1310.5,
    podiums: 28,
    wins: 4,
    fact: 'Scored podiums with three different F1 teams (McLaren, Ferrari, and Renault.)'
  }],
  "aston" : [{
    name: 'Fernando Alonso',
    image: alonso,
    car_number: 14,
    entries: 424,
    carrer_points: 2374,
    podiums: 106,
    wins: 32,
    fact: 'Youngest double World Champion (at the time: 2005, 2006)'
  },
  {
    name: 'Lance Stroll',
    image: stroll,
    car_number: 18,
    entries: 189,
    carrer_points: 324,
    podiums: 3,
    wins: 0,
    fact: 'Second youngest podium finishers in F1 history (P3 at the 2017 Azerbaijan Grand Prix)'
  }],
  "visa" : [{
    name: 'Isack Hadjar',
    image: hadjar,
    car_number: 6,
    entries: 20,
    carrer_points: 39,
    podiums: 1,
    wins: 0,
    fact: 'At the 2025 Dutch Grand Prix (Zandvoort), he claimed his first F1 podium (3rd place), becoming one of the standout rookies of the season.'
  },
  {
    name: 'Liam Lawson',
    image: lawson,
    car_number: 30,
    entries: 31,
    carrer_points: 36,
    podiums: 0,
    wins: 0,
    fact: 'Recorded his highest qualifying grid position of 3rd and highest race finish of 5th by early 2025'
  }],
  "sauber" : 
  [{
    name: 'Nico Hulkenberg',
    image: hulkenberg,
    car_number: 27,
    entries: 250,
    carrer_points: 612,
    podiums: 1,
    wins: 0,
    fact: 'Holds the record for most F1 race starts without a podium over 179 Grand Prix starts (ended at the 2025 British Grand Prix)'
  },
  {
    name: 'Gabriel Bortoleto',
    image: bortoleto,
    car_number: 5,
    entries: 20,
    carrer_points: 19,
    podiums: 0,
    wins: 0,
    fact: 'Joined the McLaren Driver Development Programme and is managed by two‑time champion Fernando Alonso'
  }],
  "haas" : [{
    name: 'Oliver Bearman',
    image: bearman,
    car_number: 87,
    entries: 23,
    carrer_points: 39,
    podiums: 0,
    wins: 0,
    fact: 'Became the youngest British driver to score points on his Formula 1 debut, finishing 7th for Ferrari at the 2024 Saudi Arabian Grand Prix.'
  },
  {
    name: 'Esteban Ocon',
    image: ocon,
    car_number: 31,
    entries: 176,
    carrer_points: 475,
    podiums: 4,
    wins: 1,
    fact: 'Ocon claimed his first F1 victory at the 2021 Hungarian GP with Alpine, securing a historic win after a dramatic race with multiple lead changes.'
  }],
  "alpine" : [{
    name: 'Pierre Gasly',
    image: gasly,
    car_number: 10,
    entries: 174,
    carrer_points: 456,
    podiums: 5,
    wins: 1,
    fact: 'Maiden F1 win — 2020 Italian Grand Prix (Monza) — Gasly took a dramatic first victory for AlphaTauri'
  },
  {
    name: 'Franco Colapinto',
    image: colapinto,
    car_number: 43,
    entries: 23,
    carrer_points: 5,
    podiums: 0,
    wins: 0,
    fact: 'Joined the Williams Driver Academy in 2023 and progressed from junior formulae to an F1 race seat within about one year.'
  }]
};
