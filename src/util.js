import { v4 as uuidv4 } from "uuid";

function musicList(){
    return [
        {
            name: "Suckerz",
            cover: 'https://m.media-amazon.com/images/I/91ORGScu88L._SS500_.jpg',
            artist: 'DemonDice',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
            color: ["#E34C40", "#370F0F"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Keep Going",
            cover: 'https://i.scdn.co/image/ab67616d0000b27333023a00d050f0569a88b764',
            artist: 'Syn Cole',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
            color: ["#FDBE88", "#9A452C"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "C U",
            cover: 'https://m.media-amazon.com/images/I/91ORGScu88L._SS500_.jpg',
            artist: 'DemonDice',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10097",
            color: ["#E34C40", "#370F0F"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Hazy Skyscraper",
            cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/96/0a/c1/960ac134-c077-a500-da45-687201cecd82/artwork.jpg/400x400cc.jpg',
            artist: 'DemonDice',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10065",
            color: ["#E34C40", "#370F0F"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Alt-Er-Native!!",
            cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/96/0a/c1/960ac134-c077-a500-da45-687201cecd82/artwork.jpg/400x400cc.jpg',
            artist: 'DemonDice, Ill.Bell',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10045",
            color: ["#E34C40", "#370F0F"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Alkatraz",
            cover: 'https://f4.bcbits.com/img/a1205396507_10.jpg',
            artist: 'DemonDice',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10012",
            color: ["#E34C40", "#370F0F"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Red",
            cover: 'https://images.genius.com/8af0b05e60cfd4331f6da8b01ae4b9c5.1000x1000x1.png',
            artist: 'Mori Calliope',
            audio: "http://topcitysound.net/wp-content/uploads/2021/04/Mori_Calliope_-_Red.mp3?_=1",
            color: ["#231E3D", "#AB1218"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Ai",
            cover: 'https://i1.sndcdn.com/artworks-000416284767-anyuj2-t500x500.jpg',
            artist: 'DemonDice, Scott Miller',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10032",
            color: ["#E34C40", "#370F0F"],
            id: uuidv4(),
            active: false,
        },

        {
            name: "Gang Gang, Kawaii!!",
            cover: 'https://f4.bcbits.com/img/a2741300593_10.jpg',
            artist: 'DemonDice',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10027",
            color: ["#E34C40", "#370F0F"],
            id: uuidv4(),
            active: false,
        },

    ]
}

export default musicList;