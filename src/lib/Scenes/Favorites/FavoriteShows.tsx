import { FavoriteShowsQuery } from "__generated__/FavoriteShowsQuery.graphql"
import { ShowItemRowContainer as ShowItemRow } from "lib/Components/Lists/ShowItemRow"
import Spinner from "lib/Components/Spinner"
import { ZeroState } from "lib/Components/States/ZeroState"
import { PAGE_SIZE } from "lib/data/constants"
import { defaultEnvironment } from "lib/relay/createEnvironment"
import renderWithLoadProgress from "lib/utils/renderWithLoadProgress"
import React, { Component } from "react"
import { RefreshControl } from "react-native"
import { createPaginationContainer, graphql, QueryRenderer, RelayPaginationProp } from "react-relay"

import { Spacer } from "@artsy/palette"
import { FavoriteShows_me } from "__generated__/FavoriteShows_me.graphql"
import { StickyTabPageFlatList } from "lib/Components/StickyTabPage/StickyTabPageFlatList"
import { StickyTabPageScrollView } from "lib/Components/StickyTabPage/StickyTabPageScrollView"
import { extractNodes } from "lib/utils/extractNodes"

interface Props {
  me: FavoriteShows_me
  relay: RelayPaginationProp
  onDataFetching?: (loading: boolean) => void
}

interface State {
  fetchingMoreData: boolean
  refreshingFromPull: boolean
}

export class Shows extends Component<Props, State> {
  state = {
    fetchingMoreData: false,
    refreshingFromPull: false,
  }

  loadMore = () => {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return
    }

    this.setState({ fetchingMoreData: true })
    this.props.relay.loadMore(PAGE_SIZE, error => {
      if (error) {
        // FIXME: Handle error
        console.error("Shows/index.tsx", error.message)
      }
      this.setState({ fetchingMoreData: false })
    })
  }

  handleRefresh = () => {
    this.setState({ refreshingFromPull: true })
    this.props.relay.refetchConnection(PAGE_SIZE, error => {
      if (error) {
        // FIXME: Handle error
        console.error("Shows/index.tsx #handleRefresh", error.message)
      }
      this.setState({ refreshingFromPull: false })
    })
  }

  // @TODO: Implement test on this component https://artsyproduct.atlassian.net/browse/LD-563
  render() {
    const shows = extractNodes(this.props.me.followsAndSaves?.shows).map(show => ({
      key: show.id,
      content: <ShowItemRow show={show} isListItem />,
    }))

    if (!shows.length) {
      return (
        <StickyTabPageScrollView
          refreshControl={<RefreshControl refreshing={this.state.refreshingFromPull} onRefresh={this.handleRefresh} />}
          contentContainerStyle={{ flex: 1 }}
        >
          <ZeroState
            title="You haven’t saved any shows yet"
            subtitle="When you save shows, they will show up here for future use."
          />
        </StickyTabPageScrollView>
      )
    }

    return (
      <StickyTabPageFlatList
        data={shows}
        style={{ paddingHorizontal: 0, paddingTop: 15 }}
        onEndReached={this.loadMore}
        onEndReachedThreshold={0.2}
        ItemSeparatorComponent={() => <Spacer mb="5px" />}
        refreshControl={<RefreshControl refreshing={this.state.refreshingFromPull} onRefresh={this.handleRefresh} />}
        ListFooterComponent={
          this.state.fetchingMoreData ? <Spinner style={{ marginTop: 20, marginBottom: 20 }} /> : null
        }
      />
    )
  }
}

const FavoriteShowsContainer = createPaginationContainer(
  Shows,
  {
    me: graphql`
      fragment FavoriteShows_me on Me
        @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String" }) {
        followsAndSaves {
          shows: showsConnection(first: $count, after: $cursor) @connection(key: "SavedShows_shows") {
            pageInfo {
              startCursor
              endCursor
              hasPreviousPage
              hasNextPage
            }
            edges {
              node {
                id
                ...ShowItemRow_show
              }
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      // @ts-ignore STRICTNESS_MIGRATION
      return props.me && props.me.followsAndSaves.shows
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      }
    },
    getVariables(_props, { count, cursor }, fragmentVariables) {
      return {
        ...fragmentVariables,
        count,
        cursor,
      }
    },
    query: graphql`
      query FavoriteShowsPaginationQuery($count: Int!, $cursor: String) {
        me {
          ...FavoriteShows_me @arguments(count: $count, cursor: $cursor)
        }
      }
    `,
  }
)

export const FavoriteShowsQueryRenderer = () => {
  return (
    <QueryRenderer<FavoriteShowsQuery>
      environment={defaultEnvironment}
      query={graphql`
        query FavoriteShowsQuery {
          me {
            ...FavoriteShows_me
          }
        }
      `}
      variables={{
        count: 10,
      }}
      render={renderWithLoadProgress(FavoriteShowsContainer)}
    />
  )
}