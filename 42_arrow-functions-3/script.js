const team = {
  members: ['Ronaldinho Gaúcho', 'Hulk'],
  teamName: 'Atlético Mineiro',
  teamSummary: function() {
    // let self = this;
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    }.bind(this)); // ES5 code
  }
};
console.log(team.teamSummary());


const team2 = {
  members: ['Pelé', 'Romário'],
  teamName: 'Brasil',
  teamSummary: function() {
    // this === team2
    return this.members.map( member => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
console.log(team2.teamSummary());