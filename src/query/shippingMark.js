import { gql } from '@apollo/client';

export const GET_SHIPPING_MARK = gql`
    query getShippingMark($groupId: Long) {
        shippingMarksGroup(groupId: $groupId) {
            items {
                abbreviation
                area
                cipher
                id
                constructionType
                width
                height
            }
        }
    }
`;
