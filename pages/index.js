import Layout from "../components/Layout";
import RestaurantListItem from "../components/RestaurantListItem";

export default () => {
  const tempRestaurants = [
    {
      id: "1",
      cover: [
        {
          url: "/uploads/29d5f5ef9bbc4a438cfb9a9299fd0607.jpeg"
        },
        {
          url: "/uploads/48f5da81ca8e460eb29591605fa6edba.jpeg"
        },
        {
          url: "/uploads/2f600e2114994432ae78a3d05e94e133.jpeg"
        },
        {
          url: "/uploads/063efd98c5b7401f9ea00864211095ed.jpeg"
        }
      ],
      name: "ASPIC",
      price: 4, // "_4" -> 4
      district: "9th", // "_9th" -> "9th"
      category: {
        name: "French"
      },
      note: 5
    },
    {
      id: "28",
      cover: [
        {
          url: "/uploads/f12f7dbc3e4d4c65ab6783d4f6fab084.jpeg"
        },
        {
          url: "/uploads/4b66f90a305f43f1b6e5ea76e65cbb31.jpeg"
        },
        {
          url: "/uploads/26bd1244a0e84b9da76bdff1187df008.jpeg"
        },
        {
          url: "/uploads/cc91373a9b194875a10f8b6b4a112855.jpeg"
        }
      ],
      name: "Aux Enfants Gates",
      price: 2,
      district: "14th",
      category: {
        name: "Contemporary"
      },
      note: 5
    }
  ];
  const apiUrl = "https://foodadvisor-api.strapi.io";

  return (
    <Layout>
      <div className="wrapper">
        <h1 className="title">Best restaurants in Paris</h1>
        {/* TODO: implement Filters */}
        <ul>
          {tempRestaurants.map(restaurant => (
            <li key={restaurant.id}>
              <RestaurantListItem
                name={restaurant.name}
                coverUrl={apiUrl + restaurant.cover[0].url}
                price={restaurant.price}
                category={restaurant.category.name}
                district={restaurant.district}
                starRating={Math.floor(restaurant.note)}
              />
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        li + li {
          margin-top: 72px;
        }

        .wrapper {
          padding: 16px 32px;
        }

        .title {
          margin: 32px 0;
          padding: 0;
          font-size: 1.1em;
        }
      `}</style>
    </Layout>
  );
};
