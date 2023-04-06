/*
In this solution, we define a functional component called FileUploadForm that contains a file state variable, which is initially set to null. We define a handleFileChange function that is called when the user selects a file. Inside the function, we update the file state variable to reflect the selected file.

We then render a form with a file upload input. We use the onChange prop of the input element to call the handleFileChange function when the user selects a file.

Finally, we conditionally render the file name and size in a div element. We use the name and size properties of the file object to display the file name and size, respectively. We also use the && operator to only render the div element if file is not null.
*/

import React, { useState } from 'react';

const FileUploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFile(file || null);
  };

  return (
    <div>
      <form>
        <label>
          Choose file:
          <input type='file' onChange={handleFileChange} />
        </label>
      </form>
      {file && (
        <div>
          <p>Name: {file.name}</p>
          <p>Size: {Math.round((file.size / 1024 / 1024) * 100) / 100} MB</p>
        </div>
      )}
    </div>
  );
};

export default FileUploadForm;
