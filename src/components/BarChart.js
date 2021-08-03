import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

export const BarChart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 2,
            },
            // {
            //   label: "Quantity",
            //   data: [98, 45, 90, 53, 43, 12],
            //   backgroundColor: ["salmon"],
            // },
          ],
        }}
        height="600"
        width="1000"
        options={{
          maintainAspectRatio: false,
          responsive: false,
        }}
      />
    </div>
  );
};

export default BarChart;
