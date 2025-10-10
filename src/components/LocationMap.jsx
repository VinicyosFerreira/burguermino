const LocationMap = () => {
  return (
    <div className="w-[55%]">
      <h2 className="text-xl text-primary font-semibold text-center mb-4">
        Confira nossa localização principal
      </h2>
      <iframe
        width="100%"
        height="320"
        frameborder=""
        loading="lazy"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">
          Localização geográfica
        </a>
      </iframe>
    </div>
  );
};

export default LocationMap;
