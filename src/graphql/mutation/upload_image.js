import {gql} from "@apollo/client";

export const UPLOADIMAGE = gql`
    mutation upload_image($file: Upload!) {
        upload_image(file: $file) {
            filename
        }
    }
`;
