const User = require("../models/users");

// Here we are creating a user
module.exports.createUser = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      res.send("user already exist");
      //return res.redirect("/users/register");
    } else {
      await User.create({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        email: req.body.email,
        Phone: req.body.Phone,
        password: req.body.password,
      });
      res.send("User created successfully");
     // return res.redirect("/users/login");
    }
  } catch (error) {
    console.log("error while creating user", error);
    return res.redirect("/users/register");
  }
};

module.exports.updateUser = async function (req, res) {
  try {
    const id = req.params.id;

    const newUser = await User.findById(id);

    newUser.Firstname = req.body.Firstname;
    newUser.Lastname = req.body.Lastname;
    newUser.email = req.body.email;
    newUser.phone = req.body.Phone;

    newUser.save();

    if (!newUser) {
      res.status(404).json({
        data: {
          message: "User not found ",
        },
      });
    }
    res.status(200).json({
      data: {
        user: newUser,
      },
      message: "Updated Successfully ",
    });
  } catch (err) {
    res.status(500).json({
      data: {
        message: "Oops || Error Occurred ",
      },
    });
  }
};

module.exports.GetUser= async function (req, res) {
  try {
    const id = req.params.id;

    const DataById = await User.findById(id);

    if (!DataById) {
      res.status(404).json({
        data: {
          message: "User not found ",
        },
      });
    }
    res.send(DataById);
  } catch (err) {
    res.status(500).json({
      data: {
        message: "Oops || Error Occurred ",
      },
    });
  }
};

module.exports.deleteuser = async function (req, res) {
  try {
    const id = req.params.id;

    const deleteUser = await User.findByIdAndDelete(id);

    if (!deleteUser) {
      res.status(404).json({
        data: {
          message: "User not found ",
        },
      });
    }
    res.json({
      data: {
        message: "User Deleted",
      },
    });
  } catch (err) {
    res.status(500).json({
      data: {
        message: "Oops || Error Occurred ",
      },
    });
  }
};



module.exports.Getfilter = async function (req, res) {
  try {
  
    const filter = req.query
    const First=req.query.Firstname;
    const Last=req.query.Lastname;
    const email=req.query.email;
    const phone=req.query.phone;
    let query={}
    if(First)
    {
      query.Firstname=new RegExp(`.*${First}.*`);
    }
    if(Last)
    {
      query.Lastname=new RegExp(`.*${Last}.*`);
    }
    if(email)
    {
      query.email=new RegExp(`.*${email}.*`);
    }
    if(phone)
    {
      query.phone=new RegExp(`.*${phone}.*`);
    }
    //console.log(query);
    const Data = await User.find(query);

    if (!Data) {
      return res.status(404).json({
        data: {
          message: "user Not Found  ",
        },
      });
    }
    res.status(200).json({
      data: {
        products: Data,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      data: {
        message: "Oops || Error Occurred ",
      },
    });
  }
};
