function skillsMember() {
  var member = {
    firstName: 'John',
    lastName: 'Doe',
    skills: ['JavaScript', 'HTML', 'CSS'],
    getSkills: function() {
      return this.skills;
    }
  };
  return member;
}