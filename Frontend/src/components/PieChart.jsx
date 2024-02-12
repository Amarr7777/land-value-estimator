import React from 'react'

function PieChart() {
    const landTypes = srcData.map((data) => data.land_type);
    const marketValues = srcData.map((data) => data.market_value);

  // Generating random colors for each land type
  const colors = landTypes.map(() => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  });
  const data = {
    labels: landTypes,
    datasets: [
      {
        data: marketValues,
        backgroundColor: colors,
      },
    ],
  };
  return (
    <Doughnut data={data} />
  );
}

export default PieChart