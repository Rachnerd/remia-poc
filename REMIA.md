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

Schema first approach:

```typescript
// api/src/app/app.module.ts
@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
```
