// Some data to make the trick

const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  
  // Declare the actions
  const browse = (req,res) => {
     res.json(categories)
    }


  const read = (req,res) => {
    const parseId = parseInt(req.params.id,10);
    const categorie = categories.find((p) => p.id === parseId);

    if(categorie != null) {
        res.json(categorie.name)
    }else{
        res.sendStatus(404)
    }
  }
  
  module.exports = { browse, read};