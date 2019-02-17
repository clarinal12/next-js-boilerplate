/**
 * Libraries
 */
import fetch from "isomorphic-unfetch";

/**
 * Components
 */
import Layout from "../components/CoreLayout";
import Modal from "../components/Modal";

const Index = props => (
  <Layout pageTitle="Home" pageSubTitle="The page's subtitle is written here.">
    {/* <Modal /> */}
    <h1>Home Page Information</h1>
    {/* <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul> */}
  </Layout>
);

// Index.getInitialProps = async function() {
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//   const data = await res.json();

//   return {
//     shows: data
//   };
// };

export default Index;
