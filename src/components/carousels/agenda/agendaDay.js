import Activity from "../activity";
import CoffeeBreak from "../coffeeBreak";

let contentStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "450px",
};

function AgendaDay({ activities }) {
  console.log(typeof activities);
  console.log(activities);
  return (
    <div style={contentStyle}>
      {activities.map((activity) => {
        return activity.type == "CoffeeBreak" ? (
          <CoffeeBreak name={activity.name} />
        ) : (
          <Activity
            main={activity.main}
            bigTitle={activity.bigTitle}
            title={activity.title}
            start={activity.start}
            end={activity.end}
            animator1={activity.animator1}
            day={activity.day}
            join={activity.join}
            activityID={activity.activityID}
            speaker1ID={activity.speaker1ID}
            speaker2ID={activity.speaker2ID}
            description={activity.description}
          />
        );
      })}
    </div>
  );
}

export default AgendaDay;
