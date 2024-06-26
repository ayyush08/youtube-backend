import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) { //cb --> CAllBaCK
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname) //but maybe 5 files same name so gotta figure it out
    }
    })

export const upload = multer({ 
    storage, 
})