/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { Fairs_me$ref } from "./Fairs_me.graphql";
export type FavoriteFairsQueryVariables = {};
export type FavoriteFairsQueryResponse = {
    readonly me: ({
        readonly " $fragmentRefs": Fairs_me$ref;
    }) | null;
};
export type FavoriteFairsQuery = {
    readonly response: FavoriteFairsQueryResponse;
    readonly variables: FavoriteFairsQueryVariables;
};



/*
query FavoriteFairsQuery {
  me {
    ...Fairs_me
    __id: id
  }
}

fragment Fairs_me on Me {
  followsAndSaves {
    fairs(first: 10, after: "") {
      edges {
        node {
          id
          profile {
            gravityID
            is_followed
            id
            __id: id
          }
          exhibition_period
          name
          counts {
            partners
          }
          href
          image {
            url
          }
          start_at
          end_at
          __id: id
          __typename
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  __id: id
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FavoriteFairsQuery",
  "id": null,
  "text": "query FavoriteFairsQuery {\n  me {\n    ...Fairs_me\n    __id: id\n  }\n}\n\nfragment Fairs_me on Me {\n  followsAndSaves {\n    fairs(first: 10, after: \"\") {\n      edges {\n        node {\n          id\n          profile {\n            gravityID\n            is_followed\n            id\n            __id: id\n          }\n          exhibition_period\n          name\n          counts {\n            partners\n          }\n          href\n          image {\n            url\n          }\n          start_at\n          end_at\n          __id: id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n  __id: id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FavoriteFairsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "Me",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Fairs_me",
            "args": null
          },
          v0
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FavoriteFairsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "Me",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "followsAndSaves",
            "storageKey": null,
            "args": null,
            "concreteType": "FollowsAndSaves",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "fairs",
                "storageKey": "fairs(after:\"\",first:10)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "after",
                    "value": "",
                    "type": "String"
                  },
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10,
                    "type": "Int"
                  }
                ],
                "concreteType": "FollowedFairConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "FollowedFairEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Fair",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "href",
                            "args": null,
                            "storageKey": null
                          },
                          v1,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "exhibition_period",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "counts",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "FairCounts",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "partners",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "profile",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Profile",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "gravityID",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "is_followed",
                                "args": null,
                                "storageKey": null
                              },
                              v1,
                              v0
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "image",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "url",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "start_at",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "end_at",
                            "args": null,
                            "storageKey": null
                          },
                          v0,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "__typename",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "cursor",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pageInfo",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "endCursor",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasNextPage",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "fairs",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "after",
                    "value": "",
                    "type": "String"
                  },
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10,
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "key": "SavedFairs_fairs",
                "filters": null
              }
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
(node as any).hash = '9f960de6c6c0b2a23c50ef0f8d37287b';
export default node;
