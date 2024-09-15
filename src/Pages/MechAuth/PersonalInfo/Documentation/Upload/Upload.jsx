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

const ImageUploadButton = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      // Update the selected image state
      setSelectedImage(URL.createObjectURL(file));
    } else {
      alert('Please select an image file');
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={styles.fileInput}
        id="file-upload"
      />
      <label htmlFor="file-upload" style={styles.uploadButton}>
        Upload Image
      </label>
      
      {selectedImage && (
        <div style={styles.imagePreview}>
          <img src={selectedImage} alt="Selected" style={styles.image} />
        </div>
      )}
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
