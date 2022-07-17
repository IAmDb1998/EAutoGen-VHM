import React ,{useState,useRef}from "react";
import { Button,  Col,  Form, Image, Row } from "react-bootstrap";
import autogenplus_logo from "../../assets/img/autogenplus_logo.png";
import { useQuery } from "@apollo/react-hooks"

import { GETALLSTATES } from "../../queries/userQueries"
import { GETAllWORKSHOPS } from "../../queries/userQueries"
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Container,
  Chip
} from "@material-ui/core/";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

function AuthorizedWorkshops() {
     const [stateValue, setStateValue] = useState("");
     function onChange(e)
     {
       setStateValue(e.target.value);
     }
     console.log(stateValue)
      localStorage.setItem("stateId",stateValue)
     var { data } = useQuery(GETALLSTATES);
       const State = data?.getAllState?.allStateRes;
       const stateId= localStorage.getItem("stateId")
       var { data } = useQuery(GETAllWORKSHOPS, { variables: { stateId } });
       const workshops = data?.getWorkshopById?.allWorkshopRes
       console.log("valueeee", workshops);
     const itemsPerPage = 3;
  const [page, setPage] = React.useState(1);
  

  const handleChangePage = (event, value) => {
    setPage(value);
  };
  const noLoopNext = (event, value) => {
    setPage((currPage) => {
      if (currPage + 1 > Math.ceil(workshops.length / itemsPerPage)) {
        return currPage;
      } else {
        return currPage + 1;
      }
    });
  };

  const noLoopPrev = (event, value) => {
    setPage((currPage) => {
      if (currPage === 1) {
        return currPage;
      } else {
        return currPage - 1;
      }
    });
  };
  const loopNext = (event, value) => {
    setPage((currPage) => {
      if (currPage + 1 > Math.ceil(workshops.length / itemsPerPage)) {
        return 1;
      } else {
        return currPage + 1;
      }
    });
  };

  const loopPrev = (event, value) => {
    setPage((currPage) => {
      if (currPage === 1) {
        return Math.ceil(workshops.length / itemsPerPage);
      } else {
        return currPage - 1;
      }
    });
  };



  
    
  return (
    <>
      <section className="py-5 workshops">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-title">
                <span>Authorized Workshops</span>
                <h2>
                  <span>
                    GET YOUR CAR INSPECTED
                    <br /> FOR PLAN ACTIVATION
                  </span>{" "}
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={4}>
              {" "}
              <Form.Group
                className="mb-5 mt-5"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Select aria-label="Default select example"  onChange={onChange}>
                  <option>Filter by State</option>
                  {State?.map((option, index) => (
          <option key={index} value={option.id}>
            {option.name}
          </option>
        ))}
   
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          
        
          <Carousel
        autoPlay={false}
        onClick={handleChangePage}
        next={loopNext}
        prev={loopPrev}
        NextIcon={<ArrowForwardIosRoundedIcon fontSize="large" />}
        PrevIcon={<ArrowBackIosRoundedIcon fontSize="large" />}
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "transparent",
            color: "#447CF0"
          }
        }}
        indicators={true}
        swipe={true}
        animation="slide"
      >
        <Container  maxWidth="lg" component="main">
            <Grid container>
		        {workshops?.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(
		          (option, index) => {
		            return (
		              
		                  <Grid item key={index}  md={4}>
		                  
                        <div className="workshop-box">
                    <Image src={autogenplus_logo} fluid />
                    <h4>{option.name}</h4>
                    <p>{option.address}</p>
                    <p>{option.telephone}</p>
                  </div>
		                  </Grid>
		                
		            	);
          			}
          		)}
        	</Grid>
        </Container>
      </Carousel>
         
          <Row>
          <Col md={8} className="d-flex m-auto mt-5">
                    <Button variant="primary"  onClick={() => window.scrollTo(0, window.innerHeight)} className=" text-center m-auto">GET QUOTE</Button>
                  </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AuthorizedWorkshops;
