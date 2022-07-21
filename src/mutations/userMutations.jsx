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

const DEALER_USER=gql`
mutation   userCreateByDealer(
  $name: String
  $email: String
  $mobile: String
  $role: String
  $status: String
  $createdBy: ID
){
  userCreateByDealer(
    name: $name
    email:$email 
    mobile:$mobile
    role: $role
    status:$status
    createdBy:$createdBy
  ) {
    userId
    message
    token
    error
    name
    email
    mobile
    role
  }
}
`; 

const USER_PROFILE_UPDATE = gql`
 mutation updateUserProfile(
  $userId: String
  $name: String
  $email: String
  $mobile: String

 )
 {
  updateUserProfile(
    userId: $userId
     name:$name
     email:$email
    mobile:$mobile
  ) {
         message
         error
   
    
   }
}
`;
const CUSTO_DETAILS = gql`
mutation customerDetails(
  $name: String
  $email: String
  $mobile: String
  $nric: String
  $state: String
){
 customerDetails
  (
    name:$name
  email:$email
  mobile:$mobile
  nric:$nric
  state:$state
  )
  {
    id
    name
    email
    mobile
    nric
    state
  }
}
`

const GETQUOTATION = gql`
mutation createQuotation (
  $email:String
  $year:String
  $userName:String
  $mobile:String
  $modelId:ID
  $brandId:ID
  ){
  createQuotation(inputQuote :{
    email:$email
    year:$year
    userName:$userName
    mobile:$mobile
    modelId:$modelId
    brandId:$brandId
    

  }
    
  ){
    id
    brandName
    modelName
    year
    userName
    email
    mobile
    price
    token
    brandId
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

export { LOGIN, SIGNUP ,USER_OTP,GETQUOTATION,CUSTO_DETAILS,DEALER_USER,USER_PROFILE_UPDATE};
