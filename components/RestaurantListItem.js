export default props => {
  const { coverUrl, name, price, category, district, starRating } = props;
  return (
    <>
      <div className="wrapper">
        <img className="cover" src={coverUrl} alt={`A cover of ${name}`} />
        <h2 className="name">{name}</h2>
        <p className="info">
          {"€".repeat(price)} • {category} • {district}
        </p>
        <span className="star-rating">{starRating}</span>
      </div>
      <style jsx>{`
        .wrapper {
          width: 100%;
        }

        .cover {
          width: 100%;
          height: 176px;
          object-fit: cover;
        }

        .name {
          font-size: 1em;
          margin: 16px 0 0 0;
        }

        .info {
          display: inline;
          font-size: 0.8em;
          color: grey;
          margin: 4px 0 0 0;
        }

        .star-rating {
          float: right;
        }
      `}</style>
    </>
  );
};
