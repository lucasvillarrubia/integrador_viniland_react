
class product {
        constructor (id, name, author, image, price, category, xAdded, xOvertimeAdded) {
          this.id = id;
          this.name = name;
          this.author = author;
          this.image = image;
          this.price = price;
          this.category = category;
          this.xAdded = xAdded;
          this.xOvertimeAdded = xOvertimeAdded;
        }
}

export const products = [
        new product (1, "After Hours", "The Weeknd", "./images/afterhours.png", 9500, "vinyls", 0, 0),
        new product (2, "Midnights", "Taylor Swift", "./images/midnights.png", 12000, "vinyls", 0, 0),
        new product (3, "Mr. Morale & the Big Steppers", "Kendrick Lamar", "./images/mrmorale.png", 10000, "vinyls", 0, 0),
        new product (4, "Future Nostalgia", "Dua Lipa", "./images/futurenostalgia.png", 7500, "vinyls", 0, 0),
        new product (5, "Superache", "Conan Gray", "./images/superache.png", 9900, "vinyls", 0, 0),
        new product (6, "RENAISSANCE", "Beyoncé", "./images/renaissance.png", 13000, "vinyls", 0, 0),
        new product (7, "Sour", "Olivia Rodrigo", "./images/sour.png", 3500, "vinyls", 0, 0),
        new product (8, "Gemini Rights", "Steve Lacy", "./images/geminirights.png", 6700, "vinyls", 0, 0),
        new product (9, "Harry's House", "Harry Styles", "./images/harryshouse.png", 21650, "vinyls", 0, 0),
        new product (10, "MOTOMAMI", "ROSALÍA", "./images/motomami.png", 8700, "vinyls", 0, 0),
        new product (11, "Happier Than Ever", "Billie Eilish", "./images/happierthanever.png", 8600, "vinyls", 0, 0),

        new product (12, "Chemtrails Over the Country Club", "Lana del Rey", "./images/chemtrailsoverthecountryclub-cassette.png", 50000, "cassettes", 0, 0),
        new product (13, "Bleach", "Nirvana", "./images/bleach-cassette.png", 23000, "cassettes", 0, 0),
        new product (14, "The Lockdown Sessions", "Elton John", "./images/thelockdownsessions-cassette.png", 48000, "cassettes", 0, 0),
        new product (15, "Harry's House", "Harry Styles", "./images/harryshouse-cassette.png", 55000, "cassettes", 0, 0),
        new product (16, "Happier Than Ever", "Billie Eilish", "./images/happierthanever-cassette.png", 35000, "cassettes", 0, 0),
        new product (17, "Greatest Hits", "Queen", "./images/greatesthits-cassette.png", 25000, "cassettes", 0, 0),
        new product (18, "Sucking In The Seventies", "The Rolling Stones", "./images/suckingintheseventies-cassette.png", 10500, "cassettes", 0, 0),
        new product (19, "YHLQMDLG", "Bad Bunny", "./images/yhlqmdlg-cassette.png", 30000, "cassettes", 0, 0),

        new product (20, "Call Me If You Get Lost", "Tyler, The Creator", "./images/callmeifyougetlost.jpg", 9900, "cds", 0, 0),
        new product (21, "DISCO", "Kylie Minogue", "./images/DISCO.jpg", 6800, "cds", 0, 0),
        new product (22, "Back to Black", "Amy Winehouse", "./images/backtoblack.jpg", 4500, "cds", 0, 0),
        new product (23, "Legacy", "David Bowie", "./images/legacy.jpg", 2300, "cds", 0, 0),
        new product (24, "Thriller", "Michael Jackson", "./images/thriller.jpg", 7900, "cds", 0, 0),
        new product (25, "Rumours", "Fleetwood Mac", "./images/rumours.jpeg", 6700, "cds", 0, 0),
        new product (26, "The Slow Rush", "Tame Impala", "./images/theslowrush.jpg", 5000, "cds", 0, 0),
        new product (27, "30", "Adele", "./images/30.jpg", 10500, "cds", 0, 0),

        new product (28, "Me", "Elton John", "./images/me-book.png", 6500, "books", 0, 0),
        new product (29, "Paracaidas y Vueltas", "Andrés Calamaro", "./images/paracaidasyvueltas-book.png", 3500, "books", 0, 0),
        new product (30, "Chronicles Vol. 1", "Bob Dylan", "./images/chroniclesvol1-book.png", 4100, "books", 0, 0),
        new product (31, "Born To Run", "Bruce Springsteen", "./images/borntorun-book.png", 3100, "books", 0, 0)
];