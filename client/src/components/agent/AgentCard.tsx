import { AgentCardProp, InfoBarProps } from "interfaces/agent";
import {
  EmailOutlined,
  Info,
  LocationCity,
  Phone,
  Place
} from "@mui/icons-material";
import { useGetIdentity } from "@pankod/refine-core";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "@pankod/refine-react-router-v6";

const InfoBar = ({ icon, name }: InfoBarProps) => {
  return (
    <Stack flex={1} minWidth={{xs:'100%',sm:300}} gap={1.5} direction="row" >
      {icon}
      <Typography fontSize={14} color="#808191">{name}</Typography>
    </Stack>
  );
};

const AgentCard = ({
  id,
  name,
  email,
  avatar,
  noOfProperties
}: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity();

  const generateLink = () => {
    if (currentUser.email === email) return "/my-profile";
    return `/agents/show/${id}`;
  };




  return (
    <Box
      component={Link}
      to={generateLink()}
      width="100%"
      sx={{
        display: "felx",
        flexDirection: { xs: "column", sm: "row" },
        gap: "55px",
        padding: "20px",
        "&:hover": { boxShadow: "0 22px 45px 2px rgba(197, 93, 93, 0.1)" }
      }}
    >


      <img
        src={
          avatar ||
          "https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-512.png "
        }
        alt="user"
        width={90}
        height={90}
        style={{ borderRadius: 8, objectFit: "cover" }}
      />

      <Stack
        direction="column"
        justifyContent="space-between"
        flex={1}
        gap={{ xs: 4, sm: 2 }}
      >
        <Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
          <Typography fontSize={22} fontWeight={600} color="#11142d">
            {name}
          </Typography>
          <Typography fontSize={14} color="#808191">
            Real-Estate Agent
          </Typography>
        </Stack>

        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <InfoBar
            icon={<EmailOutlined sx={{ color: "#808191" }} />}
            name={email}
          />
          <InfoBar icon={<Place sx={{ color: "#808191" }} />} name="London" />
          <InfoBar
            icon={<Phone sx={{ color: "#808191" }} />}
            name="+929234343"
          />
          <InfoBar
            icon={<LocationCity sx={{ color: "#808191" }} />}
            name={`${noOfProperties} properties`}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCard;
