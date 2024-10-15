import { Box, Typography, Stack } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";
import { ArrowCircleUpRounded } from "@mui/icons-material";
import {
  TotalRevenueOptions,
  TotalRevenueSeries
} from "components/layout/charts/chart.config";

const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize="18px" fontWeight="600" color="#11142d">
        Total revenue
      </Typography>

      <Stack my="20px" gap={4} flexWrap="wrap" direction="row">
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          $236,534
        </Typography>
        <Stack direction="row" alignItems="center" gap="1">
          <ArrowCircleUpRounded sx={{ fontSize: 25, color: "#475be8" }} />
          <Stack>
            <Typography fontSize={15} color="#475be8">
              0.8%
            </Typography>
            <Typography fontSize={12} color="#808191">
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>


      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  );
};

export default TotalRevenue;
