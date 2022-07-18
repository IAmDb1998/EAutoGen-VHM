import React from "react";
import { Col, Container, Row,Button } from "react-bootstrap";
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
                <strong className="pb-2 d-flex">How do I know if my car is eligible for AutoGen PLUS?</strong>
                <p className="pb-2 d-flex">"Your car must meet the following criterias: 
Car Type: Private Use Car (excluding Commercial Use Car and e-Hailing), including Reconditioned Car/Used Car/Existing on the road car
Car Age: up to 10 years, and
Odometer Reading: less than 200,000km mileage"</p>

                <strong className="pb-2 d-flex">Is Car Inspection compulsory prior to plan activation?</strong>
                <p className="pb-2 d-flex">"Yes, your Car is required to undergo a car inspection at any of our authorized partners prior to plan activation.  Please visit the one nearest you for a short diagnosis test results within 90 days the Order Code is sent to you after purchase.  See all eAutoGen's authorized partners here.
"</p>

                <strong className="pb-2 d-flex">What if I am unable to send my car for inspection at any of your authorized partners listed?</strong>
                <p className="pb-2 d-flex">Please call our Help Desk at 03-7931 3663 during office hour or WhatsApp at the same number to arrange for a mobile inspection (limited areas).</p>

                <strong className="pb-2 d-flex">What are the warranty components of AutoGen PLUS? </strong>
                <p className="pb-2 d-flex">AutoGen PLUS covers 2 key components of a car - the engine and transmission.</p>

                <strong className="pb-2 d-flex">What is the program coverage period of AutoGen PLUS?</strong>
                <p className="pb-2 d-flex">1 calendar year or 30,000 kilometers mileage, whichever comes first.</p>

                {/* <strong className="pb-2 d-flex">What is the repair limit of AutoGen PLUS?</strong>
                <p className="pb-2 d-flex">AutoGen Plus provides repair limit up to RM20,000 per annum and RM10,000 per repair depending on your program plan.</p>

                <strong className="pb-2 d-flex">What is the maximum number of repairs per annum?</strong>
                <p className="pb-2 d-flex">There is no limit on the number of repairs as long as it is within your repair value per annum. </p>

                <strong className="pb-2 d-flex">What is the program cooling-off period?</strong>
                <p className="pb-2 d-flex">The cooling-off period is the first 7 days and the first 500 kilometers from program activation date before car repair works can commence. </p>

                <strong className="pb-2 d-flex">Do I have to perform the program maintainence as required? </strong>
                <p className="pb-2 d-flex">"To keep your AutoGen PLUS active, you must perform periodic maintenance according to the Interval Service Maintenance Schedule per manufacturer's recommendation at any eAutoGen's panel workshop, at your own expense below: 
- For cars using semi-synthetic lubricant: 3 months (or 5,000 kilometers, whichever earlier)
- For cars using fully-synthetic lubricant: 6 months (or 10,000 kilometers, whichever earlier)
See all eAutoGen's panel workshop here."</p>

                <strong className="pb-2 d-flex">Can I go to a non-panel workshop for program maintenance ?</strong>
                <p className="pb-2 d-flex">"You are required to send you car to only eAutoGen's panel workshops for periodic maintenance. Please retain copies of all maintenance receipts (computer generated document with workshop stamp) during the term of the AutoGen PLUS and submission of these maintenance receipts may be requested during repair claim. 
See all eAutoGen's panel workshop here."</p>

                <strong className="pb-2 d-flex">How do I know if my car problem is within the scope of AutoGen PLUS?</strong>
                <p className="pb-2 d-flex">You can take your car to any eAutoGen’s panel workshops for assessment.  See all eAutoGen's panel workshop here.</p>

                <strong className="pb-2 d-flex">What kind of replacement part(s) will be provided in the event of engine and transmission repair?</strong>
                <p className="pb-2 d-flex">Damaged components under AutoGen PLUS will be replaced with used, reconditioned or OEM parts under the discretion of eAutoGen.</p>

                <strong className="pb-2 d-flex">Do I need to pay upfront for the repair?</strong>
                <p className="pb-2 d-flex">No upfront payment is required.  Kindly ensure you only go to eAutoGen's panel workshop for the repair. See all eAutoGen's panel workshop here.</p>

                <strong className="pb-2 d-flex">What happens if repair works involve AutoGen PLUS warranty out of scope components ?</strong>
                <p className="pb-2 d-flex">Should there be any repairs beyond AutoGen PLUS coverage and repair limit, you are required to pay the workshop directly.</p>

                <strong className="pb-2 d-flex">In the event of car accident, will I be entitled to repair the damaged parts (car engine and transmission) under AutoGen PLUS?</strong>
                <p className="pb-2 d-flex">In such situation, you should reach out to your car insurance company. AutoGen PLUS program cushions you from repair cost arising from unexpected mechanical breakdown of the warranty components.</p>

                <strong className="pb-2 d-flex">Is there any towing services ?</strong>
                <p className="pb-2 d-flex">Towing service is not included in AutoGen PLUS. You are advised to utilize your car insurance's towing services to any of our panel workshop. See all eAutoGen's panel workshop here. </p>

                <strong className="pb-2 d-flex">Is AutoGen Plus cancellable or refundable ? </strong>
                <p className="pb-2 d-flex">AutoGen PLUS is non-cancellable and non-refundable.  By purchasing AutoGen PLUS, it is deemed that you have read and agreed to the Terms and Conditions stipulated and will abide by it.</p>

                <strong className="pb-2 d-flex">Is AutoGen Plus cancellable or refundable ? </strong>
                <p className="pb-2 d-flex">AutoGen PLUS is non-cancellable and non-refundable.  By purchasing AutoGen PLUS, it is deemed that you have read and agreed to the Terms and Conditions stipulated and will abide by it.</p>

                <strong className="pb-2 d-flex">Is AutoGen PLUS renewable ? </strong>
                <p className="pb-2 d-flex">AutoGen PLUS is non-cancellable and non-refundable.  By purchasing AutoGen PLUS, it is deemed that you have read and agreed to the Terms and Conditions stipulated and will abide by it.
AutoGen PLUS is renewable at every 1 calendar period or 30,000 kilometers with preliminary car inspection and subject to no claims reported in prior year.</p>

                <strong className="pb-2 d-flex">Is AutoGen PLUS transferrable ?</strong>
                <p className="pb-2 d-flex">AutoGen PLUS is non-transferable by car owner. However, should the car change ownership during program period, please contact us for car ownership update for contuinity of program. </p>

                <strong className="pb-2 d-flex">Who should I contact for enquiries on AutoGen PLUS ?</strong>
                <p className="pb-2 d-flex">For any enquiries, our Help Desk is available at +603-7931 3663 every Mondays to Fridays from 9:00 am to 6:00 pm. Alternatively, you can email us at cs@eAutoGen.my</p> */}
                </div>
            </Col>
            <a className="text-center m-auto" style={{textDecoration:"none"}} ><Button style={{marginTop:"20px"}} variant="primary"  >VIEW MORE FAQS</Button></a>
          </Row>
          
        </Container>
      </section>
    </>
  );
}

export default Faq;
