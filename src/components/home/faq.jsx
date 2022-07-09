import React from "react";
import { Col, Container, Row } from "react-bootstrap";
function Faq() {
  return (
    <>
      <section className="py-5 faq">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-title light">
                <span>Popular Question</span>
                <h2>
                  {" "}
                  <span>FREQUENTLY ASKED QUESTION </span>
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
                <div className="faq-box mt-5">
                <strong className="pb-2 d-flex">How I Can Buy Product?</strong>
                <p className="pb-2 d-flex">FAQ will be provided on a separate deck</p>
                <strong className="pb-2 d-flex">Do I Need to Make a Payment?</strong>
                <p className="pb-2 d-flex">We are e ideal solution for your next grand opening, or the next concept with an affordable design to build a strong brand. We are e ideal solution for your next grand opening, or the next concept with an affordable design to build a strong brand.</p>
                <strong className="pb-2 d-flex">Do You Provide Mobile Application?</strong>
                <p className="pb-2 d-flex">We are e ideal solution for your next grand opening, or the next concept with an affordable design to build a strong brand. We are e ideal solution for your next grand opening, or the next concept with an affordable design to build a strong brand.</p>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Faq;
