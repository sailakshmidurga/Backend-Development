const getStudents = (req,res) => {
  //get the data from database
  let stdData = {"name":"Sai","roll":529};
  res.status(200).json({data:stdData});
}

const addStudents = (req,res) => {
  //add data
  res.status(201).json({message:"data added"});
}
export {getStudents,addStudents};