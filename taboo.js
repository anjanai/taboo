let words = `
cupboard hubbard storage kitchen closet shelf
skateboard rollerblade scooter ride wheels ramp
Billboard Sign advertisement poster display panel
Bulletin_Board Announcement posting message notice news
Boardwalk Beach Path walkway promenade pier jetty
Boardroom Meeting room office conference headquarters executive suite
Scoreboard Display tally sheet record standings tracker
Motherboard Circuitry electronics computer PCB components connect
Blackboard Chalk writing teacher class 
Leaderboard Ranking standings top performers chart list
Boarding_Pass Ticket permit document clearance authorization flight
Carom_Board coins striker queen white black 
Aboveboard  top on below legitimate honest open
Waterboard H2O liquid torture interrogation prisoner 
Onboard off top employee new organization person
Preboard before passenger flight plane aircraft get
Ouija_board spirt answer question planchette seance ghost
Switchboard on off panel control telephone exchange power
Sideboard furniture shelf drawers dishes table silverware
`;

$(document).ready(function () {
    lines = words.trim().split('\n');
    div = $('#taboocards');
    for (line of lines) {
	words = line.split(/\s+/);
	let html = '<div class="card"><h1>' + words.shift().toLowerCase() + '</h1><ul class="cardList">';
	for (word of words) {
	    html += '<li>' + word.toLowerCase() + '</li>';
	}
	html += '</ul></div>'
	div.append(html);
	    
    }
    
});
