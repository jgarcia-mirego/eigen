/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { CitySavedList_viewer$ref } from "./CitySavedList_viewer.graphql";
export type QueryRenderersCitySavedListQueryVariables = {
    readonly citySlug: string;
};
export type QueryRenderersCitySavedListQueryResponse = {
    readonly viewer: ({
        readonly " $fragmentRefs": CitySavedList_viewer$ref;
    }) | null;
};
export type QueryRenderersCitySavedListQuery = {
    readonly response: QueryRenderersCitySavedListQueryResponse;
    readonly variables: QueryRenderersCitySavedListQueryVariables;
};



/*
query QueryRenderersCitySavedListQuery(
  $citySlug: String!
) {
  viewer {
    ...CitySavedList_viewer
  }
}

fragment CitySavedList_viewer on Viewer {
  city(slug: $citySlug) {
    name
  }
  me {
    followsAndSaves {
      shows(first: 20, status: RUNNING_AND_UPCOMING, city: $citySlug, after: "") {
        edges {
          node {
            gravityID
            internalID
            id
            name
            isStubShow
            status
            href
            is_followed
            exhibition_period
            cover_image {
              url
            }
            location {
              coordinates {
                lat
                lng
              }
              __id: id
            }
            type
            start_at
            end_at
            partner {
              __typename
              ... on Partner {
                name
                type
                profile {
                  image {
                    url(version: "square")
                  }
                  __id: id
                }
              }
              ... on Node {
                __id: id
              }
              ... on ExternalPartner {
                __id: id
              }
            }
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
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "citySlug",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "QueryRenderersCitySavedListQuery",
  "id": null,
  "text": "query QueryRenderersCitySavedListQuery(\n  $citySlug: String!\n) {\n  viewer {\n    ...CitySavedList_viewer\n  }\n}\n\nfragment CitySavedList_viewer on Viewer {\n  city(slug: $citySlug) {\n    name\n  }\n  me {\n    followsAndSaves {\n      shows(first: 20, status: RUNNING_AND_UPCOMING, city: $citySlug, after: \"\") {\n        edges {\n          node {\n            gravityID\n            internalID\n            id\n            name\n            isStubShow\n            status\n            href\n            is_followed\n            exhibition_period\n            cover_image {\n              url\n            }\n            location {\n              coordinates {\n                lat\n                lng\n              }\n              __id: id\n            }\n            type\n            start_at\n            end_at\n            partner {\n              __typename\n              ... on Partner {\n                name\n                type\n                profile {\n                  image {\n                    url(version: \"square\")\n                  }\n                  __id: id\n                }\n              }\n              ... on Node {\n                __id: id\n              }\n              ... on ExternalPartner {\n                __id: id\n              }\n            }\n            __id: id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n    __id: id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "QueryRenderersCitySavedListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CitySavedList_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QueryRenderersCitySavedListQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "city",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "slug",
                "variableName": "citySlug",
                "type": "String"
              }
            ],
            "concreteType": "City",
            "plural": false,
            "selections": [
              v1
            ]
          },
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
                    "name": "shows",
                    "storageKey": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "after",
                        "value": "",
                        "type": "String"
                      },
                      {
                        "kind": "Variable",
                        "name": "city",
                        "variableName": "citySlug",
                        "type": "String"
                      },
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 20,
                        "type": "Int"
                      },
                      {
                        "kind": "Literal",
                        "name": "status",
                        "value": "RUNNING_AND_UPCOMING",
                        "type": "EventStatus"
                      }
                    ],
                    "concreteType": "FollowedShowConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "FollowedShowEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Show",
                            "plural": false,
                            "selections": [
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
                                "name": "gravityID",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "id",
                                "args": null,
                                "storageKey": null
                              },
                              v1,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "isStubShow",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "status",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "href",
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
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "internalID",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "cover_image",
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
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "location",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Location",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "coordinates",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "LatLng",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "lat",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "lng",
                                        "args": null,
                                        "storageKey": null
                                      }
                                    ]
                                  },
                                  v2
                                ]
                              },
                              v3,
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
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "partner",
                                "storageKey": null,
                                "args": null,
                                "concreteType": null,
                                "plural": false,
                                "selections": [
                                  v4,
                                  v2,
                                  {
                                    "kind": "InlineFragment",
                                    "type": "Partner",
                                    "selections": [
                                      v1,
                                      v3,
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
                                                "args": [
                                                  {
                                                    "kind": "Literal",
                                                    "name": "version",
                                                    "value": "square",
                                                    "type": "[String]"
                                                  }
                                                ],
                                                "storageKey": "url(version:\"square\")"
                                              }
                                            ]
                                          },
                                          v2
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              v2,
                              v4
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
                    "name": "shows",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "after",
                        "value": "",
                        "type": "String"
                      },
                      {
                        "kind": "Variable",
                        "name": "city",
                        "variableName": "citySlug",
                        "type": "String"
                      },
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 20,
                        "type": "Int"
                      },
                      {
                        "kind": "Literal",
                        "name": "status",
                        "value": "RUNNING_AND_UPCOMING",
                        "type": "EventStatus"
                      }
                    ],
                    "handle": "connection",
                    "key": "CitySavedList_shows",
                    "filters": [
                      "status",
                      "city"
                    ]
                  }
                ]
              },
              v2
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }
    ]
  }
};
})();
(node as any).hash = '16104d57df352d994547e7882be5f947';
export default node;
