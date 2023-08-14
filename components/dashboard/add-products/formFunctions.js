import { storage } from "@/firebase/firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

// upload product images
const hanldeUploadImage = async (imageName, imgFile) => {
  const imgRef = ref(storage, `productImages/${imageName}`);

  try {
    const snapshot = await uploadBytes(imgRef, imgFile);
    const imageUrl = await getDownloadURL(snapshot.ref);

    return imageUrl;
  } catch (error) {
    return console.log(error);
  }
};

// delete the images

const handleDeleteImage = async (imageName) => {
  const imgRef = ref(storage, `productImages/${imageName}`);
  deleteObject(imgRef);
};

export { hanldeUploadImage, handleDeleteImage };
