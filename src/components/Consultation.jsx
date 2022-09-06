import Button from "./Button";

const Consultation = () => {
  return (
    <section className="consultation bg-grey">
      <div className="content">
        <h3>Lad os tale sammen</h3>
        <Button text="Book konsultation" link="/getstarted" />
      </div>
    </section>
  );
};

export default Consultation;
