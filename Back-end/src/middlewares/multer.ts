import multer from "multer";
import { v4 } from "uuid";
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads");
  },
  filename(req, file, callback) {
    const id = v4();
    const extName = file.originalname.split(".").pop();
    callback(null, `${id}.${extName}`);
  },
});

export const singleUploadMiddleWare = multer({ storage }).single("photo");
