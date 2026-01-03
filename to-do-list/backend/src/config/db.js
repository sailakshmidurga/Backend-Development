import mongoose from "mongoose";
const ConnectDB = async() => {
  try{
    await mongoose.connect("mongodb+srv://konetisailakshmidurga_db_user:<db_password>@cluster0.wnhr52j.mongodb.net/?appName=Cluster0");
    console.log("DB Connected");
  }
  catch(error){
    console.error("DB NotConnected",error);
    process.exit(1);
  }
}
export default ConnectDB;