"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIGNIN = void 0;
const client_1 = require("@apollo/client");
exports.SIGNIN = (0, client_1.gql) `
  query ($createUserIntput: CreateUserInput!) {
    signin(createUserInput: $createUserIntput) {
      status
      message
    }
  }
`;
//# sourceMappingURL=graphqlQueries.js.map