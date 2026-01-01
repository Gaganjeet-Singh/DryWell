import React from "react";
import { useNavigate } from "react-router-dom";

function Pickup() {
  const navigate = useNavigate();

  const goToBooking = () => {
    navigate("/booking");
  };

  return (
    <section id="HomeChoose" className="py-5">
      <div className="container-fluid px-0">
        <div className="row justify-content-center text-center m-0 mt-5 mb-5">
          <div className="col-12 col-md-10 col-lg-8 px-3">

            <h6 className="mt-2 mb-3">
              Ready to Experience Fresh, Clean Laundry?
            </h6>

            <h4 className="mt-2 mb-4">
              Schedule your first pickup today and discover why thousands trust
              FreshFold with their laundry.
            </h4>

            <button
              type="button"
              onClick={goToBooking}
              className="btn btn-light px-4 py-2"
              style={{ borderRadius: "20px" }}
            >
              Book Your Pickup Now
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Pickup;
