import { useList } from "@pankod/refine-core";

import { Typography, Box } from "@pankod/refine-mui";
import { AgentCard } from "components";

const Agents = () => {
  const { data, isLoading, isError } = useList({ resource: "users" });

  const allgents = data?.data ?? [];

  if (isLoading) return <div>Loading.......</div>;
  if (isError) return <div>Error.......</div>;

  return (
    <Box bgcolor="#5544551c" padding={4}>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Agents List
      </Typography>
      <Box
        mt="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: "#f1ebeb"
        }}
      >
        {allgents.map((agent) => {
          return (
            <AgentCard
              key={agent._id}
              id={agent._id}
              name={agent.name}
              email={agent.email}
              avatar={agent.avatar}
              noOfProperties={agent.allProperties.length}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Agents;
