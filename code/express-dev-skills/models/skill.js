const skills = [
    {id: 125223, skill: 'Learn JavaScript', done: true},
    {id: 127904, skill: 'Learn Python', done: false},
    {id: 139608, skill: 'Deploy a website', done: false}
  ];
  


  
  function getAll() {
    return skills;
  }

  let getOne =(id) => {
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
    }



  function deleteOne(id) {
	// Find the index based on the id of the skill object
	    const idx = skills.findIndex(skill => skill.id === parseInt(id));
	    skills.splice(idx, 1);
  }

  
  let update = (skill, id) => {
      const s = new Skill({
        name: req.body.name
      })
  }



  module.exports = {
    getAll, // list the skills
    getOne, // shows one skill & status
    create, // add a skill 
    deleteOne, // eliminates one skill button
    update 
  };

 
