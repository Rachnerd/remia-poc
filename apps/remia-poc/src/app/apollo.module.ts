import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory';
// @ts-ignore
import introspectionQueryResultData from './fragmentTypes.json';

/**
 * This is needed by the cache to be able to identify our unions and interfaces.
 */
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

/**
 * Cache of the runtime application.
 */
const cache = new InMemoryCache({
  fragmentMatcher
});

/**
 * Link that sends a request for EACH query
 */
const createHttpLink = (httpLink: HttpLink) =>
  httpLink.create({
    uri: 'http://localhost:3333/graphql'
  });

@NgModule({
  imports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache,
          link: createHttpLink(httpLink)
        };
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class RemiaApolloModule {}
