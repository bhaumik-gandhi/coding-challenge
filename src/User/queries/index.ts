import gql from "graphql-tag";

export const GET_USERS = gql `{
    users {
        _id
        firstName
        lastName
        email
        phone
        address {
            firstLine
            secondLine
            city
            state
            country
            zipcode
            geo {
                lat
                lon
            }
        }
    }
}`;