import goodfellas from './images/goodfellas.jpg';
import lalaland from './images/lalaland.webp';
import mission from './images/mission.jpg';

import lenon from './images/leon.jpg' ;
import mebeforeyou from './images/mebeforeyou.jpg';
import malena from './images/Malena.jpg';
import shapeOfWater from './images/shape of water.jpg' 
import smith from './images/smith.jpg';
import godfather2 from './images/godfather 2.jpg';
import matrix from './images/matrix.jpg';
import grayman from './images/grayman.jpg';
import memory from './images/memory.jpg';
import departed from './images/departed.jpg';
import casino from './images/casino.jpg';
import interstellar from './images/interstellar.jpg'
import martin from './images/martin.jpg';
import gravity from './images/gravity.jpg'
import apollo from './images/apollo.jpg'




const film=[
    {
        id:1,
        title:'the god father',
        category: 'mafia' ,

        image:'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',

        info:'The aging patriarch of an organized crime dynasty in postwar New York City transfers control  empire to his reluctant youngest son.',

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],

        mark: '9.5',
        relase:' March 24, 1972',

    }
,
    {
        id:2,
        title:'good felas',
        category:'mafia',
        image:goodfellas,

        info:'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill  crime syndicate...',

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],

        mark: '9.4',
        relase:' September 19, 1990 ',
    },

    {
        id:3,
        title:'la la land',
        category:'love',
        image:lalaland,
        info:'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],
        mark: '8.1',
        relase:' December 9, 2016 ',

    },

    
    {
        id:4,
        title:'Edge of Tomorrow',
        category:'space',
        image:'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg',

        info:'A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.',

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],

        mark: '7.6',
        relase:' May 28, 2014 ',

    },

    {
        id:5,
        title:'Mission: Impossible - Fallout',
        category:'action',
        image:mission,

        info:'Ethan Hunt and his IMF team, along with some familiar allies,',

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],

        mark: '8',
        relase:' July 27, 2018',

    },

    {
        id:6,
        title:'Léon',
        category:'action',
        image:lenon,
        info:'It stars Jean Reno and Gary Oldman, and features the film debut of Natalie Portman.',

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],
        mark: '8.5',
        relase:' September 14, 1994  ',

    },

    {
        id:7,
        title:'me before you',
        category:'love',
        image:mebeforeyou,

        info:'Me Before You is a 2016 romantic drama film directed by Thea Sharrock in her directorial debut and adapted by English author Jojo Moyes ',

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],

        mark: '7.4',
        relase:' June 3, 2016  ',

    },

    {
        id:8,
        title:'Malèna',
        category:'love',
        image:malena,

        info:'In Sicily, during the Second World War, a teenage boy gets smitten by Malena, a sensual woman living in a small town.',

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],

        mark: '7.4',
        relase:' October 27, 2000 ',

    },

    {
        id:9,
        title:'The Shape Of Water',
        category:'love',
        image:shapeOfWater,

        info:'In Sicily, during the Second World War, a teenage boy gets smitten by Malena, a sensual woman living in a small town.',

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],

        mark: '7.3',
        relase:'December 1, 2017',

    },

    {
        id:10,
        title:'Mr. & Mrs. Smith',
        category:'love',
        image:smith,

        info:'A husband and wife struggle to keep their marriage alive until they realise they are both secretly working as assassins. Now',

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],

        mark: '6.5',
        relase:' June 7, 2005  ',

    },

    {
        id:11,
        title:'godfather 2',
        category:'mafia',
        image:godfather2,

        info:"Michael, Vito Corleone's son, attempts to expand his familys criminal empire. While he strikes a business deal with gangster Hyman Roth",

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],
        mark: '9',
        relase:' December 20, 1974 ',

    },

    {
        id:12,
        title:'Matrix Reloaded',
        category:'action',
        image:matrix,

        info:"At the Oracle's behest, Neo attempts to rescue the Keymaker and realises that to save Zion within 72 hours, he must confront the Architect.",

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],
        mark: '7.2',
        relase:' May 16, 2003 ',

    },

    {
        id:13,
        title:'The Gray Man',
        category:'action',
        image:grayman,

        info:"When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose",

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],
        mark: '6.5',
        relase:' July 22, 2022 ',

    },

    {
        id:14,
        title:'Memory',
        category:'action',
        image:memory,

        info:"Memory is a 2022 American action thriller film directed by Martin Campbell from a screenplay by Dario Scardapane.",

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],
        mark: '5.6',
        relase:' April 29, 2022  ',

    },

    {
        id:15,
        title:'Departed',
        category:'mafia',
        image:departed,

        info:"An undercover agent and a spy constantly try to counter-attack each other in order to save themselve.",

        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],
        mark: '8.5',
        relase:'October 6, 2006'
    },

    {
        id:16,
        title:'Casino ',
        category:'mafia',
        image:casino,
        info:"Ace, a resourceful mafia associate, is asked to run casinos in Las Vegas and rises to power.",
        
        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],
        mark: '8.2',
        relase: 'November 22, 1995'
    },


    {
        id:17,
        title:'Interstellar ',
        category:'space',
        image:interstellar,
        info:"A group of explorers make use of a newly discovered wormhole to surpass the limitations on ... A team of explorers travel through a wormhole in space in an ....",
        
        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],
        mark: '8.6',
        relase: 'October 26, 2014'
    },

    {
        id:18,
        title:'The Martian ',
        category:'space',
        image:martin,
        info:"An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive and ...",
        
        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],
        mark: '8',
        relase: 'Jan 12, 2016'
    },

    {
        id:19,
        title:'Gravity',
        category:'space',
        image:gravity,
        info:"On an outer space mission, Dr Ryan Stone, an engineer, and Matt Kowalski, an astronaut, are hit by high-speed space debris.",
        
        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],
        mark: '7.7',
        relase: 'October 4, 2013'
    },

    {
        id:20,
        title:'Apollo 13',
        category:'space',
        image:apollo,
        info:"Astronauts Lovell, Haise and Swigert of the Apollo 13 moon mission find themselves stranded when their spacecraft gets damaged",
        
        actors: ['Al pachino', 'marlon brando', 'james caan', 'diane keaton'],
        mark: '7.7',
        relase: 'June 30, 1995'
    },
    
]




export default film;



