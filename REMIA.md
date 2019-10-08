# Steps

## Tools

```
npm install -g @nrwl/cli
npm install -g @angular/cli
```

## Initial project

```
npx create-nx-workspace
> remia
> angular-nest
> remia-poc
> SASS
```

## Add Graphql to Nestjs

```
npm i --save @nestjs/graphql apollo-server-express graphql-tools graphql
```

## Run api

```
npm start --  --project=api
```

## Add Apollo client to Angular

```
# https://www.apollographql.com/docs/angular/basics/setup/
npm install --save apollo-angular \
  apollo-angular-link-http \
  apollo-link \
  apollo-client \
  apollo-cache-inmemory \
  graphql-tag \
  graphql
```

## Generate module

```
ng generate module leverancier --project=remia-poc
# or
ng g m leverancier --project=remia-poc
```

## Generate component

```
ng generate component leverancier --project=remia-poc
# or
ng g c leverancier --project=remia-poc
```

## Generate component lib
```
ng g @nrwl/angular:lib ui-components
```
