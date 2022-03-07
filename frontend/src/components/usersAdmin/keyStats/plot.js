import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Container, Typography } from "@mui/material";

const labels = {
  ageDistribution: ["18-23", "23-28", "28-33", "38-43", "43-over"],
  exercise: ["Daily", "Often", "Moderate", "Sometimes", "Never"],
};
const distribution = {
  ageDistribution: [30, 25, 10, 5, 5, 5],
  exercise: [15, 20, 30, 20, 15],
};

const titles = {
  ageDistribution: "Age Distribution",
  exercise: "Exercise",
};

const types = {
  ageDistribution: "pie",
  exercise: "bar",
};

//https://react-chartjs-2.js.org/examples/pie-chart
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

const data = {
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
  exercise: {
    labels: labels.exercise,
    datasets: [
      {
        data: distribution.exercise,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  },
};

const options = {
  ageDistribution: {
    aspectRatio: 1.2,
  },
  exercise: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const getData = () => {
  // server call
  return data;
};

const Plot = (props) => {
  const { source } = props;

  if (source !== "None") {
    return (
      <Container>
        <Typography variant="h3" gutterBottom>
          {titles[source]}
        </Typography>
        <Chart
          type={types[source]}
          data={getData()[source]}
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
