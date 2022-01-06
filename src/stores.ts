import { writable } from 'svelte/store';

let storedPlayers = JSON.parse(localStorage.getItem("playerList"));
if (storedPlayers === null) {
    storedPlayers = [];
}

let storedTeam1 = JSON.parse(localStorage.getItem("team1"));
if (storedTeam1 === null) {
    storedTeam1 = [];
}

let storedTeam2 = JSON.parse(localStorage.getItem("team2"));
if (storedTeam2 === null) {
    storedTeam2 = [];
}
export const playerList = writable(storedPlayers);
export const team1 = writable(storedTeam1);
export const team2 = writable(storedTeam2);

playerList.subscribe(value => {
    localStorage.setItem("playerList", JSON.stringify(value));
});
team1.subscribe(value => {
    localStorage.setItem("team1", JSON.stringify(value));
});
team2.subscribe(value => {
    localStorage.setItem("team2", JSON.stringify(value));
});
