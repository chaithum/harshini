
const Admin=require('../model/Admin')
const bcrypt = require('bcryptjs')


const signUp = async(req, res, next) => {
    const { full_name, email, password,confirm_password } = req.body;
    if (password !== confirm_password) {
                return res.status(400).json({ error: 'Passwords do not match' });
            } 
    let existingUser;

    try {

        existingUser = await Admin.findOne({email})
    } catch(err){
        console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message : "User is already exists!"})
    }


    const hashedPassword = bcrypt.hashSync(password)
    const hashedPassword1 = bcrypt.hashSync(confirm_password)
 
    const admin = new Admin({
        full_name, email,
        password: hashedPassword,
        confirm_password:hashedPassword1
    });

    try {

        admin.save()
        return res.status(201).json({ admin })
    }
    catch(e){console.log(e);}
}

const logIn = async(req, res, next) => {
    const { email, password } = req.body;

    let existingUser;

    try{
        existingUser = await Admin.findOne({email})
       }catch(e){
        console.log(err);
       }
       if(!existingUser){
           return res.status(404).json({message : "User is not found"})
       }

       const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)

       if(!isPasswordCorrect){
        return res.status(400).json({message: "Incorrect Password!"});
    }

    return res.status(200).json({admin: existingUser});
}

const forgot_password = async (req, res, next) => {
    const { email, password, confirm_password } = req.body;
    if (password !== confirm_password) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    let existingUser;
    try {
        existingUser = await Admin.findOne({ email });
    } catch (err) {
        return res.status(500).json({ message: 'Error finding user' });
    }
    if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    const hashedPassword = bcrypt.hashSync(password);
    const hashedPassword1 = bcrypt.hashSync(confirm_password);
    existingUser.password = hashedPassword;
    existingUser.confirm_password = hashedPassword1;
    try {
        await existingUser.save();
        return res.status(200).json({ message: 'Password updated successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Error updating password' });
    }
};



module.exports = {  signUp , logIn,forgot_password};