import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import withApollo from "../lib/withApollo";
import RestaurantListItem from "../components/RestaurantListItem";

const GET_RESTAURANTS = gql`
  query($limit: Int, $start: Int, $sort: String, $where: JSON) {
    restaurants(limit: $limit, start: $start, sort: $sort, where: $where) {
      id
      cover(limit: 1) {
        url
      }
      name
      price
      district
      category {
        name
      }
      note
    }
    restaurantsConnection {
      aggregate {
        count
      }
    }
  }
`;

/**
 * TODO: use _app.js for apollo provider https://www.npmjs.com/package/next-with-apollo
 *
 * Now your page can use anything from @apollo/react-hooks or react-apollo.
 *
 * If you want to add Apollo in _app instead of per page, go to Using _app.
 */
function RestaurantList() {
  const result = useQuery(GET_RESTAURANTS, {
    variables: {
      limit: 15,
      start: 0,
      sort: "name:ASC",
      where: null
    }
  });

  const apiUrl = "https://foodadvisor-api.strapi.io";
  const { loading, data } = result;

  // TODO: fetch data -> SSR
  if (loading) return "Loading...";
  // TODO: map data price: "_4" => 5, district: "_9th" => "9th"
  console.log(data);

  const tempRestaurants = data.restaurants;

  return (
    <>
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
      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        li + li {
          margin-top: 72px;
        }
      `}</style>
    </>
  );
}

export default withApollo(RestaurantList);
