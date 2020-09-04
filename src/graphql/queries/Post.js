'use strict';

const GraphQL = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
} = GraphQL;

//Import the Post type we created
const PostType = require('../types/Post');
//Import the Post resolver we created
const PostResolver = require('../resolvers/Post');

module.exports = {
    index() {
        return {
            type: new GraphQL.GraphQLList(PostType),
            description: 'This will return all the posts we find in the given subreddit.',
            args: {
                subreddit: {
                    type: GraphQLString,
                    description: 'Please enter subreddit name'
                }
            },
            resolve(parent, args, context, info) {
                return PostResolver.index(args);
            }
        }
    }
}