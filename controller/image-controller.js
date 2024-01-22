import File from "../models/file.js";
 

export const uploadImage = async(request,response)=>{
    // console.log(request);
    console.log("evv ------"+process.env.BASE_URL);
    const fileObj={
        path:request.file.path,
        name:request.file.originalname
    }
    try {
      const file=  await File.create(fileObj);
        response.status(200).json({path:`${process.env.BASE_URL}/file/${file._id}`})
    } catch (error) {
         console.log(error.message);
         response.status(500).json({error:error.message})
    }
    // return response.status(200).json({msg:"Hello "})
}


export const downloadImage=async (request,response)=>{
    try {
       const file = await File.findById(request.params.fileId);
       file.downloadContent++;
       await file.save();
       response.download(file.path,file.name);
    } catch (error) {
        console.log(error.message);
        response.status(500).json({error:error.message})
    }
}