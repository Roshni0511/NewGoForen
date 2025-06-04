import React, { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";

const FanFactItem = ({ end, suffix, title }) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="col-lg-4 col-md-4">
      <div className="xb-fanfact xb-fanfact1">
        <div className="xb-item--inner" ref={ref}  style={{
        backgroundImage: 'linear-gradient(135deg, rgba(214, 131, 48, 0.4), rgba(158, 63, 63, 0))',
      borderRadius:'0px'
      }}>
          <h2 className="xb-item--number">
            {inView ? <CountUp end={parseInt(end)} duration={2} /> : "00"}
            <span className="suffix">{suffix}</span>
          </h2>
          <span className="xb-item--dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <h5
            className="xb-item--title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      </div>
    </div>
  );
};

export default function Counter() {
  return (
    <div>
      <section className="fanfact pos-rel">
        <div className="container">
          <div className="row g-0">
            <FanFactItem
              end="30"
              suffix="K"
              title="We Have Worked <br/> With Clients"
            />
            <FanFactItem
              end="100"
              suffix="%"
              title="Successful Visa <br/> Process Rate"
            />
            <FanFactItem
              end="1"
              suffix="DAY"
              title="Application Approval <br/> Processing Time"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
