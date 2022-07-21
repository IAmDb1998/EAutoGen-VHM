import { gql } from "@apollo/client";

const GETAllBRANDS = gql`
  query {
    getAllBrands {
      allVehicleRes {
        id
        brand
      }
    }
  }
`;
const GETAllMODELS = gql`
  query getBrandById($brandId: ID) {
    getBrandById(brandId: $brandId) {
      allVehicleModelRes {
        modelName
        id
      }
    }
  }
`;

const GETALLDEALERUSERS = gql`
 query getAllUserCreatedByAdmin($createdByuserId: ID) 
 {
  getAllUserCreatedByAdmin(createdByuserId: $createdByuserId) {
    allUserRes {
      id
      name
      email
      mobile
      role
      status
    }
  }
}
`;
const GETALLSTATES = gql`
  query {
  getAllState
  {
    allStateRes{
      id
      name
    }
  }
}
  `
  const GETAllWORKSHOPS = gql`
  query 
  getWorkshopById($stateId: ID) {
    getWorkshopById(stateId:$stateId){
      allWorkshopRes{
        area
        address
        telephone
        name
        email
        fax
        id
      }
    }
  }
  `
export { GETAllBRANDS, GETAllMODELS ,GETALLSTATES,GETAllWORKSHOPS,GETALLDEALERUSERS};
