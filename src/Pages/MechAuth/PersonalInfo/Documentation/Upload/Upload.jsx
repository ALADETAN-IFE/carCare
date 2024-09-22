// import React from 'react'
// import './Upload.css'

// const Upload = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Upload

import React, { useState } from 'react';

const ImageUploadButton = ({ setimages, images, setSelectedImageName,
  selectedImageName, index }) => {
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [selectedImageName, setSelectedImageName] = useState(null);

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log(index)
  //   // console.log(file.name)
  //   setSelectedImageName({ ...selectedImageName, [selectedImageName[index]]: file.name })
  //   if (file && file.type.startsWith('image/')) {
  //     // Update the selected image state
  //     // setSelectedImage(URL.createObjectURL(file));
  //     setimages({ ...images, [images[index]]: URL.createObjectURL(file) })
  //   } else {
  //     alert('Please select an image file');
  //   }
  // };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file, "file")

    // if (!file || !file.type.startsWith('image/')) {
    //   alert('Please select a valid image file');
    //   return;

    // Valid file types: images and documents
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg', 'image/svg+xml'];
    const validDocumentTypes = ['application/pdf', 'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    // Check if the file is valid (either an image or a document) and not a video
    if (!file || (!validImageTypes.includes(file.type) && !validDocumentTypes.includes(file.type))) {
      alert('Please select a valid image or document file (videos are not allowed)');
      return;
    }
    // }

    // Check if there are already 4 files (images or documents) uploaded
    const fileCount = Object.keys(images).length;
    if (fileCount >= 4) {
      alert('You can only upload up to 4 files');
      return;
    }
    // Check if profilePicture is an image
    if (index == "profilePicture" && validDocumentTypes.includes(file.type)) {
      alert("Profile image must be an image");
      return;
    }

    // Update selected image name and image URL
    setSelectedImageName({ ...selectedImageName, [index]: file.name });
    // setimages({ ...images, [index]: URL.createObjectURL(file) });

    // Use createObjectURL only for images, as documents do not need to be previewed as images
    if (validImageTypes.includes(file.type)) {
      // setimages({ ...images, [index]: URL.createObjectURL(file) });
      setimages({ ...images, [index]: file });
    } else {
      setimages({ ...images, [index]: file.name }); // Just store the name for documents
    }
  }


  return (
    <div style={styles.container} key={index}>
      <input
        type="file"
        // accept="image/*"
        onChange={handleImageChange}
        style={styles.fileInput}
        // id="file-upload"
        // value={}
        id={`file-upload-${index}`} // Unique ID for each file input
      />
      <label
        //  htmlFor="file-upload"
        htmlFor={`file-upload-${index}`}
        style={styles.uploadButton}>
        Upload Image
      </label>

      {/* {selectedImage && (
        <div style={styles.imagePreview}>
          <img src={selectedImage} alt="Selected" style={styles.image} />
        </div>
      )} */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  fileInput: {
    display: 'none',
  },
  uploadButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#C8C8C8',
    color: '#000000',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  imagePreview: {
    marginTop: '20px',
    width: '300px',
    height: '300px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #004375',
    borderRadius: '5px',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

export default ImageUploadButton;
