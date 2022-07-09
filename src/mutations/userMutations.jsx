import { gql } from "@apollo/client";

const SIGNUP = gql`
  mutation registerUser(
    $name: String
    $email: String
    $mobile: String
    
  ) {
    registerUser(
      name: $name
      email: $email
      mobile: $mobile
      
    ) {
     userId
    message   
    }
  }
`;






const LOGIN = gql`
  mutation validateUser(
    $email: String)
     {
        validateUser
    (email: $email,
         )
          {

      token
    }
  }
`;

const USER_OTP = gql`
mutation   verifyOtp(
    $email: String, $otp: String
    )
    {
        verifyOtp(
            email: $email,
            otp: $otp
        )
        {
            token
        }
    }

`

export { LOGIN, SIGNUP ,USER_OTP};
