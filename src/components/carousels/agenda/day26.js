import Activity from "../../carousels/activity";
import CoffeeBreak from "../../carousels/coffeeBreak";

let contentStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "450px",
};

function Day26() {
  return (
    <div style={contentStyle}>
      <Activity
        start="9:30"
        end="11:30"
        bigTitle="Sensores e Algoritmos para Navegação Autónoma."
        title="Workshop"
        animator="Bosch"
      />
      <Activity
        start="9:30"
        end="11:30"
        bigTitle="TBD"
        title="Workshop"
        animator="TBD"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="TBD"
        title="Talk"
        start="12:00"
        end="13:00"
        animator="TBD"
      />
      <CoffeeBreak name="Lunch Break" />
      <Activity
        main="yes"
        bigTitle="TBD"
        title="Talk"
        start="14:00"
        end="15:00"
        animator="TBD"
      />
      <Activity
        main="yes"
        bigTitle="Como conseguires o teu emprego de sonho na Google"
        title="Talk"
        start="15:00"
        end="16:00"
        animator="André Lago (Google)"
        day={3}
        speakerID="andrelago"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="TBD"
        title="Pitch"
        start="16:30"
        end="16:45"
      />
      <Activity
        main="yes"
        bigTitle="Teleperformance"
        title="Pitch"
        start="16:45"
        end="17:00"
      />
      <Activity
        main="yes"
        bigTitle="Closing Session and Prize Announcement"
        start="17:00"
        end="18:00"
      />
      <Activity
        main="yes"
        bigTitle="Hackathon (42 hours)"
        start="21:00"
        end="24:00"
      />
    </div>
  );
}

export default Day26;
