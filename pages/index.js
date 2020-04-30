import Layout from "../components/Layout";
import RestaurantList from "../components/RestaurantList";

function Index() {
  return (
    <Layout>
      <div className="wrapper">
        <h1 className="title">Best restaurants in Paris</h1>
        {/* TODO: implement Filters */}
        <RestaurantList />
      </div>
      <style jsx>{`
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
}

export default Index;
