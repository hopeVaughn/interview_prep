import React from 'react';

interface CardProps {
  headerId: string;
  titleId: string;
  excerptId: string;
  profileImgId: string;
  nameId: string;
  dateId: string;
  dummyData: any;
}

const Card: React.FC<CardProps> = ({
  headerId,
  titleId,
  excerptId,
  profileImgId,
  nameId,
  dateId,
  dummyData,
}) => {
  return (
    <div
      className="card bg-white shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out rounded-xl overflow-hidden h-90 w-72 m-6"
      id="card-text"
    >
      <div className="card-header h-48 p-0" id={headerId}
        style={{
          backgroundImage: `url(${
            dummyData[nameId] !== undefined && dummyData[nameId].header_img
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >&nbsp;
        {/* <img src={dummyData[nameId] !== undefined && dummyData[nameId].header_img} className="absolute top-0 left-0 w-full h-full object-cover" alt="Header" /> */}
      </div>

      <div className="card-content p-5">
        <h3 className="card-title text-xl font-semibold text-gray-700" id={titleId}>
          &nbsp; {dummyData[nameId] !== undefined && dummyData[nameId].title}
        </h3>
        <p className="card-excerpt text-gray-500 mt-2 mb-5" id={excerptId}>
          &nbsp; {dummyData[nameId] !== undefined && dummyData[nameId].excerpt}
          &nbsp;
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </p>
        <div className="author flex items-center">
          <div
            className="profile-img-card relative w-10 h-10 mr-3 bg-gray-300 rounded-full overflow-hidden"
            id={profileImgId}
          >
            <img
              src={dummyData[nameId] !== undefined && dummyData[nameId].profile_img}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="Profile"
            />
          </div>
          <div className="author-info">
            <strong className="text-gray-800" id={nameId}>
              {dummyData[nameId] !== undefined && dummyData[nameId].name}
            </strong>
            <small className="block text-gray-400" id={dateId}>
              {dummyData[nameId] !== undefined && dummyData[nameId].date}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};


const BodyCardWrap: React.FC = () => {
  const dummyData = {
    name3:
    {
      name: "John Doe",
      date: "May 10, 2021",
      header_img: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nunc nisl sit amet nunc. Sed euismod, nunc ut aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nunc nisl sit amet nunc.",
      profile_img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },

  }
      
  return (
    <div className="bg-gray-100 font-sans min-h-screen flex flex-wrap justify-start items-center p-8">
      <Card
        headerId="header3"
        titleId="title3"
        excerptId="excerpt3"
        profileImgId="profile_img3"
        nameId="name3"
        dateId="date3"
        dummyData={dummyData}
      />
      <Card
        headerId="header"
        titleId="title"
        excerptId="excerpt"
        profileImgId="profile_img"
        nameId="name"
        dateId="date"
        dummyData={dummyData}
      />
      <Card
        headerId="header4"
        titleId="title4"
        excerptId="excerpt4"
        profileImgId="profile_img4"
        nameId="name4"
        dateId="date4"
        dummyData={dummyData}
      />
      <Card
        headerId="header2"
        titleId="title2"
        excerptId="excerpt2"
        profileImgId="profile_img2"
        nameId="name2"
        dateId="date2"
        dummyData={dummyData}
      />
      <Card
        headerId="header5"
        titleId="title5"
        excerptId="excerpt5"
        profileImgId="profile_img5"
        nameId="name5"
        dateId="date5"
        dummyData={dummyData}
      />
    </div>
  );
};

export default BodyCardWrap;
