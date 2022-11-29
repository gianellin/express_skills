
//Require the Skills model - similar to the one in the router but after bringing the function.
const Skill =require('../models/skill');


// this is the controller function that came from the router.
let index =(req, res) =>{
    res.render('skills/index', {
      skills: Skill.getAll(),
      time: req.time 
      
    });
  }
  


let show = (req, res) =>{
    const skillFromDB = Skill.getOne(req.params.id)
    res.render('skills/show', {skill: skillFromDB})
    // Skill.findById(req.params.id).then((skill) => {res.render('skills/show', {skill: skill})})
}


let create = (req, res) => {
    //create a skill
    Skill.create(req.body)
    res.redirect('/skills') // redirect to my homepage  
}

let newSkill =(req, res) => {
    res.render('skills/new') //referencing inside of the view folder -- sneding to the client
}


// delete is a taken word so lets use another name
let deleteSkill =(req, res) => {
    Skill.deleteOne(req.params.id); // hey Model, go delete the skill with the id stored req.params.id
	// for deletes, we redirect usually back to the index route (/skills)
	  res.redirect('/skills');

}

let edit = (req, res) => {
  
  const skillEdit = Skill.getOne(req.params.id)
  res.render('skills/edit', {skill: skillEdit})

  // render the edit.ejs
    // const skillEdit = Skill.editOne(req.params.id); // hey Model, edit the skill with the id stored in req.params.id
    // res.render('skills/edit', {skill: Skill , id:req.params.id}) // referencing inside the view folder
}

let updateSkill = (req, res) => {

  req.body.done = !!req.body.done;
  res.redirect(`/skills/${req.params.id}`)

  Skill.findByIdAndUpdate(req.body, res.params.id);

  
}

//keep it always at the end
  module.exports = {
    index,
    new: newSkill,
    show,
    create,
    delete: deleteSkill,
    edit,
    updateSkill
    
};

