const express = require('express');
const app = express();
const cors = require('cors')

app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.use(cors());
app.use('/images', express.static('images'));

app.locals.title = 'gigDown Server';
app.locals.usblibrary = [
    { id: 1, title: 'Rewind', artist: 'Kelela', album: 'Hallucinogen', img: './images/Kelela.png', genre:'R&B', bpm: '152 BPM', key: 'F♭', duration: '3:35 min' },
    { id: 2, title: 'Eternity', artist: 'Mondo Grosso', album: 'Self-Titled', img: './images/Mondo.png', genre:'Dance', bpm: '120 BPM', key: 'A#', duration: '4:24 min' },
    { id: 3, title: 'To Dawn', artist: 'Tetsuya Numora', album: 'FFX OST', img: './images/Tetsuya.png', genre:'Electronic', bpm: '90 BPM', key: 'G♭', duration: '2:54 min' },
    { id: 4, title: 'Belive Me', artist: 'Erika De Casier', album: 'Still', img: './images/Erika.png', genre:'R&B', bpm: '90 BPM', key: 'D', duration: '6:35 min' },
    { id: 5, title: 'Love You So Much - So Much Edit', artist: 'Paul Johnson', album: 'So Much Single', img: './images/Paul.png', genre:'House', bpm: '135 BPM', key: 'C#', duration: '3:25 min' },
    { id: 6, title: 'GirlFX', artist: 'Mabel', album: 'Pleasure Phonetix', img: './images/Mabel.png', genre:'Techno', bpm: '160 BPM', key: 'B♭', duration: '3:30 min' },
    { id: 7, title: 'Gotta Let You Go Tonka Mix', artist: 'DJ Tonka', album: 'Gotta Let You Go', img: './images/Tonka.png', genre:'Pop', bpm: '110 BPM', key: 'B', duration: '5:25 min' },
    { id: 8, title: 'Minimal DJ Koze Remix', artist: 'Matias Aguayo', album: 'Minimal', img: './images/Koze.png', genre:'House', bpm: '140 BPM', key: 'F', duration: '4:15 min' },
    { id: 9, title: 'Memories', artist: 'Fireground', album: 'Memories', img: './images/Fireground.png', genre:'Techno', bpm: '155 BPM', key: 'A♭', duration: '5:56 min' },
    { id: 10, title: 'Booty Must B... ', artist: 'DJ Deeon', album: 'Booty Must B', img: './images/Deeon.png', genre:'House', bpm: '145 BPM', key: 'G', duration: '8:45 min' },
    { id: 11, title: 'Gedup (And Move Your Butt)', artist: 'Sweely', album: 'Gedup (And Move Your Butt)', img: './images/Sweely.png', genre:'Dance', bpm: '95 BPM', key: 'F', duration: '4:15 min' },
    { id: 12, title: 'So Sweet', artist: 'Regularfantasy', album: 'So Sweet', img: './images/Regular.png', genre:'House', bpm: '120 BPM', key: 'G#', duration: '9:45 min' },
    { id: 13, title: 'Wings of Desire', artist: 'Strawpeople', album: 'World Service', img: './images/World.png', genre:'Electronic', bpm: '60 BPM', key: 'D♭', duration: '3:42 min' },
    { id: 14, title: 'Hold My Hand Octa Octa Edit', artist: 'Lady Blacktronika', album: 'Trablonika Daly EP', img: './images/Octa.png', genre:'House', bpm: '130 BPM', key: 'F♭', duration: '10:25 min' },
    { id: 15, title: 'Installation', artist: 'Pangea', album: 'Installation', img: './images/Pangea.png', genre:'Dance', bpm: '110 BPM', key: 'E', duration: '4:24 min' },
    { id: 16, title: 'Cmon N Ride It', artist: 'Quad City DJs', album: 'sdf', img: './images/Quad.png', genre:'Hip-Hop', bpm: '70 BPM', key: 'E#', duration: '2:15 min' },
    { id: 17, title: 'Creature a/jus/ted Dub', artist: 'Kim Ann Foxman', album: 'Creature', img: './images/KimAnn.png', genre:'House', bpm: '144 BPM', key: 'E♭', duration: '4:31 min' },
    { id: 18, title: 'It Aint Over', artist: 'DJ HEARTSTRING', album: 'sdf', img: './images/Heartstring.png', genre:'Pop', bpm: '157 BPM', key: 'G♭', duration: '5:15 min' },
    { id: 19, title: 'I Want You', artist: 'DJ Blush', album: 'Single', img: './images/Blush.png', genre:'Techno', bpm: '160 BPM', key: 'A', duration: '3:54 min' },
    { id: 20, title: 'DARE EDIT', artist: 'OSSX', album: 'TRICKY', img: './images/OSSX.png', genre:'Club', bpm: '130 BPM', key: 'B#', duration: '2:55 min' },
    { id: 21, title: 'PUSH IT', artist: 'OZZA', album: 'sdf', img: './images/255-200.png', genre:'Club', bpm: '120 BPM', key: 'A♭', duration: '4:23 min' },
    { id: 22, title: 'Omeed Norouzi X Betonkust', artist: 'Henry R', album: 'Blends Comp', img: './images/Henry.png', genre:'Experimental', bpm: '80 BPM', key: 'C♭', duration: '3:09 min' },
    { id: 23, title: 'Nu Feeling', artist: 'Arden', album: 'Novaj', img: './images/Arden.png', genre:'Nu-House', bpm: '100 BPM', key: 'E', duration: '3:30 min' },
    { id: 24, title: 'UR LUV', artist: 'Client 03', album: 'Single', img: './images/Client.png', genre:'Techno', bpm: '142 BPM', key: 'D♭', duration: '4:05 min' },
    { id: 25, title: 'Rave 4 Love', artist: '9999999', album: 'Unknown', img: './images/999999.png', genre:'Tehcno', bpm: '165 BPM', key: 'A#', duration: '5:50 min' },
    { id: 26, title: 'In Da Club', artist: 'DJ Rashad', album: 'Unknown', img: './images/255-200.png', genre:'Club', bpm: '130 BPM', key: 'F', duration: '3:05 min' },
    { id: 27, title: 'Sugar', artist: 'Turk Turkelton', album: 'Single', img: './images/Turk.png', genre:'House', bpm: '120 BPM', key: 'E♭', duration: '5:40 min' },
    { id: 28, title: 'Coolie Joyride', artist: 'Spooky', album: 'Joyride EP', img: './images/Coolio.png', genre:'Dance', bpm: '70 BPM', key: 'G', duration: '7:23 min' },
    { id: 29, title: 'Bring Dat Bak', artist: 'Tre Oh Fie', album: 'Remix', img: './images/Tre.png', genre:'Club', bpm: '60 BPM', key: 'D#', duration: '7:34 min' },
    { id: 30, title: 'NO ORDINDARY LOVE 91', artist: 'Akash', album: 'Edit', img: './images/Ordinary.png', genre:'DNB', bpm: '150 BPM', key: 'F', duration: '5:00 min' }
    ]

    app.locals.checklist = [
        {id: 1, title: 'Sexual (li da di)', artist: 'Amber', album: 'Pre-Life Ambient Remix', genre: 'Dance', bpm: '135', key: 'C-', duration: '4:58 min' },
        {id: 2, title: 'Get Back', artist: 'DJ Tonka', album: 'Get Back EP', genre: 'Dance/Pop', bpm: '150', key: 'F#', duration: '5:56 min' },
        {id: 3, title: 'Deeper and Deeper Shep/s Fierce Remix', artist: 'Madonna', album: 'Erotica Remix Album', genre: 'Pop', bpm: '145', key: 'C#', duration: '8:36 min' }
    ]


    app.get('/', (request, response) => {
      response.send('gigDown Server Online~');
    });

    app.listen(app.get('port'), () => {
      console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
    });
    
    app.get('/api/v1/usblibrary', (request, response) => {
        const usblibrary = app.locals.usblibrary;
        response.json({ usblibrary });
    });

    app.get('/api/v1/checklist/:id', (request, response) => {
        const { id } = request.params;
        const itemId = parseInt(id);
        const itemlist = app.locals.checklist.find(item => item.id === itemId);
        if (!itemlist) {
            return response.sendStatus(404);
        }
      
        response.status(200).json(itemlist);
    });

    app.get('/api/v1/checklist', (request, response) => {
        const checklist = app.locals.checklist;
        response.json({ checklist });
    });

    app.get('/api/v1/checklist/:id', (request, response) => {
        const { id } = request.params;
        const itemlist = app.locals.checklist.find(item => item.id === id);
        if (!itemlist) {
          return response.sendStatus(404);
        }
      
        response.status(200).json(itemlist);
    });
    

    app.post('/api/v1/checklist', (request, response) => {
        const id = Date.now();
        const itemlist = request.body;
      
        for (let requiredParameter of ['title', 'artist', 'album', 'genre', 'bpm', 'key', 'duration']) {
          if (!itemlist[requiredParameter]) {
            response
              .status(422)
              .send({ error: `Expected format: { title: <String>, artist: <String>, album: <String>, genre: <String>, bpm: <String>, key: <String>, duration: <String> }. You're missing a "${requiredParameter}" property.` });
            return
          }
        }
      
        const { title, artist, album, genre, bpm, key, duration } = itemlist;
        app.locals.checklist.push({ id, title, artist, album, genre, bpm, key, duration });
        response.status(201).json({ id, title, artist, album, genre, bpm, key, duration });
      });
    
  
      app.delete('/api/v1/checklist/:id', (request, response) => {
        const { id } = request.params;
        const index = app.locals.checklist.findIndex(item => item.id === parseInt(id));
        if (index === -1) {
            return response.sendStatus(404);
        }
        app.locals.checklist.splice(index, 1);
        response.status(200).json({ message: `Item with ID ${id} has been deleted successfully` });
    });
    
    