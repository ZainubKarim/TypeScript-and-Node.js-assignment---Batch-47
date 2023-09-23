"use strict";
/*  Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album. */
function make_album(artist, title, num_tracks = 0) {
    return {
        artist: artist,
        title: title,
        num_tracks: num_tracks
    };
}
var album1 = make_album("Selena Gomez", "Rare");
console.log(album1.artist);
console.log(album1.title);
console.log(album1.num_tracks);
var album2 = make_album("Taylor Swift", "Eras Tour");
console.log(album2.artist);
console.log(album2.title);
console.log(album2.num_tracks);
var album3 = make_album("One Direction", "What makes you beautiful", 12);
console.log(album3.artist);
console.log(album3.title);
console.log(album3.num_tracks);
