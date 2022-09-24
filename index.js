import { request, gql } from 'graphql-request'

var graphql_endpoint = null;

const setGraphqlEndpoint = (url) => {
  graphql_endpoint = url;
}

const getGraphqlResponse = (query) => {
  return request(graphql_endpoint, query);
}

export { gql, setGraphqlEndpoint, getGraphqlResponse };

// setGraphqlEndpoint('https://api.spacex.land/graphql/');

// const query = gql`
//   {
//     company {
//       ceo
//     }
//     roadster {
//       apoapsis_au
//     }
//   }
// `

// getGraphqlResponse(query).then((data) => {
//   console.log(data);
// })