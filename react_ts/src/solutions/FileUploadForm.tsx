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
    <div className='max-w-md mx-auto mt-10'>
      <form className='flex flex-col items-center'>
        <label className='w-full'>
          <span className='text-gray-700 font-semibold'>Choose file:</span>
          <input
            type='file'
            onChange={handleFileChange}
            className='mt-2 border border-gray-300 p-2 rounded w-full'
          />
        </label>
      </form>
      {file && (
        <div className='mt-4 border border-gray-300 p-2 rounded'>
          <p className='text-gray-700 font-semibold'>Name: {file.name}</p>
          <p className='text-gray-700 font-semibold'>
            Size: {Math.round((file.size / 1024 / 1024) * 100) / 100} MB
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUploadForm;
