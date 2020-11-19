import {gql} from "@apollo/client";

export const UPLOAD_IMAGE = gql`
    mutation upload_image($file: Upload!) {
        upload_image(file: $file) {
            filename
        }
    }
`;
