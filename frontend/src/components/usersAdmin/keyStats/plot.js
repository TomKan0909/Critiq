import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Container, Typography } from "@mui/material";
import { getAllUsersStats } from "../../../apis";

//https://react-chartjs-2.js.org/examples/pie-chart

const options = {
  ageDistribution: {
    aspectRatio: 1.2,
  },
  ethnicity: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const types = {
  ageDistribution: "pie",
  ethnicity: "bar",
};



const labels = {
  ageDistribution: ["18-23", "23-28", "28-33", "33-43", "43-over"],
  ethnicity: ["Daily", "Often", "Moderate", "Sometimes", "Never"],
};

const titles = {
  ageDistribution: "Age Distribution",
  ethnicity: "Ethnicity",
};

const backgroundColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];

const borderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];


const Plot = (props) => {
  const { source } = props;
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    async function getUserStats() {
      const distribution = await getAllUsersStats();
      setData({
        ageDistribution: {
          labels: labels.ageDistribution,
          datasets: [
            {
              data: distribution.ageDistribution,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1,
            },
          ],
        },
        ethnicity: {
          labels: Object.keys(distribution.ethnicity),
          datasets: [
            {
              data: Object.values(distribution.ethnicity),
              backgroundColor: Object.keys(distribution.ethnicity).map((_, i) => backgroundColor[i % 6]),
              borderColor: Object.keys(distribution.ethnicity).map((_, i) => borderColor[i % 6]),
              borderWidth: 1,
            },
          ],
        },
      })
    }
    getUserStats()
  }, [])

  if (source !== "None" && data) {
    return (
      <Container>
        <Typography variant="h3" gutterBottom>
          {titles[source]}
        </Typography>
        <Chart
          type={types[source]}
          data={data[source]}
          options={options[source]}
          redraw
        />
      </Container>
    );
  } else {
    return null;
  }
};

export default Plot;
