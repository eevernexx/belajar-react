import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useRef, useState } from 'react';

const chartSetting = {
  height: 400,
  yAxis: [
    {
      disableTicks: true,
      disableLine: true,
    },
  ],
  grid: {
    horizontal: true,
  },
  sx: {
    ["& .MuiChartsAxis-left .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
    ["& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
  },
  slotProps: {
    legend: {
      direction: 'row',
      position: { vertical: 'top', horizontal: 'middle' },
      padding: 0,
    },
  },
};

export default function BarsDataset(props) {
  const { dataset } = props;
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.offsetWidth;
        if (newWidth > 0) {
          setWidth(newWidth);
        }
      }
    };

    // Initial update with slight delay to ensure container is rendered
    const timer = setTimeout(updateWidth, 0);

    // Also update immediately
    updateWidth();

    window.addEventListener('resize', updateWidth);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  if (width === 0) {
    return <div ref={containerRef} style={{ width: '100%', height: '400px' }}>Loading...</div>;
  }

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <BarChart
        dataset={dataset.data}
        xAxis={[{ scaleType: 'band', dataKey: dataset.dataKey, categoryGapRatio: 0.5 }]}
        series={dataset.series}
        width={width}
        {...chartSetting}
        margin={{ top: 60, right: 20, bottom: 40, left: 60 }}
      />
    </div>
  );
}
