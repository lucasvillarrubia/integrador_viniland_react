import { GiSpiralLollipop, GiStarsStack, GiBoombox, GiSaxophone, GiCowboyBoot } from "react-icons/gi";
import { TbHandRock } from "react-icons/tb";
import { SiSoundcharts } from "react-icons/si";
import { HiOutlineHeart } from "react-icons/hi";

export const categories = [
        {
                id: 1,
                icon: <HiOutlineHeart />,
                name: 'Favs',
                category: 'favs',
        },
        {
                id: 2,
                icon: <GiSpiralLollipop />,
                name: 'Pop',
                category: 'pop',
        },
        {
                id: 3,
                icon: <TbHandRock />,
                name: 'Rock',
                category: 'rock',
        },
        {
                id: 4,
                icon: <SiSoundcharts />,
                name: 'R&B',
                category: 'rnb',
        },
        {
                id: 5,
                icon: <GiBoombox />,
                name: 'Rap / Hip Hop',
                category: 'rap',
        },
        {
                id: 6,
                icon: <GiCowboyBoot />,
                name: 'Country',
                category: 'country',
        },
        {
                id: 7,
                icon: <GiSaxophone />,
                name: 'Jazz',
                category: 'jazz',
        },
        {
                id: 8,
                icon: <GiStarsStack />,
                name: 'Arg',
                category: 'argento',
        }
];      