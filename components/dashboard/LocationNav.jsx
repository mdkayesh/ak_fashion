const LocationNav = ({ title, LocationName, element }) => {
  return (
    <div className="flex justify-between items-center mb-10">
      <div>
        <h2 className="text-2xl text-heading_color">{title}</h2>
        <p className="mt-2">
          <span className="text-primary">Home</span>
          <span className="before:content-['/'] before:px-3">
            {LocationName}
          </span>
        </p>
      </div>
      {element}
    </div>
  );
};

export default LocationNav;
